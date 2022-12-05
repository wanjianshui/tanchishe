/*
 * @Author: 王建水-ss 11877704+wang-jianshui-ss@user.noreply.gitee.com
 * @Date: 2022-11-30 16:44:33
 * @LastEditors: 王建水-ss 11877704+wang-jianshui-ss@user.noreply.gitee.com
 * @LastEditTime: 2022-12-02 09:10:05
 * @FilePath: \JavaScript\案例\JS\food.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


// 食物的操作：坐标位置，生成食物，更新食物的位置

class Food{
    constructor(select){
        // 获取地图照片 (querySelector) 返回第一个元素样式
        this.map=document.querySelector(select)
        // 创建食物 (createElement创建div节点)
        this.food=document.createElement('div')
        // 设置食物div样式 (className动态更改样式)
        this.food.className='foot'
        // 放到地图照片中  (appendChild向节点添加最后一个子节点)
        this.map.appendChild(this.food)
        // 食物的坐标位置
        this.x=0
        this.y=0
        // 调用食物随机的坐标点函数方法
        this.foodPos()
    }
    // 封装食物随机的坐标点方法
    foodPos(){
        // 拿到地图范围 (clientWidth宽度,clientHeight高度)
        console.log(this.map.clientWidth/20)
        console.log(this.map.clientHeight/20)
        const w_nub=this.map.clientWidth/20
        const h_nub=this.map.clientHeight/20
        // 随机生成位置数字 (Math.floor()向下取整数，Math.random()随机生成数字)
        let n1 = Math.floor(Math.random()*w_nub)
        let n2 = Math.floor(Math.random()*h_nub)
        console.log(n1,n2)
        // 根据随机数进行坐标位置的计算
        // 此处坐标加一：因食物坐标与蛇头坐标相差1 无法达到一致相等满足判断条件
        this.x=n1*20+1
        this.y=n2*20+1
        // console.log(this.x,this.y)
        // 赋值 (食物的坐标样式等于定义的随机数字坐标)
        this.food.style.left=this.x  + "px"
        this.food.style.top=this.y  + "px"
    }

}


