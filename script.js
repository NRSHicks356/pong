const p1 = {
    count: 0,
    score: document.querySelector("#p1Score"),
    button: document.querySelector("#player1Button"),
};

const p2 = {
    count: 0,
    score: document.querySelector("#p2Score"),
    button: document.querySelector("#player2Button"),
};

const reset = document.querySelector("#resetButton");
let gameOver = false;
let numbers = () => parseInt(score.options[score.selectedIndex].text);

function game(player, opponent) {
    if (!gameOver) {
        player.count++;
    } else {
        player.button.disabled = true;
        opponent.button.disabled = true;
    }

    if (player.count === numbers()) {
        player.button.disabled = true;
        opponent.button.disabled = true;
        player.score.classList.add("has-text-success");
        opponent.score.classList.add("has-text-danger");
    }
    player.score.innerText = player.count;
}
p1.button.addEventListener("click", function() {
    game(p1, p2);
});
p2.button.addEventListener("click", function() {
    game(p2, p1);
});

score.addEventListener("change", resetBtn);
reset.addEventListener("click", resetBtn);

function resetBtn() {
    for (let p of[p1, p2]) {
        p.count = 0;
        p.score.innerText = p.count;
        p.score.classList.remove("has-text-success", "has-text-danger");
        p.button.disabled = false;
    }
}
