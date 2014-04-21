var TwirlyDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

TwirlyDancer.prototype = Object.create(Dancer.prototype);
TwirlyDancer.prototype.constructor = TwirlyDancer;
