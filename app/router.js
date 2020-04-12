String.prototype.router = function(a, b=a?a:{}, pop=b.pop ? b.pop : null) {
    var page = '', path = (this.valueOf()).replace(window.location.host,'');
    window.GET = path===window.location.origin ? [] : route.get.path.dir(path), arr = []; console.log({GET,path});
    return new Promise((resolve, reject) => {
        if(path) {
          body.dataset.page = page; body.dataset.path = path; 
          history.pushState(path,null,path); resolve(path); 
        }
        else { reject({error:'path error',code:666}); }
    });
};
window.route = {
  get: {
    path: {
      dir: (url,g=[]) => {
        url.split('/').forEach((a,i) => { a ? g.push(a) : null; }); 
        g[0] === "" ? g.shift() : null; g[g.length - 1] === "" ? g.pop() : null; return g; 
      },
      url: dir => { return dir.length === 0 ? '/' : '/'+dir.join('/')+'/'; }           
    }
  }
}