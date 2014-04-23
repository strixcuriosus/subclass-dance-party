var TwirlyDancer = function (top, left, timeBetweenSteps, dancers) {
  var ROTATION_STEP_SPEED = 50;
  var MAX_COLOR = 255;
  var STARTING_DEGREES = 180;

  timeBetweenSteps = ROTATION_STEP_SPEED;
  // color needs to be set before calling Dancer constructor
  this._color = [Math.floor(Math.random() * MAX_COLOR),Math.floor(Math.random() * MAX_COLOR),
   Math.floor(Math.random() * MAX_COLOR)];
  Dancer.call(this, top, left, timeBetweenSteps, dancers);
  this._degrees = STARTING_DEGREES;
  this._$node.addClass("twirly");

};

TwirlyDancer.prototype = Object.create(Dancer.prototype);
TwirlyDancer.prototype.constructor = TwirlyDancer;

TwirlyDancer.prototype.step = function () {
  var MAX_ROTATION = 360;
  var DEGREE_INCREMENT = 1;

  Dancer.prototype.step.call(this);
  this._$node.css("color", "rgb(" + this._color.join(",") + ")" );
  this._$node.css("transform", "rotate(" + this._degrees + "deg)");

  this._degrees = (DEGREE_INCREMENT + this._degrees) % MAX_ROTATION;

};
