function isLocal() { return window.location.origin.includes('localhost') ? true : false; }
function dataBase(endpoint) {
  return new Promise((resolve, reject) => {
      console.log('Downloading database...'); window.tables = {};
      datastores.forEach((table,key) => {
            var network = str_replace('.com','',window.location.hostname);
            var endpoints = {network: "https://"+(isLocal() ? 'localhost.' : '')+"api.mallzones.com"+(isLocal() ? ':448' : '')+"/v1/read/"+table, local: "/db/"+table+"/index.json"};
            ajax(endpoints.network, {dataType: 'GET'}).then(data => { window.tables[table] = JSON.parse(data); key === datastores.length - 1 ? resolve(tables) : null; });
      });
  });
}
function tempLate(tables) { return new Promise((resolve, reject) => resolve(tables)); }
function buildDB(name, version) { console.log('buildDB', tables);

  return new Promise((resolve, reject) => {

    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      var dltDbs = indexedDB.deleteDatabase(name);
      var schema = lf.schema.create(name, 1);

      schema.createTable("activity")
        .addColumn('created', lf.Type.STRING)
        .addColumn('ref', lf.Type.STRING)
        .addColumn('tbl', lf.Type.STRING)
        .addColumn('type', lf.Type.STRING)
        .addColumn('user', lf.Type.STRING)
        .addColumn('uid', lf.Type.STRING)
        .addPrimaryKey(['uid']);

      schema.createTable("ads")
        .addColumn('uid', lf.Type.STRING)
        .addColumn('app', lf.Type.STRING)
        .addColumn('button', lf.Type.STRING)
        .addColumn('created', lf.Type.STRING)
        .addColumn('description', lf.Type.STRING)
        .addColumn('id', lf.Type.INTERGER)
        .addColumn('name', lf.Type.STRING)
        .addColumn('placement', lf.Type.STRING)
        .addColumn('url', lf.Type.STRING)
        .addColumn('usr', lf.Type.STRING)
        .addPrimaryKey(['uid']);

      schema.createTable("blocks")
        .addColumn('id', lf.Type.INTERGER)
        .addPrimaryKey(['id']);

      schema.createTable("blogs")
        .addColumn('app', lf.Type.STRING)
        .addColumn('category', lf.Type. STRINF)
        .addColumn('created', lf.Type.STRING)
        .addColumn('description', lf.Type.STRING)
        .addColumn('href', lf.Type.STRING)
        .addColumn('html', lf.Type.STRING)
        .addColumn('image', lf.Type.STRING)
        .addColumn('page', lf.TypeSTRING)
        .addColumn('title', lf.Type.STRING)
        .addColumn('updated', lf.Type.STRING)
        .addColumn('uid', lf.Type.STRING)
        .addColumn('user', lf.Type.STRING);

      schema.createTable("brands")
        .addColumn('uid', lf.Type.STRING)
        .addColumn('base', lf.Type.STRING)
        .addColumn('color', lf.Type.STRING)
        .addColumn('description', lf.Type.STRING)
        .addColumn('name', lf.Type.STRING)
        .addColumn('shortname', lf.Type.STRING)
        .addColumn('user', lf.Type.NUMBER)
        .addColumn('zone', lf.Type.NUMBER)
        .addPrimaryKey(['uid']);

      schema.createTable("carts")
        .addColumn('id', lf.Type.INTERGER)
        .addPrimaryKey(['id']);

      schema.createTable("categories")
        .addColumn('id', lf.Type.INTERGER)
        .addPrimaryKey(['id']);

      schema.createTable("history")
        .addColumn('id', lf.Type.INTERGER)
        .addColumn('pathname', lf.Type.STRING)

      schema.createTable("interests")
        .addColumn('id', lf.Type.INTERGER)
        .addPrimaryKey(['id']);

      schema.createTable("merch")
        .addColumn('app', lf.Type.STRING)
        .addColumn('created', lf.Type.STRING)
        .addColumn('html', lf.Type.STRING)
        .addColumn('images', lf.Type.STRING)
        .addColumn('page', lf.Type.STRING)
        .addColumn('parentId', lf.Type.STRING)
        .addColumn('title', lf.Type.STRING)
        .addColumn('uid', lf.Type.STRING)
        .addPrimaryKey(['uid']);

      schema.createTable("pages")
        .addColumn('app', lf.Type.NUMBER)
        .addColumn('category', lf.Type.NUMBER)
        .addColumn('department', lf.Type.NUMBER)
        .addColumn('name', lf.Type.STRING)
        .addColumn('subdepartment', lf.Type.NUMBER)
        .addColumn('template', lf.Type.NUMBER)
        .addColumn('uid', lf.Type.STRING)
        .addColumn('updated', lf.Type.STRING)
        .addPrimaryKey(['uid']);

      schema.createTable("photo")
        .addColumn('id', lf.Type.STRING)
        .addColumn('app', lf.Type.STRING)
        .addColumn('category', lf.Type.STRING)
        .addColumn('created', lf.Type.STRING)
        .addColumn('description', lf.Type.STRING)
        .addColumn('href', lf.Type.STRING)
        .addColumn('image', lf.Type.STRING)
        .addColumn('page', lf.Type.STRING)
        .addColumn('source', lf.Type.STRING)
        .addColumn('title', lf.Type.STRING)
        .addColumn('updated', lf.Type.STRING)
        .addColumn('user', lf.Type.STRING)
        .addColumn('uuid', lf.Type.STRING)
        .addPrimaryKey(['id']);

      schema.createTable("playlists")
        .addColumn('id', lf.Type.INTERGER)
        .addPrimaryKey(['id']);

      schema.createTable("ratings")
        .addColumn('id', lf.Type.INTERGER)
        .addPrimaryKey(['id']);

      schema.createTable("tagmap")
        .addColumn('ref', lf.Type.STRING)
        .addColumn('tag', lf.Type.STRING);

      schema.createTable("tags")
        .addColumn('uid', lf.Type.STRING)
        .addColumn('tag', lf.Type.STRING)
        .addPrimaryKey(['uid']);

      schema.createTable("users")
        .addColumn('avi', lf.Type.STRING)
        .addColumn('birthdate', lf.Type.STRING)
        .addColumn('bio', lf.Type.STRING)
        .addColumn('cover', lf.Type.STRING)
        .addColumn('created', lf.Type.STRING)
        .addColumn('fullname', lf.Type.STRING)
        .addColumn('gender', lf.Type.STRING)
        .addColumn('spawned', lf.Type.STRING)
        .addColumn('uid', lf.Type.STRING)
        .addColumn('username', lf.Type.STRING)
        .addPrimaryKey(['uid']);

      schema.createTable("video")
        .addColumn('app', lf.Type.STRING)
        .addColumn('category', lf.Type.STRING)
        .addColumn('created', lf.Type.STRING)
        .addColumn('description', lf.Type.STRING)
        .addColumn('duration', lf.Type.STRING)
        .addColumn('image', lf.Type.STRING)
        .addColumn('page', lf.Type.STRING)
        .addColumn('ref', lf.Type.STRING)
        .addColumn('source', lf.Type.STRING)
        .addColumn('title', lf.Type.STRING)
        .addColumn('updated', lf.Type.STRING)
        .addColumn('user', lf.Type.STRING)
        .addColumn('uid', lf.Type.STRING)
        .addPrimaryKey(['uid']);

      schema.createTable("zones")
        .addColumn('color', lf.Type.STRING)
        .addColumn('name', lf.Type.STRING)
        .addColumn('emoji', lf.Type.STRING)
        .addColumn('uid', lf.Type.STRING)
        .addPrimaryKey(['uid']);


      schema.createTable("global")
        .addColumn('init', lf.Type.BOOLEAN);

      schema.connect().then(function(e) { window.db = e; //console.log('schema', e);
        var global = db.getSchema().table('global');
        db.select(global.init).from(global).exec()
        .then(rows => { //console.log(rows);
          if(rows.length === 0) {
            document.body.setAttributeNode(document.createAttribute('data-nodb'));
            data = {"name": name, "version": version, "tables": tables};
            db.import(data).then(e => { //console.log(e);
              var global = db.getSchema().table('global'), row = global.createRow({'init': true});
              db.insert().into(global).values([row]).exec()
              .then(rows => { document.body.removeAttribute('data-nodb'); notify('Database succesfully imported', 2); resolve(data); });
            });
          }
          else { document.body.removeAttribute('data-nodb'); resolve(); }
        });
      });


  });

}