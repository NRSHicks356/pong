const buttons = document.querySelectorAll("button");
const h1 = document.querySelector("h1");
const score = document.querySelector("#score");
const span1 = document.querySelector("#p1Score");
const span2 = document.querySelector("#p2Score");
const button1 = document.querySelector("#player1Button");
const button2 = document.querySelector("#player2Button");
const reset = document.querySelector("#resetButton");
let count1 = 0;
let count2 = 0;
let gameOver = false;
let numbers = () => parseInt(score.options[score.selectedIndex].text);
button1.addEventListener("click", function() {
    if (!gameOver) {
        count1++;
    } else {
        button1.disabled = true;
        button2.disabled = true;
    }

    if (count1 === numbers()) {
        button1.disabled = true;
        button2.disabled = true;
        span1.classList.add("has-text-success");
        span2.classList.add("has-text-danger");
    }
    span1.innerText = count1;
});
button2.addEventListener("click", function() {
    if (!gameOver) {
        count2++;
    } else {
        button1.disabled = true;
        button2.disabled = true;
    }

    if (count2 === numbers()) {
        button1.disabled = true;
        button2.disabled = true;
        span2.classList.add("has-text-success");
        span1.classList.add("has-text-danger");
    }
    span2.innerText = count2;
});
score.addEventListener("change", resetBtn);
reset.addEventListener("click", resetBtn);

function resetBtn() {
    count1 = 0;
    count2 = 0;
    span1.innerText = count1;
    span2.innerText = count2;
    span2.classList.remove("has-text-success", "has-text-danger");
    span1.classList.remove("has-text-success", "has-text-danger");
    button1.disabled = false;
    button2.disabled = false;
}
