var myImage = document.querySelector("img");
myImage.onclick = function() {
    var mySrc = myImage.getAttribute("src");
    if (mySrc === "images/1.jpg") {
        myImage.setAttribute("src", "images/3.jpg");
    }
    else {
        myImage.setAttribute("src", "images/1.jpg");
    }
}
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
function setUsername () {
    var myName = prompt("Пожалуйста, введите свое имя");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Добро пожаловать, " + myName;
}
if (!localStorage.getItem("name")) {
    setUsername();
}
else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Добро пожаловать, " + storedName;
}
myButton.onclick = function() {
    setUsername();
}