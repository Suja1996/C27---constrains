class Chain{
    constructor(body1,body2) {
        var options = {
            bodyA:body1.body,
            bodyB:body2.body,
            stiffness:0.04,
            length:10
        }
        this.chain=Matter.Constraint.create(options)
   this.bodyA=body1.body;
   this.bodyB=body2.body;

        World.add(world, this.chain);
      }
      display(){
        var pos1 = this.bodyA.position;
        var pos2 = this.bodyB.position;

        push();
        strokeWeight(4)
        line(pos1.x,pos1.y,pos2.x,pos2.y)
        pop();
      }
}