/*
 * @Author: 王建水-ss 11877704+wang-jianshui-ss@user.noreply.gitee.com
 * @Date: 2022-12-01 17:44:27
 * @LastEditors: 王建水-ss 11877704+wang-jianshui-ss@user.noreply.gitee.com
 * @LastEditTime: 2022-12-02 09:12:50
 * @FilePath: \JavaScript\案例\JS\game.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// 设计游戏类
class Game{
    constructor(select){
        // 地图
        this.map=document.querySelector(select)
        // 食物
        this.food=new Food(select)
        // 蛇
        this.snake=new Snake(select)
        // 定义计时器
        this.timer=0
        // 调用定时器
        this.start()
    }
    // 定义游戏开始的方法
    start(){
        this.timer = setInterval(()=>{
            // 让蛇移动
          this.snake.move()
        //   判断是否吃到食物
        if(this.snake.isEat(this.food.x,this.food.y)){
            // 吃到食物变长,调用增加蛇头的方法
            this.snake.createHead()
            // 食物的位置更新
            this.food.foodPos()
        }
        // 判断蛇是否死亡
        if(this.snake.isDie()){
            // alert('撞墙啦')
            clearInterval(this.timer)
        }
        },100)
        
    }
    // 暂停方法
    pause(){
        clearInterval(this.timer)
    }
    // 重新开始
    restart(){
        window.location.reload()
    }
    // 改变方向的方法
    change(type){
        this.snake.direction=type
    }
}





