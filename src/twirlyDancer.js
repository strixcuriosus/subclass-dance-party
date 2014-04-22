var TwirlyDancer = function (top, left, timeBetweenSteps, dancers) {
  timeBetweenSteps = 50;
  this._color = [Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),
   Math.floor(Math.random() * 255)];
  this._degrees = 180;
  Dancer.call(this, top, left, timeBetweenSteps, dancers);
  this._$node.addClass("twirly");

};

TwirlyDancer.prototype = Object.create(Dancer.prototype);
TwirlyDancer.prototype.constructor = TwirlyDancer;
TwirlyDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
  this._$node.css("color", "rgb(" + this._color.join(",") + ")" );
  this._$node.css("transform", "rotate(" + this._degrees + "deg)");
  this._degrees = (1 + this._degrees) % 360;
  // this._$node.rotate(5);
};
