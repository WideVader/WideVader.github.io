let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let cArr = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize',()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

class Circle{
    constructor(){
        this.x = Math.random()*canvas.width;
        this.y = Math.random()*canvas.height;
        this.size = 100 + Math.random() * (200 - 100);
        this.color = `rgba(${100 + Math.random() * (200 - 100)},${100 + Math.random() * (200 - 100)},${100 + Math.random() * (200 - 100)},.1)`;
        this.directionX = this.size/(this.size*this.size*this.size)*90000;
        this.directionY = this.size/(this.size*this.size*this.size)*90000;
        //-5 + Math.random() * (this.size*0.001 - -5)
    }
    update(){
        this.x += this.directionX;
        this.y += this.directionY;
            if(this.x>canvas.width)
                this.directionX = this.directionX * -1;
            if(this.y>canvas.height)
                this.directionY = this.directionY * -1;
            if(this.y<0)
                this.directionY = this.directionY * -1;
            if(this.x<0)
                this.directionX = this.directionX * -1;
    }
    draw(){
        ctx.fillStyle=this.color;
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
        ctx.fill();
    }
}

function fillArray(){
    for (let i = 0; i < 10; i++) {
        let c = new Circle();
        //console.log(c.size/(c.size*c.size*c.size)*100000 + `     ${    c.size}`)
        cArr.push(c);
    }
    
}

fillArray();

function cHandle(){
    for (let i = 0; i < cArr.length; i++) {
        cArr[i].update();
        
        cArr[i].draw();
        
    }
}


function animate(){
    //ctx.fillStyle = `rgba(0,0,0,1)`
    //ctx.fillRect(0,0,canvas.width,canvas.height)
    ctx.clearRect(0,0,canvas.width,canvas.height);
    cHandle();
    requestAnimationFrame(animate);
}
animate()