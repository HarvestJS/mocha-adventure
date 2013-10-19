module.exports = (function() {

  function User(user) {
    this.user = user;
  }

  User.prototype.save = function(done) {
    return setTimeout(function() {
      return done();
    }, 500);
  };

  return User;

})();