var NinjaDancer = function (top, left, timeBetweenSteps, dancers ) {
  Dancer.call(this, top, left, timeBetweenSteps, dancers);

  this._$node.addClass("ninja");
};

NinjaDancer.prototype = Object.create(Dancer.prototype);
NinjaDancer.prototype.constructor = NinjaDancer;

NinjaDancer.prototype.step = function () {
  var ANIMATE_SPEED   = 400;
  var NINJA_JUMP_TOP  = 200;
  var NINJA_JUMP_LEFT = 155;

  var nearDancer;
  Dancer.prototype.step.call(this);
  var self = this;
  var expand = {height: "20px", width: "20px", "border-radius": "20px"};
  var shrink = {height: "0px", width: "0px", "border-radius": "10px"};

  // expand -> show cool ninja face -> shrink -> fade out
  this._$node.animate(expand, ANIMATE_SPEED).addClass("ninjaPic").animate(shrink, ANIMATE_SPEED).fadeOut("slow", function () {

    if (!self._isConga) {
      self._top  = (self._top  + NINJA_JUMP_TOP)  % $("body").height();
      self._left = (self._left + NINJA_JUMP_LEFT) % $("body").width();

      self.setPosition(
        self._top,
        self._left
        );
    }

    nearDancer = self.findNearest(TwirlyDancer);
    nearDancer = nearDancer || self;
    //Change color
    self._$node.css("border-color", nearDancer._$node.css("color") );
    // Fade in
    self._$node.fadeIn("slow");
  });
};
