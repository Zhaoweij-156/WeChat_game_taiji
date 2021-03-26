
var player_info=require("game_playerInfo");
var level_message=require("game_levelMessage");

cc.Class({
    extends: cc.Component,

    properties: {
        //十位数字节点
        node_num_1: cc.Node,
        //个位数字节点
        node_num_2: cc.Node,
        //关卡目标节点
        node_level_target: cc.Node,
        //设置数组宽度大小
        width: 7,
        //定义方块节点数组
        mylist: {
            default: [],
            type: [cc.Node],
        },
        //成功界面节点
        node_success_ALL: cc.Node,
        //关卡详细
        level_detail: null,
        //记录方块颜色的数组

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function () {
        //为方块添加响应事件
        // for(var i=0;i<this.width*this.width;i++) 
        //     if(this.mylist[i]!=null){
        //         //console.log(this.mylist[i].name);
        //         this.mylist[i].node.on(cc.Node.EventType.TOUCH_END, function(event){

        //         }, this);
        //     }

        //初始化关卡信息
        var level_num=player_info.nextLevel;
        var num_1=0;
        var num_2=1;
        switch(level_num) {
            case 1:
                this.level_detail=level_message.level_01;
                break;
            case 2:
                this.level_detail=level_message.level_02;
                break;
            case 3:
                this.level_detail=level_message.level_03;
                break;
            case 4:
                this.level_detail=level_message.level_04;
                break;
            case 5:
                this.level_detail=level_message.level_05;
                break;
            case 6:
                this.level_detail=level_message.level_06;
                break;
            case 7:
                this.level_detail=level_message.level_07;
                break;
            case 8:
                this.level_detail=level_message.level_08;
                break;
            case 9:
                this.level_detail=level_message.level_09;
                break;
            case 10:
                this.level_detail=level_message.level_10;
                break;
            case 11:
                this.level_detail=level_message.level_11;
                break;
            case 12:
                this.level_detail=level_message.level_12;
                break;
            case 13:
                this.level_detail=level_message.level_13;
                break;
            case 14:
                this.level_detail=level_message.level_14;
                break;
            case 15:
                this.level_detail=level_message.level_15;
                break;
            case 16:
                this.level_detail=level_message.level_16;
                break;
            case 17:
                this.level_detail=level_message.level_17;
                break;
            case 18:
                this.level_detail=level_message.level_18;
                break;
            case 19:
                this.level_detail=level_message.level_19;
                break;
            case 20:
                this.level_detail=level_message.level_20;
                break; 
            default:
                this.level_detail=level_message.level_01;
                num_1=0;
                num_2=1;
                break;
        };
        
        //动态加载资源
        var self=this;

        //加载关卡数字
        if(!!level_num) {
            if(level_num>0 && level_num<10) {
                num_1=0;
                num_2=level_num;
            } else {
                num_1=(parseInt(level_num/10))%10;
                num_2=level_num%10;
            }
        }
        //console.log("num_1: "+num_1+" num_2: "+num_2);
        var num_1_name="taiji_"+num_1;
        var num_2_name="taiji_"+num_2;
        //两位数字显示处理
        //加载十位数字
        cc.loader.loadRes(num_1_name,cc.SpriteFrame,function(err,spriteFrame){
            self.node_num_1.getComponent(cc.Sprite).spriteFrame=spriteFrame;
        });
        this.node_num_1.setContentSize(level_message.num_img_w[num_1],level_message.num_img_h[num_1]);
        //加载个位数字
        cc.loader.loadRes(num_2_name,cc.SpriteFrame,function(err,spriteFrame){
            self.node_num_2.getComponent(cc.Sprite).spriteFrame=spriteFrame;
        });
        this.node_num_2.setContentSize(level_message.num_img_w[num_2],level_message.num_img_h[num_2]);
        //一位数字显示处理
        if(num_1==0) {
            this.node_num_1.active=false;
            this.node_num_2.x=0;
        }

        //加载关卡目标和通关成功内容
        var target_name=this.level_detail.level_name+"_target";
        cc.loader.loadRes(target_name,cc.SpriteFrame,function(err,spriteFrame){
            self.node_level_target.getComponent(cc.Sprite).spriteFrame=spriteFrame;
            self.node_success_ALL.getChildByName("success_content").getComponent(cc.Sprite).spriteFrame=spriteFrame;
        });

        //加载方块
        var square_white_name="square_white";
        var square_black_name="square_black";
        var white_arr_start=this.level_detail.white_arr_start;
        var black_arr_start=this.level_detail.black_arr_start;
        //加载白色方块
        cc.loader.loadRes(square_white_name,cc.SpriteFrame,function(err,spriteFrame){
            for(var i=0;i<white_arr_start.length;i++) {
                //console.log(self.mylist[white_arr_start[i]].name);
                self.mylist[white_arr_start[i]].getChildByName("Background").getComponent(cc.Sprite).spriteFrame=spriteFrame;
            }
        });
        //加载黑色方块
        cc.loader.loadRes(square_black_name,cc.SpriteFrame,function(err,spriteFrame){
            for(var i=0;i<black_arr_start.length;i++) {
                //console.log(self.mylist[black_arr_start[i]].name);
                self.mylist[black_arr_start[i]].getChildByName("Background").getComponent(cc.Sprite).spriteFrame=spriteFrame;
            }
        });
        //去掉多余的方块
        var u1=0;//white_arr_start数组下标
        var u2=0;//black_arr_start数组下标
        for(var i=0;i<this.width*this.width;i++) {
            if(this.mylist[i]!=null) {
                if(i==white_arr_start[u1]) {
                    u1++;
                } else if(i==black_arr_start[u2]) {
                    u2++;
                } else {
                    this.mylist[i]=null;
                }
            }
        }
    },
    
    //方块点击触发的回调函数
    callback: function (event,CustomEventData) {
        //找出被点击的方块下标
        var str=""+CustomEventData;
        var square_name_len=8;
        var square_name=str.substr(0,square_name_len);
        //console.log("square_name: "+square_name);
        var j=0;
        for(var i=0;i<this.width*this.width;i++) {
            if(this.mylist[i]!=null) {
                if(square_name.match(this.mylist[i].name)) {
                    j=i;
                }
            }
        }
        //console.log("j:"+j);
        //console.log("mylist[j]: "+this.mylist[j].name);

        //记录
        //console.log("push_J:"+j);
        player_info.j_arr.push(j);

        //执行游戏机制
        this.gameMechines(j);
        
        //根据当前关卡执行通关判断
        this.levelSuccess();

    },
    
    //撤销前一步操作的函数
    fundo: function() {
        var j=player_info.j_arr.pop();
        //console.log("pop_J:"+j);
        if(j>=0 && j<this.width*this.width) {
            this.gameMechines(j);
        } else {
            //console.log("无效操作");
        }
    },
    
    //游戏机制
    gameMechines: function(j) {
        var distance_move=200;
        var square_list=this.mylist;

        //左右互换
        var j1=j-1;//左方块
        var j2=j+1;//右方块
        //处理边缘方块的j1和j2
        if(j%this.width==0) {
            j1=null;
        } else if((j+1)%this.width==0) {
            j2=null;
        }
        //console.log("j1: "+j1+" j2: "+j2)
        if(!!this.mylist[j1] && !!this.mylist[j2]) {
            this.mylist[j1].x+=distance_move;
            //console.log("mylist["+j1+"]: "+this.mylist[j1].name+": "+this.mylist[j1].x);
            this.mylist[j2].x-=distance_move;
            //console.log("mylist["+j2+"]: "+this.mylist[j2].name+": "+this.mylist[j2].x);
            [this.mylist[j1],this.mylist[j2]]=[this.mylist[j2],this.mylist[j1]];
            //console.log("mylist["+j1+"]: "+this.mylist[j1].name+" mylist["+j2+"]: "+this.mylist[j2].name);
        }

        //上下互换
        var j3=j-this.width;//上方块
        var j4=j+this.width;//下方块
        if(!!this.mylist[j3] && !!this.mylist[j4]) {
            this.mylist[j3].y-=distance_move;
            //console.log("mylist["+j3+"]: "+this.mylist[j3].name+": "+this.mylist[j3].y);
            this.mylist[j4].y+=distance_move;
            //console.log("mylist["+j4+"]: "+this.mylist[j4].name+": "+this.mylist[j4].y);
            [this.mylist[j3],this.mylist[j4]]=[this.mylist[j4],this.mylist[j3]];
            //console.log("mylist["+j3+"]: "+this.mylist[j3].name+" mylist["+j4+"]: "+this.mylist[j4].name);
        }
    },

    //通关判断
    levelSuccess: function() {
        var u=0;//black_arr_success数组下标
        var count=0;//记录匹配正确的个数
        for(var i=0;i<this.width*this.width;i++){
            if(i==this.level_detail.black_arr_success[u]){
                var spriteFrame_name=this.mylist[i].getChildByName("Background").getComponent(cc.Sprite).spriteFrame.name;
                //console.log("spriteFrame_name "+spriteFrame_name);
                if(spriteFrame_name.match("square_black")) {
                    count++;
                }
                u++;
            }
        }
        if(count==this.level_detail.black_num){
            //console.log("恭喜通过第"+current_scene+"关！");
            this.openSuccess();
        }
    },

    //打开通关成功窗口
    openSuccess: function() {
        //计时器, 0.5秒后执行显示操作
        this.scheduleOnce(function(){
            this.node_success_ALL.active=true;
        },0.5);
    },
    //关闭通关成功窗口
    closeSuccess: function() {
        this.node_success_ALL.active=false;
        this.fundo();
    },

    squareFadeIn: function() {
        if(this.isFadeIn=true){
            return;
        }
        this.isFadeIn=true;
        for(var i=0;i<this.width*this.width;i++) 
            if(this.mylist[i]!=null){
                //var square_sprite=this.mylist[i].node.getComponent(cc.Sprite);
                var action_fadeTo=cc.fadeTo(1.0,0);
                var action_fadeOut=cc.fadeOut(1.0);
                var action_fadeIn=cc.fadeIn(2.0);
                var seq=cc.sequence([action_fadeTo,action_fadeIn]);
                this.mylist[i].node.runAction(seq);
                //console.log("fadeIn is OK");
            }
    },

    start () {
        //this.isFadeIn=false;
        //this.squareFadeIn();
    },

    // update (dt) {},
});
