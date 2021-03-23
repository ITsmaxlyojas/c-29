class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.image1=loadImage("sprites/sling1.png");
        this.image2=loadImage("sprites/sling2.png");
        this.image3=loadImage("sprites/sling3.png");

        World.add(world, this.sling);

    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.image1,200,20)
        image(this.image2,173,20)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
           // fill(rgb(48,22,8));
            //line(pointA.x, pointA.y, pointB.x, pointB.y);
            line (pointA.x-20,pointA.y,pointB.x-20,pointB.y);
         
         
            line (pointA.x-20,pointA.y,pointB.x+30,pointB.y);
        image(this.image3,pointA.x-20,pointA.y,10,20);
        }
    }
    
}