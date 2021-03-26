
var player_info=cc.Enum({
    //玩家名称
    player_name: null,
    //闯关成功的次数
    level_maxSuccess: 0,
    //每个关卡是否闯关成功的信息
    level_isSuccess: [false,false,false,false,false,false,false,false,false],
    //下一关卡
    nextLevel: 1,
    //是否关闭音乐
    music_isOff: false,
    //被点击的方块(或太极)在数组中的下标位置的储存数组
    j_arr: [],
});

module.exports=player_info;
