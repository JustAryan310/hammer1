class Rubber{
    constructor(x,y,r){
        var option={
            density:1,
            friction:5,
            restitution:0.3
        }
        this.x=x
        this.y=y
        this.r=r
        this.body=Bodies.circle(this.x,this.y,(this.r-20)/2,option)
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        push ()
        translate(pos.x,pos.y)
        ellipseMode(CENTER)
        strokeWeight (3)
        stroke("black")
        fill("green")
        ellipse(0,0,this.r,this.r)
        pop()

    }
}