var add = require('../../lib/add');

describe('add', function(){
  it('should add 2 numbers', function(done){
    
    add(1, 2).should.equal(3);
    add(1, -2).should.equal(-1);
    add(2, 2).should.equal(4);

    done();

  });
});