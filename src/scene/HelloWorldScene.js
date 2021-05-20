/**
 * Created by thaohdm on 20/5/2015.
 */

var HelloWorldScene = cc.Layer.extend({
    ctor: function() {
        this._super();
        let winSize = cc.director.getVisibleSize();

        cc.log(JSON.stringify(winSize))
        let helloWorldLabel = new cc.Sprite(res.img_hello_world);
        helloWorldLabel.setPosition(winSize.width / 2, winSize.height / 2);
        this.addChild(helloWorldLabel);
    },

    onEnter: function(){
        this._super();
    },
});
