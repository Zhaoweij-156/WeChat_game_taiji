
var player_info=require("game_playerInfo");

cc.Class({
    extends: cc.Component,

    properties: {
        //背景音乐组件
        bgMusic:{
            default: null,
            type:cc.AudioClip,
        },
        audioID:null,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.game.addPersistRootNode(this.node);
        this.audioID=cc.audioEngine.play(this.bgMusic,true,0.5);
    },
    
    //播放背景音乐
    playMusic: function(){
        var state = cc.audioEngine.getState(this.audioID); //-1error,0initalzing,1playing,2paused
        if(state==2){
            cc.audioEngine.resume(this.audioID);
            //console.log("playMusic_OK");
        }
            
    },

    //停止播放背景音乐
    stopMusic: function(){
        var state = cc.audioEngine.getState(this.audioID); //-1error,0initalzing,1playing,2paused
        if(state==1){
            cc.audioEngine.pause(this.audioID);
            //console.log("stopMusic_OK");      
        }
        
    },
    
    start () {
        
    },

    // update (dt) {},
});
