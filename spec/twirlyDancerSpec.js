describe("twirlyDancer", function() {

  var twirlyDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    twirlyDancer = new TwirlyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(twirlyDancer._$node).to.be.an.instanceof(jQuery);
  });

  xit("should have a step function that makes its node blink", function() {
    sinon.spy(twirlyDancer._$node, 'toggle');
    twirlyDancer.step();
    expect(twirlyDancer._$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(twirlyDancer, "step");
      expect(twirlyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      // clock.tick(timeBetweenSteps);

      expect(twirlyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(twirlyDancer.step.callCount).to.be.equal(2);
    });
  });
});
