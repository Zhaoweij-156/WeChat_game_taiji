
cc.Class({
    extends: cc.Component,

    properties: {
        touchStart:{
            default:null,
            type:cc.Button,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.touchStart.node.on(cc.Node.EventType.TOUCH_START, this.playGame, this);
    },

    start () {

    },
    playGame: function(){
        //console.log("开始游戏");
        cc.director.loadScene("game_level");
    },
    // update (dt) {},
});
