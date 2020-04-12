window.browser = [];
window.pages = {
    "/": ["/"],
    "find": ["/find/"],
    "make": ["/make/"],
    "me": ["/"],
    "play": ["/play/", "/play/#/", "/play/#/game/"],
    "scores": ["/"]
};
window.routes = {
    "north": {
        "me": {  
            "/me/": {
                "pages": "me",
                "isprotected": { "template": "/cdn/html/template-profile.html"},
                "unprotected": { "template": "/cdn/html/template-guest.html"}
            },
        }
    },
    "east": {
        "find": {
            "/find/": {
                "pages": "find",
                "unprotected": { "template": "/cdn/html/template-search.html"}
            }
        }
    },
    "center": {
        "play": { 
            "/play/": {
                "pages": "/",
                "unprotected": { "template": "/cdn/html/template-play.html" }
            }
        },
    },
    "popup": {
        "/": { 
            "/": {
                "pages": "/",
                "unprotected": { "template": "/cdn/html/template-index.html" }
            }
        },
        "make": {
            "/make/": {
                "pages": "make",
                "unprotected": { "template": "/cdn/html/template-make.html" }
            }
        },
        "play": {
            "/play/#/": {
                "pages": "play",
                "unprotected": { "template": "/cdn/html/template-peek.html" }
            },
            "/play/#/game/": {
                "pages": "game",
                "unprotected": { "template": "/cdn/html/template-game.html" }
            }
        }
    },
    "south": {
        "scores": {            
            "/scores/": {
                "pages": "scores",
                "unprotected": { "template": "/cdn/html/template-scores.html"}
            }
        }
    },
    "west": {
        "me": {
            "/me/": {
                "pages": "me",
                "unprotected": {"template": "/cdn/html/template-me.html"}
            }
        }
    }
};
window.songs = [
    {
        "author": "banonBEATS",
        "name": "Run Or Die",
        "stepfile": "chree_banon",
        "length": "1:40",
        "style": "Drum & Bass",
        "uid": 0
    },
    {
        "author": "jindev",
        "name": "Candy X2 Bass",
        "stepfile": "chree_banon",
        "length": "1:40",
        "style": "Concierto",
        "uid": 1
    },
    {
        "author": "John Stafford Smith",
        "name": "American Anthem",
        "stepfile": "chree_banon",
        "length": "1:40",
        "style": "Concierto",
        "uid": 1
    },
    {
        "author": "Hades, Ruler of Hell",
        "name": "Death",
        "stepfile": "chree_banon",
        "length": "2:23",
        "style": "Techno",
        "uid": 2
    },
    {
        "author": "Elon Musk's Producer AKA Unknown",
        "name": "Open Space",
        "stepfile": "chree_banon",
        "length": "1:47",
        "style": "Chillhop",
        "uid": 3
    },
    {
        "author": "Frédéric Chopin",
        "name": "Frédéric Chopin's Nocturne #9",
        "stepfile": "chree_banon",
        "length": "4:30",
        "style": "Classical",
        "uid": 4
    },
    {
        "author": "Chree Banon",
        "name": "Falling Sheep",
        "stepfile": "chree_banon",
        "length": "2:42",
        "style": "Trap",
        "uid": 5
    },
]
