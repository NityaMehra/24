class Paper{
    constructor(x, y,radius) {
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body= Bodies.circle(x,y,radius,options);
        this.r = radius;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position
        var angle = this.body.angle;
        push()
        translate(pos.x,pos.y)
        rotate(angle)
       // strokeWeight(4);
       // stroke("white");
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop()
    }

}
