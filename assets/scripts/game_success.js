
var player_info=require("game_playerInfo");
var level_message=require("game_levelMessage");

cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    toNextLevel: function(){
        //清空数组j_arr
        while(true) {
            if(player_info.j_arr.pop()==null) {
                break;
            }
        }

        //更改玩家的信息
        this.updatePlayerInfo(player_info.nextLevel);
        //console.log("下一关");
        cc.director.loadScene("game_level");
    },

    //更改玩家的信息函数
    updatePlayerInfo: function(current_level) {
        //console.log("current_level: "+current_level);

        //修改闯关成功信息和次数
        if(player_info.level_isSuccess[current_level-1]==false){
            player_info.level_maxSuccess+=1;
            //console.log("level_maxSuccess: "+player_info.level_maxSuccess);
            player_info.level_isSuccess[current_level-1]=true;
            //console.log("level_isSuccess["+(current_level-1)+"]: "+player_info.level_isSuccess[current_level-1]);
        }

        //修改下一关卡
        player_info.nextLevel=player_info.nextLevel==19 ? 20 : ((player_info.nextLevel+1)%level_message.level_total);
        //console.log("nextLevel: "+player_info.nextLevel);
    },

    start () {

    },

    // update (dt) {},
});
