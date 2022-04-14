const buttons = document.querySelectorAll("button");
const h1 = document.querySelector("h1");
const score = document.querySelector("#score");
let count1 = 0;
let count2 = 0;
let numbers = score.options[score.selectedIndex].text;
buttons[0].addEventListener("click", function(e) {
    let numbers = score.options[score.selectedIndex].text;

    if (count1 < numbers) {
        count1++;
    }
    h1.innerText = `${count1} to ${count2}`;
});

buttons[1].addEventListener("click", function(e) {
    if (count2 < numbers) {
        count2++;
    }
    h1.innerText = `${count1} to ${count2}`;
});

buttons[2].addEventListener("click", function(e) {
    count1 = 0;
    count2 = 0;
    numbers = score.options[score.selectedIndex].text;
    h1.innerText = `${count1} to ${count2}`;
});