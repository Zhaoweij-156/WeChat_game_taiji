
var player_info=require("game_playerInfo");

cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    resetCurrentLevel: function(){
        //清空数组j_arr
        while(true) {
            if(player_info.j_arr.pop()==null) {
                break;
            }
        }
        //console.log("重置当前关卡");
        cc.director.loadScene("game_level");
    },

    start () {

    },

    // update (dt) {},
});
