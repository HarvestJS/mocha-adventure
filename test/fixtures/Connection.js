module.exports = (function() {

  function Connection() {}

  Connection.prototype.save = function(col, done) {
    this.col = col;
    return done();
  };

  Connection.prototype.find = function(query, done) {
    return done(null, this.col);
  };

  return Connection;

})();
