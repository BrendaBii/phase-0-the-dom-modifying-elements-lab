// Write your code here!
let main = document.getElementById("main");
main.remove();

const newHeader = document.createElement("h1");

newHeader.id = "victory";

newHeader.textContent = ("Brenda is the champion").toString();

let body = document.getElementsByTagName("body");
body.append(newHeader);