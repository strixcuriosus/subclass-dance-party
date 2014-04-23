var Dancer = function (top, left, timeBetweenSteps, dancers) {
  this._$node = $('<span class="dancer"></span>');
  this._isConga = false;
  this._top = top;
  this._left = left;
  this._timeBetweenSteps =  timeBetweenSteps;
  this._dancers = dancers;
  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.findNearest = function (dancerType) {
  var MAX_RADIUS = 400;
  var NO_DISTANCE = 0;
  var nearestDancer;
  var nearestLength = MAX_RADIUS;
  var self = this;

  this._dancers.forEach(function(dancer){

    var verticalDistance = self._top - dancer._top;
    var horizontalDistance = self._left - dancer._left;

    var totalDistance = Math.sqrt(Math.pow(horizontalDistance, 2) + Math.pow(verticalDistance, 2));

    if (totalDistance < nearestLength && totalDistance > NO_DISTANCE) {
      if( dancer instanceof dancerType) {
        nearestDancer = dancer;
        nearestLength = totalDistance;
      }
    }

  });

  return nearestDancer;
};

Dancer.prototype.lineUp = function() {
  var LEFT_EDGE_OF_WINDOW = 0;

  var styleSettings = {
    left: LEFT_EDGE_OF_WINDOW
  };
  this._left = LEFT_EDGE_OF_WINDOW;
  this._$node.css(styleSettings);
};

Dancer.prototype.setPosition = function (top, left) {
  var styleSettings = {
      top: top,
      left: left
    };
  this._top = top;
  this._left = left;
  this._$node.css(styleSettings);
};

Dancer.prototype.step = function () {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var self = this;
  setTimeout(function () {
    self.step();
  }, this._timeBetweenSteps);
};


