import express from "express";
import rl from "readline-sync";

const app = express();
const port = 4000;

app.use(express.json());

// This is normally stored in a database
let x = 0;
let y = 0;
let playerName = `Unnamed Hero`;
function askPlayerName() {
  // playerName = rl.question(`What is your name hero?`);
  return `hello`;
}
function welcome() {
  return `
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
█▄▄░▄▄█░██░█▄░▄█▀▄▄▀█░▄▄▀██▄██░▄▄▀█░████▀▀███▄▄░▄▄█░████░▄▄████░▄▄░█░▄▄▀█░▄▀▄░█░▄▄
███░███░██░██░██░██░█░▀▀▄██░▄█░▀▀░█░████▀▀█████░███░▄▄░█░▄▄████░█▀▀█░▀▀░█░█▄█░█░▄▄
███░████▄▄▄██▄███▄▄██▄█▄▄█▄▄▄█▄██▄█▄▄██████████░███▄██▄█▄▄▄████░▀▀▄█▄██▄█▄███▄█▄▄▄
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
; // texteditor.com

Welcome to Tutorial Area.

Oracle: You have been summoned to protect the Kingdom of Lumina but have to prove youself worthy of the power of Hero.
Instructions: To move, hit [w] North, [s] South, [a] West, or [d] East then press Enter.
The other things you must learn as you go. For it is by fire that gold is made.
Go forth Hero. And may the Great Spirit be with you.
\nYou open your eyes and now you are transported to the tutorial area. Your current position is (0,0).`;
}
function east() {
  x--;
  if (x < -2) {
    x++;
    return `You cannot go there. You are back at (${x}, ${y})`;
  } else {
    return `You are located at: (${x}, ${y})`;
  }
}
function location() {
  return `You are located at: (${x}, ${y})`;
}

app.put("/", (request, response) => {
  response.send(askPlayerName());
});
app.get("/welcome", (request, response) => {
  response.send(welcome());
});
app.post("/east", (request, response) => {
  response.send(east());
});
app.get("/location", (request, response) => {
  response.send(location());
});
app.listen(port, () => {
  console.log(`Web server running on port ${port}`);
});
