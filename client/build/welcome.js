
// var welcomeText = function() {
//   var pTag = document.getElementById("welcome-text");
//   var div = document.getElementById("text-box");
//   pTag.innerText = "Welcome to the animals of the world!"
//   // div.appendChild(pTag);
// }
//
// welcomeText();

var isPaused = false;

var printText = function(destination, message, speed) {
  var i = 0;
  var interval = setInterval(function() {
    document.getElementById(destination).innerHTML += message.charAt(i);
    i++;
    if (i > message.length) {
      clearInterval(interval);
    }
  }, speed)
}


printText("welcome-text", "Welcome to the animals of the world.", 100)

when(printText).done(printText("welcome-text", "My name is...", 100))
