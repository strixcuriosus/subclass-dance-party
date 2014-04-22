var BlinkyDancer = function (top, left, timeBetweenSteps, dancers) {
  Dancer.call(this, top, left, timeBetweenSteps, dancers);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
BlinkyDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
   this._$node.toggle();
   debugger;
   this.setPosition(this._top, this._left);

   debugger;
   var near = this.findNearest("TwirlyDancer");

  // var deltaY = this._top - near._top;
  // var deltaX = this._left - near._left;

  // var radius = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));

  // var angle  = Math.atan(deltaY/deltaX);
  // angle += Math.PI/32 ;

  // this._top = radius*Math.cos(angle);
  // this._left = radius*Math.sin(angle);


};



