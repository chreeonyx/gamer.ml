String.prototype.route = String.prototype.router = function(d, e = d ? d : {}, state = this.valueOf()) { //window.location.href = state;
  return new Promise(function(resolve, reject) {
    if(state) { 
      GET = state===window.location.origin ? [] : state.hash(); var GUT = [];
      GET.forEach((m,n) => { whsh = str_replace('#','',m), GUT[n] = whsh;
        if(
          (n === 1 && GET[0]=='play') ||
          (n === 1 && GET[0]=='play' && GET[2]==='game') 
        ) { GUT[n] = '#'; }
      });
      var iHash = GUT.length === 0 ? '/' : '/'+GUT.join('/')+'/', container = section(iHash);
      var framework = window.routes[container][iHash==='/' ? "/" : GUT[0]][iHash], fw = framework[1<0 ? 'isprotected' : 'unprotected'];
      var that = document.querySelector('.'+container+'.content') ? document.body.querySelector('.'+container+'.content') : $(document.createElement('popup')).attr({'class': 'popup content', 'role': 'application'})[0];
      container === 'popup' ? document.body.insertBefore(that, byId('wrapper')) : (document.querySelector('.popup') ? $(document.querySelectorAll('.popup')).remove() : null);
      ajax(fw.template, {contentType: 'text/html', dataType:'GET'}).then(template => $(that).html(template).then(() => {
        if(['/play/'].includes(iHash)) {
          for(k=0,html='';k<window.songs.length;k++) { var v = window.songs[k];
            html += '<song data-uid="'+v.uid+'">';
              html += '<name>'+v.name+'</name>';
              html += '<play>'+'</play>';
              html += '<rate>'+'</rate>';
            html += '</song>';
          };
          byId('songs').innerHTML = html;
        }
        if(['/play/#/game/'].includes(iHash)) { game.init(e); } else { var audio=byId('audio'); audio.pause(); audio.currentTime=0; }
        document.body.dataset.view = GUT[0]; hiStory(state); state.bang(); resolve();
      }));
    }
  });
};
function section(r,s=r==='' ? '/' : r) {
  var r = s.hash()[0] ? s.hash()[0] : "/"; var k=0;
  for(container of Object.keys(routes)) {
    if(Object.keys(Object.values(routes)[k]).includes(r)) {
      if(Object.keys(Object.values(routes)[k][r]).includes(s)) { return Object.keys(routes)[k]; }
    } k++;
  }
}