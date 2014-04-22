var Dancer = function (top, left, timeBetweenSteps, dancers) {
  this._dancers = dancers;
  this._$node = $('<span class="dancer"></span>');
  this._timeBetweenSteps =  timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
  this._top = top;
  this._left = left;
};

Dancer.prototype.step = step = function () {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    var self = this;
    setTimeout(function () {
      self.step();
    }, this._timeBetweenSteps);
  };

Dancer.prototype.setPosition = function (top, left) {
  var styleSettings = {
      top: top,
      left: left
    };
    this._$node.css(styleSettings);
};

Dancer.prototype.lineUp = function() {
  var styleSettings = {
    left: 0
  };

  this._$node.css(styleSettings);
};

Dancer.prototype.findNearest = function (type) {
  var nearest;
  var nearestLength = 99999;
  var self = this;
  this._dancers.forEach(function(dancer){
    var deltaX = self._top - dancer._top;
    var deltaY = self._left - dancer._left;

    var distance = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));

    if (distance < nearestLength && distance > 0) {
      if( typeof dancer !== type) {
        nearest = dancer;
        nearestLength = distance;
      }
    }

  });

  return nearest;
};
