import express from "express";
import rl from "readline-sync";

const app = express();
const port = 4000;

app.use(express.json());

// This is normally stored in a database
let x = 0;
let y = 0;
let playerInfo = [
  {
    name: `Unnamed Hero`,
    playerAttack: 27,
    playerLife: 100,
    playerMaxLife: 100,
  },
];
function askPlayerName() {
  // playerName = rl.question(`What is your name hero?`);
  return `hello`;
}
let cheatTrigger = [0, 0];
function poweroverwhelming() {
  if (cheatTrigger[0] === 0) {
    cheatTrigger[0]++;
    playerInfo[0].playerMaxLife = playerInfo[0].playerMaxLife + 100;
    return `Cheat activated: Max life +100. Current Life: ${playerInfo[0].playerMaxLife} health points.`;
  } else {
    return `You cannot use this cheat again.`;
  }
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

Go forth Hero. And may the Great Spirit be with you.

You open your eyes and now you are transported to the tutorial area. Your current position is (0,0).
Type in /help to proceed`;
}
function west() {
  x--;
  if (x < -2) {
    x++;
    return `You cannot go there. You are back at (${x}, ${y})`;
  } else {
    return `You are located at: (${x}, ${y})`;
  }
}
function north() {
  y++;
  if (y > 2) {
    y--;
    return `You cannot go there. You are back at (${x}, ${y})`;
  } else {
    return `You are located at: (${x}, ${y})`;
  }
}
function south() {
  y--;
  if (y < -2) {
    y++;
    return `You cannot go there. You are back at (${x}, ${y})`;
  } else {
    return `You are located at: (${x}, ${y})`;
  }
}
function east() {
  x++;
  if (x > 2) {
    x--;
    return `You cannot go there. You are back at (${x}, ${y})`;
  } else {
    return `You are located at: (${x}, ${y})`;
  }
}
function location() {
  return `You are located at: (${x}, ${y})`;
}
function observe() {
  if (x == 0 && y == 0) {
    return `You have seen a homeless peron`;
  } else {
    return `There is nothing here`;
  }
}
function status() {
  let playerInfo = [
    {
      name: `Unnamed Hero`,
      playerAttack: 27,
      playerLife: 100,
      playerMaxLife: 100,
    },
  ];
  return `Status:
  Name: ${playerInfo[0].name}
  Attack: ${playerInfo[0].playerAttack}
  Life: ${playerInfo[0].playerLife}/${playerInfo[0].playerMaxLife}`;
}
function help() {
  return `Instructions: To move, type [/w] North, [/s] South, [/a] West, or [/d] East then press Enter.
  To see where you are located: /location
  To attack an enemy: /k
  The other things you must learn as you go. For it is by fire that gold is made.`;
}
app.get("/help", (request, response) => {
  response.send(help());
});
app.put("/", (request, response) => {
  response.send(askPlayerName());
});
app.get("/welcome", (request, response) => {
  response.send(welcome());
});
app.get("/d", (request, response) => {
  response.send(east());
});
app.get("/w", (request, response) => {
  response.send(north());
});
app.get("/s", (request, response) => {
  response.send(south());
});
app.get("/a", (request, response) => {
  response.send(west());
});
app.get("/o", (request, response) => {
  response.send(observe());
});
app.get("/location", (request, response) => {
  response.send(location());
});
app.get("/status", (request, response) => {
  response.send(status());
});
app.get("/poweroverwhelming", (request, response) => {
  response.send(poweroverwhelming());
});
app.listen(port, () => {
  console.log(`Web server running on port ${port}`);
});
