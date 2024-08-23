// 记录按下鼠标状态
let painting = false
 
//存储老位置
let startPoint = {x:undefined,y:undefined}

//获取canvas的上下文
const canvas =document.querySelector("canvas")
const ctx=canvas.getContext("2d")

//鼠标监听操作
canvas.onmousedown = (e) =>{
   let x=e.offsetX
   let y=e.offsetY
   startPoint={x:x,y:y} 
  //鼠标点击后触发画画状态 
   painting=true
}

// 获取新点的位置
canvas.onmousemove = (e) =>{
  let x=e.offsetX
  let y=e.offsetY
  newPoint={x:x,y:y} 
 //鼠标点击后触发画画状态 
  if(painting){
    drawLine(startPoint.x,startPoint.y,newPoint.x,newPoint.y)
    startPoint=newPoint
  }
}
//表示鼠标离开后这一段画画状态结束
canvas.onmouseup = () =>{
  painting=false
}

// 核心方法
function drawLine(xstart,ystart,xend,yend){
    //  绘画开始标志
     ctx.beginPath()
    //  设置线宽
     ctx.lineWidth=3
    //初始点
     ctx.moveTo(xstart,ystart)
    //结束点
     ctx.lineTo(xend,yend)
     //描边
     ctx.stroke()
     //绘画结束标志
     ctx.closePath()
}

//重置功能
clear.onclick = ()=>{
  //颜色填充
  ctx.fillStyle='#ffffff'
  ctx.clearRect(0,0,canvas.width,canvas.height)
}

