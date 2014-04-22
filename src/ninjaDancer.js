var NinjaDancer = function (top, left, timeBetweenSteps ) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this._$node.addClass("ninja");
  this._top = top;
  this._left = left;

};

NinjaDancer.prototype = Object.create(Dancer.prototype);
NinjaDancer.prototype.constructor = NinjaDancer;
NinjaDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
  var self = this;
  var displayNinjaPic = function(){

  };
  var expand = {height: "20px", width: "20px", "border-radius": "20px"};
  var shrink = {height: "0px", width: "0px", "border-radius": "10px"};

  this._$node.animate(expand, 500).addClass("ninjaPic").animate(shrink, 500).fadeOut("slow", function () {
    self._top  = (self._top + 200) % $("body").height();
    self._left = (self._left + 20) % $("body").width();;
    // self._$node.;
    self.setPosition(
      self._top,
      self._left);
    self._$node.fadeIn("slow");
  });
};
