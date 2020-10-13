class bob {
    constructor(x,y,radious) {
      var options ={
        isStatic:true,
        'density':1.5,
        'resitution':1.0,
       'friction':0.5
      }
      this.body = Bodies.circle(x,y,radious,options);
      World.add(world, this.body);
     this.x=x
     this.y=y
     this.radious=radious
    }
    display(){
      push()
      translate(this.body.position.x,this.body.position.y)
     ellipse(this.x,this.y,this.radious,this.radious);
      pop();
    }
  
  }
