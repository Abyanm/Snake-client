const net = require("net");
const { connect } = require("./client");
const { setupInput } = require("./input");
const handleUserInput = function (direction){
  if(direction === '\u0003') {
    process.exit();
  }
  console.log(direction)
};

console.log("Connecting ...");
const conn = connect ();

setupInput(conn);;

