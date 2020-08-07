// JavaScript Document

var main = document.querySelector("main");
var submitButton = document.querySelector("#enter");
var input = document.querySelector("#name");
var body = document.querySelector("body");

// submitButton.addEventListener("click", function (e) {
//   var personName = input.value;
//   console.log(personName);
//   var para = document.createElement("p");
//   para.innerHTML =
//     "<h3>Hey there " + personName + "! Thanks for stopping by!</h3>";
//   main.appendChild(paragraph);
//   // body.setAttribute("class", "meow");
//   console.log("=^..^=");
// });

submitButton.addEventListener("click", function () {
  let personName = input.value;
  let para = document.createElement("p");
  para.innerHTML =
    "<h3>Hey there " + personName + "! Thanks for stopping by!</h3>";
  main.appendChild(para);
  body.setAttribute("class", "meow");
  console.log("=^..^=");
});
