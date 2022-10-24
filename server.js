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
    name: `Adventurer`,
    weapon: `Baseball Bat`,
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
    // id: 00,
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
    // id: 01,
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
    // id: 02,
    attack: 9,
    life: 100,
    livingStatus: 1,
    gold: 50,
    relic: 1,
    exp: 100,
    skill: "Web Spin",
  },
  {
    name: "Mutant Fox",
    // id: 03,
    attack: 9,
    life: 100,
    livingStatus: 1,
    gold: 50,
    relic: 1,
    exp: 100,
    skill: "Tail Whip",
  },
  {
    name: "Tutorial Dungeon Master",
    attack: 14,
    life: 200,
    livingStatus: 1,
  },
];

function attack() {
  if (x == 1 && y == 0 && enemyInfo[0].livingStatus == 1) {
    let enemyNum = 0;
    enemyInfo[enemyNum].life = enemyInfo[enemyNum].life - playerInfo[0].attack;
    playerInfo[0].life = playerInfo[0].life - enemyInfo[enemyNum].attack;
    if (playerInfo[0].life <= 0) {
      return `You have attacked ${enemyInfo[enemyNum].name} for ${playerInfo[0].attack} damage. --- ${enemyInfo[enemyNum].name}'s life: ${enemyInfo[enemyNum].life} health points
      ${enemyInfo[enemyNum].name} have attacked you with ${enemyInfo[enemyNum].skill} for ${enemyInfo[enemyNum].attack} damage. --- ${playerInfo[0].name}'s life: ${playerInfo[0].life} health points
      \n\u2605\u2605\u2605  You have been defeated by ${enemyInfo[enemyNum].name}.  \u2605\u2605\u2605
      --- GAME OVER ---`;
    }
    if (enemyInfo[enemyNum].life <= 0) {
      enemyInfo[enemyNum].livingStatus = enemyInfo[enemyNum].livingStatus - 1;
      playerInfo[0].life = playerInfo[0].life + enemyInfo[enemyNum].attack;
      playerInfo[0].gold = playerInfo[0].gold + enemyInfo[enemyNum].gold;
      playerInfo[0].exp = playerInfo[0].exp + enemyInfo[enemyNum].exp;
      return `You have attacked ${enemyInfo[enemyNum].name} for ${playerInfo[0].attack} damage. --- ${enemyInfo[enemyNum].name}'s life: 0 health points
        \n\u2605\u2605\u2605  Victory! You have killed ${enemyInfo[enemyNum].name}. You have gained ${enemyInfo[enemyNum].gold} gold and ${enemyInfo[enemyNum].exp} experience. \u2605\u2605\u2605`;
    } else {
      return `You have attacked ${enemyInfo[enemyNum].name} for ${playerInfo[0].attack} damage. --- ${enemyInfo[enemyNum].name}'s life: ${enemyInfo[enemyNum].life} health points
      ${enemyInfo[enemyNum].name} have attacked you with ${enemyInfo[enemyNum].skill} for ${enemyInfo[enemyNum].attack} damage. --- ${playerInfo[0].name}'s life: ${playerInfo[0].life} health points`;
    }
  } else if (x == -1 && y == 0 && enemyInfo[1].livingStatus == 1) {
    let enemyNum = 1;
    enemyInfo[enemyNum].life = enemyInfo[enemyNum].life - playerInfo[0].attack;
    playerInfo[0].life = playerInfo[0].life - enemyInfo[enemyNum].attack;
    if (playerInfo[0].life <= 0) {
      return `\n\x1b[92mYou\x1b[0m have attacked \x1b[35m${enemyInfo[enemyNum].name}\x1b[0m for \x1b[31m${playerInfo[0].attack}\x1b[0m damage. --- \x1b[35m${enemyInfo[enemyNum].name}'s life:\x1b[0m \x1b[33m${enemyInfo[enemyNum].life}\x1b[0m health points
        \x1b[35m${enemyInfo[enemyNum].name}\x1b[0m have attacked \x1b[92myou\x1b[0m with \x1b[36m${enemyInfo[enemyNum].skill}\x1b[0m for \x1b[31m${enemyInfo[enemyNum].attack}\x1b[0m damage. --- \x1b[92m${playerInfo[0].name}'s life:\x1b[0m \x1b[33m0\x1b[0m health points
      \n\x1b[31m\u2605\u2605\u2605  You have been defeated by ${enemyInfo[enemyNum].name}.  \u2605\u2605\u2605\x1b[0m
      --- GAME OVER ---`;
    }
    if (enemyInfo[enemyNum].life <= 0) {
      enemyInfo[enemyNum].livingStatus = enemyInfo[enemyNum].livingStatus - 1;
      playerInfo[0].life = playerInfo[0].life + enemyInfo[enemyNum].attack;
      playerInfo[0].gold = playerInfo[0].gold + enemyInfo[enemyNum].gold;
      playerInfo[0].exp = playerInfo[0].exp + enemyInfo[enemyNum].exp;
      return `\n\x1b[92mYou\x1b[0m have attacked \x1b[35m${enemyInfo[enemyNum].name}\x1b[0m for \x1b[31m${playerInfo[0].attack}\x1b[0m damage. --- \x1b[35m${enemyInfo[enemyNum].name}'s life:\x1b[0m 0 health points
        \n\x1b[33m\u2605\u2605\u2605  Victory! You have killed ${enemyInfo[enemyNum].name}. You have gained ${enemyInfo[enemyNum].gold} gold and ${enemyInfo[enemyNum].exp} experience. \u2605\u2605\u2605\x1b[0m
        The village elder Ran tells you that her house is just located south at (-1,-1). Kill all the monsters surrounding the starting location to get a reward.`;
    } else {
      return `\n\x1b[92mYou\x1b[0m have attacked \x1b[35m${enemyInfo[enemyNum].name}\x1b[0m for \x1b[31m${playerInfo[0].attack}\x1b[0m damage. --- \x1b[35m${enemyInfo[enemyNum].name}'s life:\x1b[0m \x1b[33m${enemyInfo[enemyNum].life}\x1b[0m health points
        \x1b[35m${enemyInfo[enemyNum].name}\x1b[0m have attacked \x1b[92myou\x1b[0m with \x1b[36m${enemyInfo[enemyNum].skill}\x1b[0m for \x1b[31m${enemyInfo[enemyNum].attack}\x1b[0m damage. --- \x1b[92m${playerInfo[0].name}'s life:\x1b[0m \x1b[33m${playerInfo[0].life}\x1b[0m health points\n`;
    }
  } else if (x == 0 && y == 1 && enemyInfo[2].livingStatus == 1) {
    let enemyNum = 2;
    enemyInfo[enemyNum].life = enemyInfo[enemyNum].life - playerInfo[0].attack;
    playerInfo[0].life = playerInfo[0].life - enemyInfo[enemyNum].attack;
    if (playerInfo[0].life <= 0) {
      return `\n\x1b[92mYou\x1b[0m have attacked \x1b[35m${enemyInfo[enemyNum].name}\x1b[0m for \x1b[31m${playerInfo[0].attack}\x1b[0m damage. --- \x1b[35m${enemyInfo[enemyNum].name}'s life:\x1b[0m \x1b[33m${enemyInfo[enemyNum].life}\x1b[0m health points
        \x1b[35m${enemyInfo[enemyNum].name}\x1b[0m have attacked \x1b[92myou\x1b[0m with \x1b[36m${enemyInfo[enemyNum].skill}\x1b[0m for \x1b[31m${enemyInfo[enemyNum].attack}\x1b[0m damage. --- \x1b[92m${playerInfo[0].name}'s life:\x1b[0m \x1b[33m0\x1b[0m health points
      \n\x1b[31m\u2605\u2605\u2605  You have been defeated by ${enemyInfo[enemyNum].name}.  \u2605\u2605\u2605\x1b[0m
      --- GAME OVER ---`;
    }
    if (enemyInfo[enemyNum].life <= 0) {
      enemyInfo[enemyNum].livingStatus = enemyInfo[enemyNum].livingStatus - 1;
      playerInfo[0].life = playerInfo[0].life + enemyInfo[enemyNum].attack;
      playerInfo[0].gold = playerInfo[0].gold + enemyInfo[enemyNum].gold;
      playerInfo[0].exp = playerInfo[0].exp + enemyInfo[enemyNum].exp;
      return `\n\x1b[92mYou\x1b[0m have attacked \x1b[35m${enemyInfo[enemyNum].name}\x1b[0m for \x1b[31m${playerInfo[0].attack}\x1b[0m damage. --- \x1b[35m${enemyInfo[enemyNum].name}'s life:\x1b[0m 0 health points
        \n\x1b[33m\u2605\u2605\u2605  Victory! You have killed ${enemyInfo[enemyNum].name}. You have gained ${enemyInfo[enemyNum].gold} gold and ${enemyInfo[enemyNum].exp} experience. \u2605\u2605\u2605\x1b[0m`;
    } else {
      return `\n\x1b[92mYou\x1b[0m have attacked \x1b[35m${enemyInfo[enemyNum].name}\x1b[0m for \x1b[31m${playerInfo[0].attack}\x1b[0m damage. --- \x1b[35m${enemyInfo[enemyNum].name}'s life:\x1b[0m \x1b[33m${enemyInfo[enemyNum].life}\x1b[0m health points
        \x1b[35m${enemyInfo[enemyNum].name}\x1b[0m have attacked \x1b[92myou\x1b[0m with \x1b[36m${enemyInfo[enemyNum].skill}\x1b[0m for \x1b[31m${enemyInfo[enemyNum].attack}\x1b[0m damage. --- \x1b[92m${playerInfo[0].name}'s life:\x1b[0m \x1b[33m${playerInfo[0].life}\x1b[0m health points\n`;
    }
  } else if (x == 0 && y == -1 && enemyInfo[3].livingStatus == 1) {
    let enemyNum = 3;
    enemyInfo[enemyNum].life = enemyInfo[enemyNum].life - playerInfo[0].attack;
    playerInfo[0].life = playerInfo[0].life - enemyInfo[enemyNum].attack;
    if (playerInfo[0].life <= 0) {
      return `\n\x1b[92mYou\x1b[0m have attacked \x1b[35m${enemyInfo[enemyNum].name}\x1b[0m for \x1b[31m${playerInfo[0].attack}\x1b[0m damage. --- \x1b[35m${enemyInfo[enemyNum].name}'s life:\x1b[0m \x1b[33m${enemyInfo[enemyNum].life}\x1b[0m health points
        \x1b[35m${enemyInfo[enemyNum].name}\x1b[0m have attacked \x1b[92myou\x1b[0m with \x1b[36m${enemyInfo[enemyNum].skill}\x1b[0m for \x1b[31m${enemyInfo[enemyNum].attack}\x1b[0m damage. --- \x1b[92m${playerInfo[0].name}'s life:\x1b[0m \x1b[33m0\x1b[0m health points
      \n\x1b[31m\u2605\u2605\u2605  You have been defeated by ${enemyInfo[enemyNum].name}.  \u2605\u2605\u2605\x1b[0m
      --- GAME OVER ---`;
    }
    if (enemyInfo[enemyNum].life <= 0) {
      enemyInfo[enemyNum].livingStatus = enemyInfo[enemyNum].livingStatus - 1;
      playerInfo[0].life = playerInfo[0].life + enemyInfo[enemyNum].attack;
      playerInfo[0].gold = playerInfo[0].gold + enemyInfo[enemyNum].gold;
      playerInfo[0].exp = playerInfo[0].exp + enemyInfo[enemyNum].exp;
      return `\n\x1b[92mYou\x1b[0m have attacked \x1b[35m${enemyInfo[enemyNum].name}\x1b[0m for \x1b[31m${playerInfo[0].attack}\x1b[0m damage. --- \x1b[35m${enemyInfo[enemyNum].name}'s life:\x1b[0m 0 health points
        \n\x1b[33m\u2605\u2605\u2605  Victory! You have killed ${enemyInfo[enemyNum].name}. You have gained ${enemyInfo[enemyNum].gold} gold and ${enemyInfo[enemyNum].exp} experience. \u2605\u2605\u2605\x1b[0m`;
    } else {
      return `\n\x1b[92mYou\x1b[0m have attacked \x1b[35m${enemyInfo[enemyNum].name}\x1b[0m for \x1b[31m${playerInfo[0].attack}\x1b[0m damage. --- \x1b[35m${enemyInfo[enemyNum].name}'s life:\x1b[0m \x1b[33m${enemyInfo[enemyNum].life}\x1b[0m health points
        \x1b[35m${enemyInfo[enemyNum].name}\x1b[0m have attacked \x1b[92myou\x1b[0m with \x1b[36m${enemyInfo[enemyNum].skill}\x1b[0m for \x1b[31m${enemyInfo[enemyNum].attack}\x1b[0m damage. --- \x1b[92m${playerInfo[0].name}'s life:\x1b[0m \x1b[33m${playerInfo[0].life}\x1b[0m health points\n`;
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
  } else if (x == 1 && y == 0 && enemyInfo[0].livingStatus == 1) {
    return `You see a Zombie. The villagers at the top of their house sigh with relief. 
    The zombie sees you. The zombie chases you. "Arrrrrggghhhh Brrraaaaiiiinssss" the zombie screams.`;
  } else if (x == -1 && y == 0 && enemyInfo[1].livingStatus == 1) {
    return `You see a Wild Boar. It sees you and stopped attacking the villagers. 
    One of the villagers Kayne, shouts to you: "It is slow but hits hard. Give that beast a nice beating"`;
  } else if (x == -0 && y == 1 && enemyInfo[2].livingStatus == 1) {
    return `You see a Wild Spider. You tried to look at it's eyes but you can't. The spider has 8 eyes staring back at you.
      Villagers will be meal soon. You must kill it!"`;
  } else if (x == 0 && y == -1 && enemyInfo[3].livingStatus == 1) {
    return `You see a Mutant Fox. This fox has been a pet of a villager and a lifelong friend of his.
      But dark magic transformed the friendly fox into a fox of darkness. It has eaten several villagers. You know what you must do."`;
  } else if (
    x == -1 &&
    y == -1 &&
    enemyInfo[0].livingStatus == 0 &&
    enemyInfo[1].livingStatus == 0 &&
    enemyInfo[2].livingStatus == 0 &&
    enemyInfo[3].livingStatus == 0 &&
    event[1] == 0
  ) {
    playerInfo[0].maxLife = playerInfo[0].maxLife + 20;
    playerInfo[0].gold = playerInfo[0].gold + 75;
    event[1]++;
    return `Village Elder Ran: "Thank you ${playerInfo[0].name}. You are our village's savior!
    Let me present you a star award. For the Stars are with you."
      You have gained +20 max life.     You're current max life points is now: ${playerInfo[0].maxLife}
      You have gained 85 gold.     You're current gold is now: ${playerInfo[0].gold}`;
  } else if (x == -1 && y == -1 && event[1] == 0) {
    return `There is an old house here. It is sturdy and surrounded by totems. You can feel majestic energy surrounding the house.
    It has a signage saying: "Village Elder Ran's House."`;
  } else {
    return `There is nothing here.`;
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
  Weapon: ${playerInfo[0].weapon}
  Attack: ${playerInfo[0].attack}
  Life: ${playerInfo[0].life}/${playerInfo[0].maxLife}
  Gold: ${playerInfo[0].gold}
  Experience: ${playerInfo[0].exp}`;
}
function help() {
  return `\n\x1b[33mInstructions:\x1b[0m To move, type \x1b[36m/w\x1b[0m North, \x1b[36m/s\x1b[0m South, \x1b[36m/a\x1b[0m West, or \x1b[36m/d\x1b[0m East then press Enter.
  To see info on current location: \x1b[36m/o\x1b[0m or \x1b[36m/observe\x1b[0m *** \x1b[33mRecommendation:\x1b[0m Use \x1b[33m/o\x1b[0m in every tile you go ***
  To see where you are located: \x1b[36m/l\x1b[0m or \x1b[36m/location\x1b[0m
  To attack an enemy: \x1b[36m/k\x1b[0m or \x1b[36m/attack\x1b[0m
    The other things you must learn as you go. For it is by \x1b[31mfire\x1b[0m that \x1b[33mgold\x1b[0m is made.\n`;
}
function askPlayerName() {
  // playerInfo[0].name = rl.question(`What is your name hero?`);
  return `${welcome}`;
}
let cheatTrigger = [0, 0];
function poweroverwhelming() {
  if (cheatTrigger[0] === 0) {
    cheatTrigger[0]++;
    playerInfo[0].maxLife = playerInfo[0].maxLife + 100;
    return `\u2605\u2605\u2605  Cheat activated: Max life +100  \u2605\u2605\u2605       Current Life: ${playerInfo[0].maxLife} health points.`;
  } else {
    return `You cannot use this cheat again.`;
  }
}
function welcome() {
  // texteditor.com
  return `
\x1b[92m▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
█▄▄░▄▄█░██░█▄░▄█▀▄▄▀█░▄▄▀██▄██░▄▄▀█░████▀▀███▄▄░▄▄█░████░▄▄████░▄▄░█░▄▄▀█░▄▀▄░█░▄▄
███░███░██░██░██░██░█░▀▀▄██░▄█░▀▀░█░████▀▀█████░███░▄▄░█░▄▄████░█▀▀█░▀▀░█░█▄█░█░▄▄
███░████▄▄▄██▄███▄▄██▄█▄▄█▄▄▄█▄██▄█▄▄██████████░███▄██▄█▄▄▄████░▀▀▄█▄██▄█▄███▄█▄▄▄
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀\x1b[0m
\x1b[33mWelcome to Tutorial Area!!!\x1b[0m

  \x1b[92mOracle:\x1b[0m You have been summoned to protect the Kingdom of Lumina but have to prove yourself worthy of the power of Hero.
          Go forth Hero. And may the Great Spirit be with you.

You open your eyes and now you are transported to the tutorial area. Your current position is \x1b[33m(0,0)\x1b[0m.

          \x1b[92m\u2605\u2605\u2605\x1b[0m  Type in \x1b[36m/help\x1b[0m to proceed  \x1b[92m\u2605\u2605\u2605\x1b[0m 
            `;
}
function west() {
  x--;
  if (x < -2) {
    x++;
    return `You cannot go there. You are back at \x1b[33m(${x}, ${y})\x1b[0m`;
  } else {
    return `You are located at: \x1b[33m(${x}, ${y})\x1b[0m`;
  }
}
function north() {
  y++;
  if (y > 2) {
    y--;
    return `You cannot go there. You are back at \x1b[33m(${x}, ${y})\x1b[0m`;
  } else {
    return `You are located at: \x1b[33m(${x}, ${y})\x1b[0m`;
  }
}
function south() {
  y--;
  if (y < -2) {
    y++;
    return `You cannot go there. You are back at \x1b[33m(${x}, ${y})\x1b[0m`;
  } else {
    return `You are located at: \x1b[33m(${x}, ${y})\x1b[0m`;
  }
}
function east() {
  x++;
  if (x > 2) {
    x--;
    return `You cannot go there. You are back at "\x1b[33m(${x}, ${y})\x1b[0m`;
  } else {
    return `You are located at: "\x1b[33m(${x}, ${y})\x1b[0m`;
  }
}
function teleport() {
  x = 0;
  y = 0;
  return `\u2605\u2605\u2605  You have used a secret code  \u2605\u2605\u2605        You are back to the origin point. You are now located at: (${x}, ${y})`;
}
function location() {
  return `\x1b[33mYou are located at: (${x}, ${y})\x1b[0m`;
}

app.get("/teleport", (request, response) => {
  response.send(teleport());
});
app.get("/help", (request, response) => {
  response.send(help());
});
app.get("/heal", (request, response) => {
  response.send(heal());
});
app.get("/attack", (request, response) => {
  response.send(attack());
});
app.get("/k", (request, response) => {
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
app.get("/l", (request, response) => {
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
