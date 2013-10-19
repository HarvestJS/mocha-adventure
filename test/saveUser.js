var User = require('./fixtures/User');
var should = require('should');

describe('User', function(){
  describe('#save()', function(){
    it('should save without error', function(done){

      var user = new User('Luna');

      // user.save takes a callback -
      // remember mocha's done will accept a potential error

      // Write a test that saves the User

    });
  });
});