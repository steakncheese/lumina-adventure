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
    name: `adventurer`,
    attack: 27,
    life: 100,
    maxLife: 100,
    gold: 100,
    exp: 0,
  },
];
let enemyInfo = [
  {
    name: "Zombie",
    attack: 7,
    life: 100,
    livingStatus: 1,
    gold: 50,
    relic: 1,
    exp: 100,
    skill: "Deadly Bite",
  },
  {
    name: "Wild Boar",
    attack: 8,
    life: 100,
    livingStatus: 1,
    gold: 50,
    relic: 1,
    exp: 100,
    skill: "Tackle",
  },
  {
    name: "Wild Spider",
    attack: 9,
    life: 100,
    livingStatus: 1,
    gold: 50,
    relic: 1,
    exp: 100,
    skill: "Web spin",
  },
  {
    name: "Tutorial Dungeon Master",
    attack: 14,
    life: 200,
    livingStatus: 1,
  },
];
function askPlayerName() {
  // playerInfo[0].name = rl.question(`What is your name hero?`);
  return `${welcome}`;
}
let cheatTrigger = [0, 0];
function poweroverwhelming() {
  if (cheatTrigger[0] === 0) {
    cheatTrigger[0]++;
    playerInfo[0].maxLife = playerInfo[0].maxLife + 100;
    return `Cheat activated: Max life +100. Current Life: ${playerInfo[0].maxLife} health points.`;
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
function encounterEnemy(enemyNum) {
  console.log("Hello");
}
function attack() {
  if (x == 1 && y == 0 && enemyInfo[0].livingStatus == 1) {
    let enemyNum = 0;
    enemyInfo[enemyNum].life = enemyInfo[enemyNum].life - playerInfo[0].attack;
    playerInfo[0].life = playerInfo[0].life - enemyInfo[enemyNum].attack;
    if (enemyInfo[enemyNum].life <= 0) {
      enemyInfo[enemyNum].livingStatus = enemyInfo[enemyNum].livingStatus - 1;
      playerInfo[0].life = playerInfo[0].life + enemyInfo[enemyNum].attack;
      playerInfo[0].gold = playerInfo[0].gold + enemyInfo[enemyNum].gold;
      playerInfo[0].exp = playerInfo[0].exp + enemyInfo[enemyNum].exp;
      return `You have attacked ${enemyInfo[enemyNum].name} for ${playerInfo[0].attack} damage. ${enemyInfo[enemyNum].name}'s life: 0 health points
        \n\u2605\u2605\u2605  Victory! You have killed ${enemyInfo[enemyNum].name}. You have gained ${enemyInfo[enemyNum].gold} gold and ${enemyInfo[enemyNum].exp} experience. \u2605\u2605\u2605`;
    } else {
      return `You have attacked ${enemyInfo[enemyNum].name} for ${playerInfo[0].attack} damage. ${enemyInfo[enemyNum].name}'s life: ${enemyInfo[enemyNum].life} health points
      ${enemyInfo[enemyNum].name} have attacked you for ${enemyInfo[enemyNum].attack} damage. ${playerInfo[0].name}'s life: ${playerInfo[0].life} health points`;
    }
  } else {
    return `There is nothing to attack here.`;
  }
}
function observe() {
  if (x == 0 && y == 0) {
    return `You have seen a hungry homeless peron. He is asking for 100 gold. You know that a signle meal only costs 5 gold.
    You currently have ${playerInfo[0].gold} gold. You can type /give to give your gold.`;
  } else if (x == 1 && y == 1) {
    return `You see the house of the reknown healer, Yuna. She has been to make great battle healing the villagers and heroes alike.
    She loves solititude and peace. The house you see is simple but strong. You beautiful little crystals all around her house.
    You realize that those crystals are explosives in disguise. Mess with Yuna and you know you are going in a world of hurt.
      To restore your life points type /heal`;
  } else {
    return `There is nothing here`;
  }
}
let event = [0, 0];
function give() {
  if (x == 0 && y == 0 && event[0] == 0) {
    playerInfo[0].gold = playerInfo[0].gold - 100;
    event[0]++;
    return `You currently have ${playerInfo[0].gold} gold. He wants to /talk to you.`;
  } else {
    return `You cannot give anymore.`;
  }
}
function talk() {
  if (x == 0 && y == 0 && event[0] == 1) {
    playerInfo[0].maxLife = playerInfo[0].maxLife + 10;
    event[0]++;
    return `The homeless man smiles at you. He hasn't eaten for days and has tons of debts to pay. 
    He looks at you and says I cannot pay you back your gold.
    But I have something that might be valuable to you when the time comes.
    If your life is in danger, go to (1,1) to find Yuna, the Healer. She will tend your wounds until you are healthy.
    Thank you adventurer. May the Great Spirit be with you. He smiles gently as he walks away from you.
        You have gained +10 max life.     You're current max life points is now: ${playerInfo[0].maxLife}`;
  } else {
    return `There is no one to talk to.`;
  }
}

function heal() {
  if (x == 1 && y == 1) {
    playerInfo[0].life = playerInfo[0].maxLife;
    return `Yuna, the Healer: Hello ${playerInfo[0].name}! Free heals for you.
    Your health has been restored to full.     You're current life points is now: ${playerInfo[0].life}`;
  } else {
    return `You are at (${x}, ${y}). This is not the place for you to get healed.`;
  }
}
function status() {
  return `Status:
  Name: ${playerInfo[0].name}
  Attack: ${playerInfo[0].attack}
  Life: ${playerInfo[0].life}/${playerInfo[0].maxLife}
  Gold: ${playerInfo[0].gold}
  Experience: ${playerInfo[0].exp}`;
}
function help() {
  return `Instructions: To move, type [/w] North, [/s] South, [/a] West, or [/d] East then press Enter.
  To see info on current location: /o or /observe *** Reccomendation: use in every tile you go ***
  To see where you are located: /location
  To attack an enemy: /k
  The other things you must learn as you go. For it is by fire that gold is made.`;
}
app.get("/help", (request, response) => {
  response.send(help());
});
app.get("/heal", (request, response) => {
  response.send(heal());
});
app.get("/attack", (request, response) => {
  response.send(attack());
});
app.get("/", (request, response) => {
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
app.get("/give", (request, response) => {
  response.send(give());
});
app.get("/location", (request, response) => {
  response.send(location());
});
app.get("/status", (request, response) => {
  response.send(status());
});
app.get("/talk", (request, response) => {
  response.send(talk());
});
app.get("/poweroverwhelming", (request, response) => {
  response.send(poweroverwhelming());
});
app.listen(port, () => {
  console.log(`Web server running on port ${port}`);
});
