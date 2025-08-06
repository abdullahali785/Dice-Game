var randomnum1 = Math.floor(Math.random() * 6) + 1;
var randomnum2 = Math.floor(Math.random() * 6) + 1;

const leftImg = `./images/dice${randomnum1}.png`;
const rightImg = `./images/dice${randomnum2}.png`;

document.querySelector(".img1").setAttribute("src", leftImg);
document.querySelector(".img2").setAttribute("src", rightImg);

if (randomnum1 > randomnum2) {
    document.querySelector("h1").textContent = "Player 1 Wins!";
}
else if (randomnum2 > randomnum1) {
    document.querySelector("h1").textContent = "Player 2 Wins!";
}
else {document.querySelector("h1").textContent = "Draw!";} 

