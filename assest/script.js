var numofs = 6;
var color = generate_random_color(numofs);
var pickedcolor = pick_color();
var colordisplay = document.getElementById("colordisplay");
var squares = document.querySelectorAll(".square");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var esay = document.querySelector("#esay");
var hard = document.querySelector("#hard");
colordisplay.textContent = pickedcolor;
for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color[i];
    squares[i].addEventListener("click", function() {
        var clickedcolor = this.style.backgroundColor;
        if (clickedcolor === pickedcolor) {
            message.textContent = "Correct!!";
            reset.textContent = "Play Again ?";
            chanage_color(pickedcolor);
        } else {
            this.style.backgroundColor = "#232323";
            message.textContent = "Try Again"
        }
    });
}
reset.addEventListener("click", function() {
    color = generate_random_color(numofs);
    pickedcolor = pick_color();
    colordisplay.textContent = pickedcolor;
    for (var i = 0; i < color.length; i++) {
        squares[i].style.backgroundColor = color[i];
        squares[i].style.display = "block";
    }
    h1.style.backgroundColor = "steelblue";
    message.textContent = " ";
    this.textContent = " New Game";

});
esay.addEventListener("click", function() {
    numofs = 3;
    color = generate_random_color(numofs);
    pickedcolor = pick_color();
    colordisplay.textContent = pickedcolor;
    for (var i = 0; i < color.length; i++)
        squares[i].style.backgroundColor = color[i];
    console.log(color.length);
    for (var i = color.length; i < squares.length; i++)
        squares[i].style.display = "none";
    h1.style.backgroundColor = "steelblue";
    message.textContent = " ";
    esay.classList.add("sellected");
    hard.classList.remove("sellected");

});
hard.addEventListener("click", function() {
    numofs = 6;
    color = generate_random_color(numofs);
    pickedcolor = pick_color();
    colordisplay.textContent = pickedcolor;
    for (var i = 0; i < color.length; i++) {
        squares[i].style.backgroundColor = color[i];
        squares[i].style.display = "block";
    }
    console.log(color.length);
    h1.style.backgroundColor = "steelblue";
    message.textContent = " ";
    hard.classList.add("sellected");
    esay.classList.remove("sellected");

});

function chanage_color(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
        h1.style.backgroundColor = color;

    }
}

function pick_color() {
    var random = Math.floor(Math.random() * color.length);
    return color[random];
}

function generate_random_color(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(random_color());
    }
    return arr;
}

function random_color() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}