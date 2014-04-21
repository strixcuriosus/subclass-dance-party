var Dancer = function (top, left, timeBetweenSteps) {
  this._$node = $('<span class="dancer"></span>');
  this._timeBetweenSteps =  timeBetweenSteps;
  this.step();
  this.setPosition(this, top, left);
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
