const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address here,
    port: 50541// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
      console.log("Successfully connected to game server")
    // code that does something when the connection is first established
  });
  conn.on("data", () => { 
    console.log("Name: Aby")
    console.log("Move: up")  });

  return conn;
};

console.log("Connecting..");
connect();

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