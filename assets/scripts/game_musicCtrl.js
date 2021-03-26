
var player_info=require("game_playerInfo");

cc.Class({
    extends: cc.Component,

    properties: {
        node_button_musicCtrl: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        
    },

    //音频播放回调函数
    fsound: function(){
        //获取全局播放器
        this.AudioPlayer = cc.find("Audio").getComponent('game_AudioManager');
        if(player_info.music_isOff) {
            this.AudioPlayer.playMusic();//播放音乐
            this.openMusic();//切换打开音乐图片
            player_info.music_isOff=false;
            //console.log("music_isOff: "+player_info.music_isOff);
        } else {
            this.AudioPlayer.stopMusic();//暂停音乐
            this.closeMusic();//切换关闭音乐图片
            player_info.music_isOff=true;
            //console.log("music_isOff: "+player_info.music_isOff);
        }
    },
    
    //切换音乐开关图片函数
    openMusic: function(){
        var address_on="taiji_musicCtrl_on";
        var self=this;
        cc.loader.loadRes(address_on,cc.SpriteFrame,function(err,spriteFrame){
            //console.log("播放音乐");
            self.node_button_musicCtrl.getChildByName("Background").getComponent(cc.Sprite).spriteFrame=spriteFrame;
            //self.sound.resume();
        });
    },

    //切换音乐开关图片函数
    closeMusic: function(){
        var address_off="taiji_musicCtrl_off";
        var self=this;
        cc.loader.loadRes(address_off,cc.SpriteFrame,function(err,spriteFrame){
            //console.log("暂停音乐");
            self.node_button_musicCtrl.getChildByName("Background").getComponent(cc.Sprite).spriteFrame=spriteFrame;
            //self.sound.pause();
        });
    },
    
    start () {
        //根据玩家信息更改按钮图片
        if(player_info.music_isOff){
            this.closeMusic();   
        }
    },

    // update (dt) {},
});
