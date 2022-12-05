/*
 * @Author: 王建水-ss 11877704+wang-jianshui-ss@user.noreply.gitee.com
 * @Date: 2022-12-01 16:05:13
 * @LastEditors: 王建水-ss 11877704+wang-jianshui-ss@user.noreply.gitee.com
 * @LastEditTime: 2022-12-02 09:10:27
 * @FilePath: \JavaScript\案例\JS\snake.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// 创建蛇头和蛇身体

//  蛇的对象
class Snake{
    // 构造函数
    constructor(seleck){
        // 获取地图
        this.map=document.querySelector(seleck)
        // 蛇的运动方向
        this.direction = 'right'
        // 蛇的数组(把蛇的头和身体都会存储到数组当中，头从数组的第0位开始)
        this.snakeList = []
        // 调用创建蛇的方法
        this.createSnke()
        this.move()
    }
    // 创建蛇头的函数
    createHead(){
        // 获取数组当中的第0位 找到蛇头
        const head = this.snakeList[0]
        // console.log(head)
        // 定义坐标
        const pos = {x:0,y:0}

        if(head){
            // 如果有蛇头那么创建新的蛇头放到原先蛇头的后面坐标位置上
            // 新蛇头坐标一定发生改变
            switch(this.direction){
              case "left":
               pos.x = head.offsetLeft-20
               pos.y = head.offsetTop
               break;
              case "right":
               pos.x = head.offsetLeft+20
               pos.y = head.offsetTop
               break;
              case "top":
               pos.x = head.offsetLeft
               pos.y = head.offsetTop-20
               break;
              case "bottom":
               pos.x = head.offsetLeft
               pos.y = head.offsetTop+20
               break;
              default:
               break;
            }
            // 需要把原先的蛇头变成身体
            head.className = "body"
        }
        

        // 创建蛇头
        const div = document.createElement('div')
        // 定义div样式
        div.className = 'head'
        // 把蛇头存入数组(往前存)
        this.snakeList.unshift(div)
        // 给蛇头定义坐标
        div.style.left = pos.x+'px'
        div.style.top = pos.y+'px'
        // 放到地图当中
        this.map.appendChild(div)
    }
    // 创建一条蛇
    createSnke(){
        for(let i=0; i<4; i++){
             this.createHead()
            }
        }
    // 蛇移动的方法
    move(){
        // 思路：把原先头部坐标后面增加一个蛇头，原本蛇头变成身体，身体末尾的位置删除一个
        //  拿到身体最后一个球
        const body = this.snakeList.pop()
        // console.log(body)
        // 从数组中删除(页面中删除掉)
        body.remove()
        // 从身体前面新加一个球 蛇头
        this.createHead()
    }
    // 判断蛇有没有吃到食物
    isEat(foodX,foodY){
        // console.log(foodX,foodY)
    //   判断头跟坐标是否一致
    const head = this.snakeList[0]
    const headX = head.offsetLeft
    const headY = head.offsetTop
    // console.log(headX,headY)
    if(foodX===headX && foodY===headY){
    
       return true
    }
       return false
    }
//    判断蛇死没死 是否撞墙
   isDie(){
    // 判断蛇头有没有到边界
    const head = this.snakeList[0]
    const headX = head.offsetLeft
    const headY = head.offsetTop
    if(headX<0 || headY<0 || headX>=this.map.clientWidth || headY>=this.map.clientHeight){
        return true
    }
    return false
   }
}


