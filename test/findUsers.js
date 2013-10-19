var Connection = require('./fixtures/Connection');
var should = require('should');

describe('Connection', function(){

  var db    = new Connection();
  var users = ['odin', 'thor', 'loki'];

  // This runs before each test

  beforeEach(function(done){

    // Saves users to mock "db"
    db.save(users, done);

  });

  describe('#find()', function(){
    it('respond with matching records', function(done){
      db.find({ type: 'User' }, function(err, result){

        // Verify err doesn't exist
        // Check length of result
        // Extra Credit: check all users exist

        done();

      });
    });
  });
});