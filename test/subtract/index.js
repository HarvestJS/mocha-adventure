var subtract = require('../../lib/add');

describe('subtract', function(){
  it('should subtract second number from first', function(done){
    
    subtract(2, 1).should.equal(1);
    subtract(1, 2).should.equal(-1);
    subtract(2, 2).should.equal(0);

    done();

  });
});