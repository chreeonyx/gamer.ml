AudioContext = window.AudioContext || window.webkitAudioContext;
window.addEventListener("popstate", e => { e.state ? e.state.router({reload:true, pop:true}) : null; });
window.addEventListener("resize", () => { is.mobile(); });
window.is = {
  mobile: () => { /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? $(document.body).attr({'data-mobi': true}) : document.body.dataset.mobi ? document.body.removeAttribute('data-mobi') : null; },
  online: () => { return firebase.auth().currentUser; }
}
function exit(target) { target.closest('popup').remove(); }
function init() {
    console.log('Initializing...');
    window.audio = byId('audio');
    window.video = byId('video');
    window.location.pathname.router();
}
function hiStory(state) { var length = browser.length, current = length>0 ? browser[length-1] : null; }
function popUp(h,i) {
  return new Promise((resolve, reject) => {
    var div = document.createElement('popup'); div.setAttribute('class', 'popup content'); 
    zLoop(document.querySelectorAll('popup'));
    $(document.body.insertBefore(div, document.body.find('popup') ? document.body.find('popup') : byId('wrapper')))
      .html(h).then(() => resolve(div));
  });
}
function zLoop(elem) { elem.forEach((v,k) => { v.style.zIndex = 123456789+k; }); }