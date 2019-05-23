// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
require("dotenv").config();
const port = process.env.PORT || 5000;
var $ = require("jquery");
const io = require("socket.io-client");

$(() => {
	var socket = io(`http://moichatapp.herokuapp.com`);
	$("form").submit(e => {
		e.preventDefault(); // prevents page reloading
		socket.emit("chat message", $("#m").val());
		$("#m").val("");
		return false;
	});
	socket.on("chat message", msg => {
		$("#messages").append($("<li>").text(msg));
	});
});
