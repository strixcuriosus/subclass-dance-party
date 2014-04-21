var NinjaDancer = function (top, left, timeBetweenSteps ) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

NinjaDancer.prototype = Object.create(Dancer.prototype);
NinjaDancer.prototype.constructor = NinjaDancer;
