class Drop {
    constructor(x,y){
var option ={
    isStatic:false,           
    restitution:0.1,
    friction:0.1
}
        this.drop = Bodies.circle(x,y,5,option);

        World.add(world, this.drop);
    }
    display(){
        var pos = this.drop.position

        fill("blue");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,5,5);
    }
    update(){
        if(this.drop.position.y > height){
            Matter.Body.setPosition(this.drop,{x:random(0,400),y:random(0,400)});
        }
    }
}