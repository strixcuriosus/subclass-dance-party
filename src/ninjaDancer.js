var NinjaDancer = function (top, left, timeBetweenSteps, dancers ) {
  Dancer.call(this, top, left, timeBetweenSteps, dancers);
  this._$node.addClass("ninja");
};

NinjaDancer.prototype = Object.create(Dancer.prototype);
NinjaDancer.prototype.constructor = NinjaDancer;
NinjaDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
    var self = this;
    var expand = {height: "20px", width: "20px", "border-radius": "20px"};
    var shrink = {height: "0px", width: "0px", "border-radius": "10px"};

    this._$node.animate(expand, 200).addClass("ninjaPic").animate(shrink, 200).fadeOut("fast", function () {
      if (!self._isConga) {
        self._top  = (self._top + 200) % $("body").height();
        self._left = (self._left +155) % $("body").width();
        // self._$node.;
        self.setPosition(
          self._top,
          self._left);

      }
      var nearDancer = self.findNearest(TwirlyDancer);
      nearDancer = nearDancer || self;
      self._$node.css("border-color", nearDancer._$node.css("color") );
      self._$node.fadeIn("slow");
    });

};
