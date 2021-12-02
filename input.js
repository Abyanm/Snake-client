const setupInput = function () {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    return stdin;
  };
  
  const handleUserInput = function (direction) {
    if (direction === "w"){
      connect.write("move up");
      if (direction === "a") {
        connect.write("move left");
        if (direction === "d"){
          connect.write("move right");
          if(direction === "x");
          connect.write("move down");
          if(direction === "q"){
            connect.write("Well done")
          }
        }
  return connect
      }
    }
  };
  
  module.exports = {connect};