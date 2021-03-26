
var player_info=require("game_playerInfo");

cc.Class({
    extends: cc.Component,

    properties: {
        node_level_ALL: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //监听按钮事件
        this.node.on('level',function(event){
            //console.log("第"+event+"关");
            var level_num=parseInt(event);
            //console.log("第"+level_num+"关");
            player_info.nextLevel=level_num;
            cc.director.loadScene("game_level");
        },this);
    },
    //打开选择关卡窗口
    openLevel: function(){
        this.node_level_ALL.active=true;
    },
    //关闭选择关卡窗口
    closeLevel: function(){
        this.node_level_ALL.active=false;
    },

    chooseLevel: function(event,CustomEventData){
        //标明事件类型 'level'
        this.node.emit('level',CustomEventData);
    },

    start () {
        
    },
    // update (dt) {},
});
