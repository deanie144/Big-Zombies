class Stone {
    constructor(x, y, w, h) {
        var options = {
            restitution: 0.5
        }
     
        this.w = w;
        this.h = h;

        World.add(world, this.body)
    }

    show(){
      var pos = this.body.position;
      push() 
      translate(pos.x, pos.y); 
      ellipse(0, 0, this.w, this.h)
      ellipseMode(CENTER);
      pop()
    }
    }