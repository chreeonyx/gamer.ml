Array.prototype.attr = function(p) { var i=0, elems=[]; elems.forEach.call(this, function(a) { for (var key in p) { p.hasOwnProperty(key) ? a.setAttribute(key, p[key]) : null; } }); return this; };
Array.prototype.html = function(html) { var that = this; return new Promise(function(resolve, reject) { var i=0, elems=[]; elems.forEach.call(that, function(a) { a.innerHTML = html; }); resolve(that[0]); return that[0]; }); };
Array.prototype.remove = function() { this.forEach(function(a) { a.remove(); }); return this; };
Element.prototype.find = function(elem) { return this.querySelector(elem); };
String.prototype.hash = function(state=this.valueOf(),g=[]) { 
  state.split('/').forEach((a,i) => { g[i] = a; }); 
  g[0] === "" ? g.shift() : null; g[g.length - 1] === "" ? g.pop() : null; return g; 
};
String.prototype.bang = function (title) { history.pushState(this,title,this); document.body.dataset.href = this; };
function ajax(url, settings) { //console.log(url, settings);
  return new Promise((resolve, reject) => {
    var req = new XMLHttpRequest();
    var onLoad = event => { req.status >= 400 ? reject(req) : resolve(req.responseText); }, onFail = function(event) { reject(event); };
    req.addEventListener('load', onLoad);
    req.addEventListener('error', onFail);
    req.addEventListener('abort', onFail);
    req.open(settings.dataType, url);
    settings.contentType ? req.setRequestHeader("Content-type", settings.contentType) : null;
    if(settings.dataType === 'POST') { settings.data ? req.send(JSON.stringify(settings.data)) : req.send(); }
    else { req.send() }
  });
}
function byId(id) { return document.getElementById(id); }
function str_replace(find,replace,string) { return string.replace(find,replace); }
function $(obj) { return (typeof obj === 'object') ? (NodeList.prototype.isPrototypeOf(obj)) ? [].slice.call(obj) : (Element.prototype.isPrototypeOf(obj) ? [obj] : null) : (typeof obj === 'string' ? [].slice.call(obj) : null); }