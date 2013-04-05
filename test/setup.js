var smash = require("smash");

module.exports = function () {
  var files = [].slice.call(arguments).map(function (d) {
      return "src/" + d;
    }),
    expression = "d3";

  files.unshift("src/core/_start");
  files.push("src/core/_end");

  function topic() {
    smash.load(files, expression, null, this.callback);
  }

  topic.expression = function (_) {
    expression = _;
    return topic;
  };

  return topic;
};

process.on("uncaughtException", function (e) {
  console.trace(e.stack);
});