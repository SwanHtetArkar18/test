// var typed = new Typed('#typed',{
// 	strings:[
// 		'Inventory'
// 	],
// 	typeSpeed:150,
// 	backSpeed:150,
// 	loop:false
// });
// var typed = new Typed('#typed2',{
// 	strings:[
// 		'Management'
// 	],
// 	typeSpeed:130,
// 	backSpeed:130,
// 	loop:false
// });
// var typed = new Typed('#typed3',{
// 	strings:[
// 		'System'
// 	],
// 	typeSpeed:200,
// 	backSpeed:200,
// 	loop:false
// });


window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {

  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    document.getElementById("navbar-brand").innerHTML = '<img src="images/logo.jpg" alt="index"  class="indexBrandImage">'
    document.getElementById("navbar-brand").style.padding = "0px 15px";
  } else {
    navbar.classList.remove("sticky");
    document.getElementById("navbar-brand").innerHTML = 'お食事所ゆきひら'
    document.getElementById("navbar-brand").style.padding = "15px 15px";
  }
}

//var ws_uri = "ws://localhost:8080";
//var websocket = new WebSocket(ws_uri);
//
//// on websocket open:
//websocket.onopen = function(event) {
//  MessageAdd('<div class="message green">You have entered the chat room.</div>');
//};
//
//// on websocket close:
//websocket.onclose = function(event) {
//  MessageAdd('<div class="message blue">You have been disconnected.</div>');
//};
//
//// on websocket error:
//websocket.onerror = function(event) {
//  MessageAdd('<div class="message red">Connection to chat failed.</div>');
//};
//
//websocket.onmessage = function(event) {
//  var data = JSON.parse(event.data);
//
//  if (data.type == "message") {
//    MessageAdd('<div class="message">' + data.username + ': ' + data.message + '</div>');
//  }
//};
//
//document.getElementById("chat-form").addEventListener("submit", function(event) {
//  event.preventDefault();
//
//  var message_element = document.getElementsByTagName("input")[0];
//  var message = message_element.value;
//
//  if (message.toString().length) {
//    var username = localStorage.getItem("username");
//
//    var data = {
//      type: "message",
//      username: username,
//      message: message
//    };
//
//    websocket.send(JSON.stringify(data));
//    message_element.value = "";
//  }
//}, false);
//
//function Username() {
//  var username = window.prompt("Enter your username:", "");
//
//  if (username.toString().length > 2) {
//    localStorage.setItem("username", username);
//  }
//  else {
//    alert("Your username must be at least two characters.");
//    Username();
//  }
//}
//
//function MessageAdd(message) {
//  var chat_messages = document.getElementById("chat-messages");
//
//  chat_messages.insertAdjacentHTML("beforeend", message);
//  chat_messages.scrollTop = chat_messages.scrollHeight;
//}

// let test = document.getElementById("testBox");
// let testText = document.getElementById("testText");
//
// test.addEventListener("mouseover", function( event ) {
//   testText.innerHTML=event.clientX;
//
// });
