class Block extends BoxBaseClass{
  constructor(x, y, width, height, angle) {
          super(x,y,width,height);
          this.visibility=255;
    }
    display(){
      fill(135, 206, 234);
      if(this.body.speed<3){
        super.display();
      }
      else{
        World.remove(world,this.body)

      this.visibility=this.visibility-1
      push()
      tint(255,this.visibility)
      rect(this.image,this.body.position.x,this.body.position.y)
      pop()
 }
}
}