var p1 = Math.floor(Math.random() * 6) + 1;
var p2 = Math.floor(Math.random() * 6) + 1;

var res = document.querySelector("h1");

if(p1 > p2) {
    res.textContent = "🚩Player1 wins!";
}
else if (p1 < p2) {
    res.textContent = "Player2 wins! 🚩";
}
else {
    res.textContent = "Draw :(";
}

var firstImageSrc = "./images/dice" + p1 + ".png";
var a = document.querySelector(".img1");
a.setAttribute("src", firstImageSrc);

var secondImageSrc = "./images/dice" + p2 + ".png";
var b = document.querySelector(".img2");
b.setAttribute("src", secondImageSrc);