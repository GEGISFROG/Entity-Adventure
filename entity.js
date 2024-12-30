var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

var entityme = {
    x : 40,
    y : 210,
    width : 40,
    height : 40,
    draw(){
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}


class Entitiythem {
    constructor(){
        this.x = 500;
        this.y = 200;
        this.width = 35;
        this.height = 50;
    }
    draw(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}



var timer = 0;
var entitythem여러개 = [];
var jumptimer = 0;
var animation


function 프레임마다실행할꺼(){
    animation = requestAnimationFrame(프레임마다실행할꺼);
    timer++;

    ctx.clearRect(0,0, canvas.width, canvas.height);

    if (timer % 150 === 0){
        var entitythem = new Entitiythem();
        entitythem여러개.push(entitythem);
    }

    entitythem여러개.forEach((a, i , o)=>{
        if(a.x < 0){
            o.splice(i, 1)
        }
        a.x -= 2;

        bumping(entityme, a)

        a.draw();
    })

    if(jumping == true){
        entityme.y -= 2;
        jumptimer++;
    }


    if(jumping == false){
        if(entityme.y < 210) {
            entityme.y += 2;
        }
    }


    if(jumptimer > 50){
        jumping = false;
        jumptimer = 0 
    }

    entityme.draw()
}
프레임마다실행할꺼();

function bumping(entityme, entitythem){
    var xdiff = entitythem.x - (entityme.x + entityme.width)
    var ydiff = entitythem.y - (entityme.y + entityme.height)
    if(xdiff < 0 && ydiff < 0){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    cancelAnimationFrame(animation);
    stopscore()
    if(timer < 460){
        alert('YOU IDIOT')
        alert('YOU CANT EVEN JUMP')
    }
    if(timer > 15310){
        alert('Adventure Master')
    }
    }
    }

var jumping = false
document.addEventListener('keydown', function(e){
    if (e.code == 'Space'){
        if(entityme.y > 209) {
        jumping = true;
        }
    }
})