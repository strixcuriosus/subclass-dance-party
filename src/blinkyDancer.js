var BlinkyDancer = function (top, left, timeBetweenSteps, dancers) {
  Dancer.call(this, top, left, timeBetweenSteps, dancers);

  this._$node.addClass("spaceship");
};
// Setting up delegation to Dancer
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

// Shadow methods
BlinkyDancer.prototype.step = function () {
  var NON_EXISTANT = undefined;
  var MAX_RADIUS = 500;
  var PX = "px";

  Dancer.prototype.step.call(this);


  var nearestTwirlyDancer = this.findNearest(TwirlyDancer);

  if(nearestTwirlyDancer !== NON_EXISTANT && !this._isConga){
    var verticalDistance = this._top - nearestTwirlyDancer._top;
    var horizontalDistance = this._left - nearestTwirlyDancer._left;

    var radius = Math.sqrt(Math.pow(horizontalDistance, 2) + Math.pow(verticalDistance, 2));

    var angle  = Math.atan(verticalDistance/horizontalDistance);
    // increment angle
    angle += Math.PI/16;

    if (radius < MAX_RADIUS && !this._isConga){
      this._top = Math.abs(nearestTwirlyDancer._top - radius * Math.cos(angle));
      this._left = Math.abs(nearestTwirlyDancer._left - radius * Math.sin(angle));
      this._$node.animate({
        top:this._top + PX,
        left:this._left + PX
      });
    }
  }
};



