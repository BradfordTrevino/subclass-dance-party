describe('superheroDancer', function() {

  var superheroDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    superheroDancer = new SuperheroDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(superheroDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node fade in and out', function() {
    sinon.spy(superheroDancer.$node, 'fadeToggle');
    superheroDancer.step();
    expect(superheroDancer.$node.fadeToggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(superheroDancer, 'step');
      expect(superheroDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(superheroDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(superheroDancer.step.callCount).to.be.equal(2);
    });
  });
});
