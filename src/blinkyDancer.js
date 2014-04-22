var BlinkyDancer = function (top, left, timeBetweenSteps, dancers) {
  Dancer.call(this, top, left, timeBetweenSteps, dancers);
  this._$node.addClass("blinky1");
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
BlinkyDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
   //this._$node.toggle();

   // this.setPosition(this._top, this._left);

  var near = this.findNearest(TwirlyDancer);

  if(near !== undefined && !this._isConga){
    var deltaY = this._top - near._top;
    var deltaX = this._left - near._left;

    var radius = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));

    var angle  = Math.atan(deltaY/deltaX);
    angle += Math.PI/16;
    if (radius < 10000 && !this._isConga){
      this._top = Math.abs(near._top - radius*Math.cos(angle));
      this._left = Math.abs(near._left - radius*Math.sin(angle));
      this._$node.animate({top:this._top + "px",
        left:this._left + "px"});
    }
  }
};


