
var gv = gv || {};

var DESIGN_RESOLUTION_WIDTH = 1136;
var DESIGN_RESOLUTION_HEIGHT = 640;

cc.game.onStart = function () {
    if (!cc.sys.isNative && document.getElementById("cocosLoading")) //If referenced loading.js, please remove it
        document.body.removeChild(document.getElementById("cocosLoading"));
    // Pass true to enable retina display, disabled by default to improve performance
    cc.view.enableRetina(true);
    // Adjust viewport meta
    cc.view.adjustViewPort(true);
    if (cc.sys.isNative) {
      jsb.fileUtils.addSearchPath(fr.NativeService.getFolderUpdateAssets(), true);
      jsb.fileUtils.addSearchPath(fr.NativeService.getFolderUpdateAssets() + "/res", true);
      cc.loader.resPath = "res";
    }
    cc.LoaderScene.preload(g_resources, function () {
        //hide fps
        cc.director.setDisplayStats(true);
        // Setup the resolution policy and design resolution size
        cc.view.setDesignResolutionSize(DESIGN_RESOLUTION_WIDTH, DESIGN_RESOLUTION_HEIGHT, cc.ResolutionPolicy.SHOW_ALL);

        // The game will be resized when browser size change
        cc.view.resizeWithBrowserSize(true);

        fr.view(HelloWorldScene);
    }, this);
};

cc.game.run();
