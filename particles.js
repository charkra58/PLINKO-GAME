class Particles{
    constructor(){
        var options ={
            
        }
        this.body =Bodies.circle(x,y,this.r,options);
        this.color =this.color(random(0,255), random(0,255),random(0,255))
        World.add(world, this.body)
    }
}