class Chain {
    constructor (bodyA, bodyB, offsetX, offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options={
            bodyA:bodyA, 
            bodyB:bodyB,
            stiffness : 0.01,
            length:20
        }
        this.sling=Constraint.create(options)
        World.add(world,this.sling)
    }

    fly(){
        this.sling.bodyA=null;
    }

    display(){
    if (this.sling.bodyA){

    var pointA= this.sling.bodyA.position;
    var pointB=this.sling.bodyB.position;
    strokeWeight(4);
    stroke("white");
    var px=pointB.x+this.offsetX;
    var py=pointB.y+this.offsetY;

    line(pointA.x, pointA.y, px, py);
    }
}
}
