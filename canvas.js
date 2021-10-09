var canvas=document.querySelector('canvas')
canvas.width=innerWidth
canvas.height=innerHeight
var c=canvas.getContext("2d");

let mouse={
    xx:undefined,
    yy:undefined
}

window.addEventListener('mousemove', function(event){
    mouse.xx=event.x
    mouse.yy=event.y
    
})
window.addEventListener("resize",function(){
    canvas.width=innerWidth
    canvas.height=innerHeight
    init()
})

maxSize=50;
colorArray=[
    "#C5C3E6",
    "#67F0E7",
    "#8BD968",
    "#F0D167",
    "#E68263"
]
function circle(x,y,dx,dy,size){
        this.x=x;
        this.y=y;
        this.dx=dx
        this.dy=dy
        this.size=size
        this.minSize=size
        this.color=colorArray[Math.floor(Math.random()*colorArray.length)]
        this.draw=function(){
            c.beginPath()
            c.arc(this.x, this.y, this.size, 0 ,Math.PI*2,false);
            c.fillStyle=this.color
            c.fill();
        }
        this.update=function(){
        if(this.x+this.size>innerWidth || this.x-this.size<0){
            this.dx=-this.dx
        }
        if(this.y+this.size>innerHeight || this.y-this.size<0+125){
            this.dy=-this.dy
        }
        this.x+=this.dx;
        this.y+=this.dy;
        //interactivity
        if(mouse.xx-this.x<50 && mouse.xx-this.x>-50 && mouse.yy-this.y<50 && mouse.yy-this.y>-50){
            if(this.size<maxSize){
              this.size+=1;
            }
        }else if(this.size>this.minSize){
            this.size-=1;
        }
        this.draw()

        }
    }
    let circleArray=[];
    
    function init(){
        circleArray=[]
        for(let i=0;i<1000;i++){
            var x=Math.random()*(innerWidth-size*2)+size;
            var dx=Math.random()-0.5  ;
            var y=Math.random()*(innerHeight-size*2)+size+125;
            var dy=Math.random() -0.5
            var size=Math.random()*3+1
            circleArray.push(new circle(x,y,dx,dy,size))
        
        }
    }
    function animate(){
        requestAnimationFrame(animate);
        c.clearRect(0,0 ,innerWidth,innerHeight)
       
        for(let i=0;i<circleArray.length;i++){
            circleArray[i].update()
        }
    }
    animate()
    init()