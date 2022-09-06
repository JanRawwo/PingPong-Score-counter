const P1 = {
    score: 0,
    display: document.querySelector("#p1sc"),
    button: document.querySelector('#btnP1')
}

const P2 = {
    score: 0,
    display: document.querySelector("#p2sc"),
    button: document.querySelector('#btnP2')
}

const reset = document.querySelector('#reset');
const maxScore = document.querySelector('#maxsc');




const joke = document.querySelector("#dadJoke");



const getDadJoke = async () => {
    const config = { headers: { Accept: 'application/json' } }
    const res = await axios.get('https://icanhazdadjoke.com/', config)
    // console.log(res.data.joke)
    joke.innerText = res.data.joke;

}

getDadJoke();













let maxSC = parseInt(maxScore.value);
let gameOver = false;

const resetfn = () => {
    gameOver = false;
    for (let p of [P1, P2]) {
        p.button.disabled = false;
        p.score = 0;
        p.display.textContent = p.score;
        p.display.classList.remove('has-text-success', 'has-text-danger');
    }
}

maxScore.addEventListener('change', function () {
    maxSC = parseInt(this.value);
    resetfn();
})

function updateScores(player, opponent) {
    if (!gameOver) {
        player.score++;
        if (player.score >= maxSC && Math.abs(player.score - opponent.score) >= 2) {
            gameOver = true;
            player.display.classList.add("has-text-success")
            opponent.display.classList.add("has-text-danger")
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

P1.button.addEventListener('click', function () {
    updateScores(P1, P2)
})
P2.button.addEventListener('click', function () {
    updateScores(P2, P1)
})

reset.addEventListener('click', resetfn)


































// let p1 = 0;
// let p2 = 0;
// let maxsc = 7;
// const h1 = document.querySelector("#score");
// const addPoint = (playerSC) => {
//     return playerSC++;
// }

// const p1sc = document.querySelector("#p1sc");
// const p2sc = document.querySelector("#p2sc");

// const wynik = () => {
//     p1 = btn1.value;
//     p2 = btn2.value;
//     maxsc = parseInt(max.value);
//     const score = `${p1sc.} to ${p2sc}`;
//     h1.innerText = score;

//     if (p1 >= maxsc) {
//         const player1win = true;
//         // alert("Player 1 wins!");
//         p1sc.classList.add('winner');
//     }
//     if (p2 >= maxsc) {
//         const player2win = true;
//         alert("Player 2 wins!");
//     }
// }


// const btn1 = document.querySelector('#btnP1');
// const btn2 = document.querySelector('#btnP2');
// const reset = document.querySelector('#reset');
// const max = document.querySelector('#maxsc');

// reset.addEventListener('click', (e) => {
//     btn1.value = 0;
//     btn2.value = 0;
//     wynik();
// })

// btn1.value = 0;
// btn2.value = 0;
// wynik();


// btn1.addEventListener('click', function (e) {
//     this.value++;
//     wynik();
// });
// btn2.addEventListener('click', function (e) {
//     this.value++;
//     wynik();
// });



