class Chain {
    constructor(b1,b2){

        var chain_options = {

        bodyA : b1,
        bodyB : b2,
        stiffness : 0.04,
        length : 10

        }
this.chain = Constraint.create(chain_options);
World.add(world,this.chain)

    }

    display()
    {
var pointA = this.chain.bodyA.position;
var pointB = this.chain.bodyB.position;
strokeWeight(4)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
    
}