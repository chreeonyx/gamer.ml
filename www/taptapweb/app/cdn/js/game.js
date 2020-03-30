function spawn() {
  var arrow = document.createElement('arrow');
  byId('area').prepend(arrow);
}
window.game = {
  init: (e) => { console.log(e);
    window.icon = byId('icon');
    audio.src='/cdn/audio/runordie.m4a';
    controls();   
    ajax('/cdn/json/steps/'+GET[1]+'.json',{dataType:'GET'}).then(f => { f = JSON.parse(f);
      game.build(f).then(res => { console.log(e,res);
        console.log(byId('game'),e)
        if(e.event) { game.state(); }
        //byId('game').classList.remove('paused');
        //byId('game').classList.add('play');
      });
    });
  },
  build: e => { console.log('BUILD',e);
    return new Promise(function(resolve, reject) {
      var meta = e.meta;
      var bpm = meta.bpm;
      var sig = meta.time_signature;
      var steps = e.steps;
      var height=0;
      for(k=0,html={"steps": ""};k<steps.length;k++) { 
        var direction = steps[k].direction, step = steps[k].step, position = (step[0]*100) + (100/sig[1])*step[1];
        //console.log(position,100/sig[1],step[1]);
        html.steps += '<'+direction+' style="transform:translateY('+position+'%)"></'+direction+'>';
      }
      byId('steps').innerHTML = html.steps; height = 1440;
      byId('steps').clientHeight = height; //alert(byId('steps').clientHeight);
      resolve(html);
    });
  },
  controls: event => { event.preventDefault();
    var taps = [byId('tap-one')];
    ctrl({type:event.type,which:event.which});
    if(['keydown','keyup'].includes(event.type)) {
      event.type==='keydown' ? taps[0].dataset.tap = event.which : null;
      event.type==='keyup' ? taps[0].removeAttribute('data-tap') : null;
      switch(event.which) {        
          case 37: break;
          case 38: break;
          case 39: break;
          case 40: break;
          default: return;
      } 
    }
    function ctrl(e) { console.log(e); 
      var type = e.type, which = e.which, hit = game.timing[4];
      event.type==='keydown' ? icon.dataset.tap = hit : null;
      event.type==='keyup' ? icon.removeAttribute('data-tap') : null;
    } 
  }, 
  play: () => {
      byId('game').classList.remove('paused'); 
      byId('game').classList.add('play');    
      byId('file').classList.add('running');     
  },
  pause: () => {
      byId('game').classList.add('paused'); 
      byId('game').classList.remove('play');    
      byId('file').classList.remove('running');   
  },
  rand: (a,b) => { return Math.floor(Math.random() * b) + a; },
  state: () => {
    var state = byId('game').classList.contains('paused');
    game[state ? 'play' : 'pause']();
    byId('audio')[state ? 'play' : 'pause']();
  },
  timing: ["miss","good","great","perfect","marvelous"],
  tick: timeStamp => {   
    var currentTime = audio.currentTime, duration = audio.duration, percent = (currentTime/duration)*100;
    //byId("line").style.left = percent+'%';
    byId("waveform").style.right = percent+'%';
    console.log({currentTime,duration,timeStamp,percent});
  },
  quit: () => { var route = '/play/'+GET[1]+'/'; route.router(); },
  restart: event => { window.location.pathname.router({event});  }
}
function controls() {
  byId('left').addEventListener('click', e => game.controls(e));
  byId('down').addEventListener('click', e => game.controls(e));
  byId('up').addEventListener('click', e => game.controls(e));
  byId('right').addEventListener('click', e => game.controls(e));  
  document.onkeydown = document.onkeyup = e => game.controls(e);
}