//=============================================================================
// main.js
//=============================================================================

PluginManager.setup($plugins);

window.onload = function() {
    Graphics._requestFullScreen()
	SceneManager.run(Scene_Boot);
    Graphics._stretchEnabled = true;
    Graphics._updateAllElements()
};