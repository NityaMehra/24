class Ground{
    constructor(){
        var options ={
            isStatic:true
        }
        this.body =  Bodies.rectangle(500,490,1000,20,options);
        this.width = 1000;
        this.height = 20;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position
        push()
        
        fill("white");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        pop()
    }
}