import express from "express";

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
    id: 100,
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
    name: "Wild Leopard",
    // id: 04,
    attack: 11,
    life: 100,
    livingStatus: 1,
    gold: 50,
    relic: 1,
    exp: 100,
    skill: "Swift Tackle",
  },
  {
    name: "Desert Bee",
    // id: 05,
    attack: 8,
    life: 100,
    livingStatus: 1,
    gold: 50,
    relic: 1,
    exp: 100,
    skill: "Bee Drill Breaker!!!",
  },
  {
    name: "Water Tortoise",
    // id: 06,
    attack: 8,
    life: 100,
    livingStatus: 1,
    gold: 150,
    relic: 1,
    exp: 100,
    skill: "Hydro Blast",
  },
  {
    name: "Seaman",
    // id: 07,
    attack: 12,
    life: 100,
    livingStatus: 1,
    gold: 50,
    relic: 1,
    exp: 100,
    skill: "Trident Throw",
  },
  {
    name: "Iron Giant",
    // id: 08,
    attack: 22,
    life: 200,
    livingStatus: 1,
    gold: 250,
    relic: 1,
    exp: 300,
    skill: "Giant Smash!",
  },
  {
    name: "Water Dragon",
    // id: 09,
    attack: 23,
    life: 190,
    livingStatus: 1,
    gold: 260,
    relic: 1,
    exp: 300,
    skill: "Dragon Blast",
  },
  {
    name: "Tyrant King",
    // id: 10,
    attack: 23,
    life: 190,
    livingStatus: 1,
    gold: 260,
    relic: 1,
    exp: 300,
    skill: "Dark Energy Wave",
  },
];

function attack() {
  if (x == 1 && y == 0 && enemyInfo[0].livingStatus == 1) {
    let enemyNum = 0;
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
  } else if (x == -2 && y == 0 && enemyInfo[4].livingStatus == 1) {
    let enemyNum = 4;
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
  } else if (x == -1 && y == 1 && enemyInfo[5].livingStatus == 1) {
    let enemyNum = 5;
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
  } else if (x == 1 && y == -1 && enemyInfo[6].livingStatus == 1) {
    let enemyNum = 6;
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
  } else if (x == 2 && y == 0 && enemyInfo[7].livingStatus == 1) {
    let enemyNum = 7;
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
  } else if (x == 2 && y == 1 && enemyInfo[8].livingStatus == 1) {
    let enemyNum = 8;
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
  } else if (x == 0 && y == -2 && enemyInfo[9].livingStatus == 1) {
  } else if (x == 0 && y == 2 && enemyInfo[10].livingStatus == 1) {
    let enemyNum = 10;
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
        \n\x1b[33m\u2605\u2605\u2605  Victory! You have killed ${enemyInfo[enemyNum].name}. You have liberated the Kingdom of Lumina \u2605\u2605\u2605\x1b[0m
          --- FIN --- Thank you for playing!`;
    } else {
      return `\n\x1b[92mYou\x1b[0m have attacked \x1b[35m${enemyInfo[enemyNum].name}\x1b[0m for \x1b[31m${playerInfo[0].attack}\x1b[0m damage. --- \x1b[35m${enemyInfo[enemyNum].name}'s life:\x1b[0m \x1b[33m${enemyInfo[enemyNum].life}\x1b[0m health points
        \x1b[35m${enemyInfo[enemyNum].name}\x1b[0m have attacked \x1b[92myou\x1b[0m with \x1b[36m${enemyInfo[enemyNum].skill}\x1b[0m for \x1b[31m${enemyInfo[enemyNum].attack}\x1b[0m damage. --- \x1b[92m${playerInfo[0].name}'s life:\x1b[0m \x1b[33m${playerInfo[0].life}\x1b[0m health points\n`;
    }
  } else {
    return `There is nothing to attack here.`;
  }
}
function buy() {
  if (x == -1 && y == -2 && event[2] == 0) {
    event[2]++;
    return `\nYou have bought flowers from the little girl. She likes you and decides to reveal her secret.
    She reveals to you that she can heal people to full health. Thank you ${playerInfo[0].name}.
    Type /heal to restore your life to full.`;
  } else {
    return `\nThere is nothing to buy here.`;
  }
}
function test() {
  if (x == 2 && y == 2 && event[4] == 0) {
    return `\nPhilosopher Rez: First question. Another name for argument. Hint: The answer is related to functions and coding.
    Type your answer as /answer <-- answer goes here.`;
  }
}
function parameter() {
  if (x == 2 && y == 2 && event[4] == 0) {
    event[4]++;
    return `\nYehey! ${playerInfo[0].name}! You got the question right.
    Philosopher Rez: Second question. It is where you store values in programming.
    Type your answer as /answer <-- answer goes here.`;
  }
}
function variable() {
  if (x == 2 && y == 2 && event[4] == 1) {
    event[4]++;
    return `\nYehey! ${playerInfo[0].name}! You got the question right.
    Philosopher Rez: Third question. What would you first say when you are just born in planet Earth? -Credit to Abneet
    Hint: First thing you console.log in every programming language.
    Type your answer as /answer <-- answer goes here.`;
  }
}
function helloworld() {
  if (x == 2 && y == 2 && event[4] == 2) {
    event[4]++;
    playerInfo[0].weapon = `Maggie's HAMMER`;
    playerInfo[0].attack = 50;
    return `Yehey! ${playerInfo[0].name}! You got the question right.
    Philosopher Rez: You have proven yourself worthy to wield my ancestor's hammer!
    I hand you ${playerInfo[0].weapon}!!!
        You have gained +23 attack damage.     You're current attack damage is now: ${playerInfo[0].attack}`;
  }
}
function observe() {
  if (x == 0 && y == 0) {
    return `\nYou have seen a hungry homeless person. He is asking for 100 gold. You know that a single meal only costs 5 gold.
    You currently have ${playerInfo[0].gold} gold. You can type /give to give your gold.`;
  } else if (x == 1 && y == 1) {
    return `\nYou see the house of the renown healer, Yuna. She has been to make great battle healing the villagers and heroes alike.
    She loves solitude and peace. The house you see is simple but strong. You beautiful little crystals all around her house.
    You realize that those crystals are explosives in disguise. Mess with Yuna and you know you are going in a world of hurt.
      To restore your life points type /heal`;
  } else if (x == 1 && y == 0 && enemyInfo[0].livingStatus == 1) {
    return `\nYou see a Zombie. The villagers at the top of their house sigh with relief. 
    The zombie sees you. The zombie chases you. "Arrrrrggghhhh Brrraaaaiiiinssss" the zombie screams.`;
  } else if (x == -1 && y == 0 && enemyInfo[1].livingStatus == 1) {
    return `\nYou see a Wild Boar. It sees you and stopped attacking the villagers. 
    One of the villagers Kanye, shouts to you: "It is slow but hits hard. Give that beast a nice beating"`;
  } else if (x == 0 && y == 1 && enemyInfo[2].livingStatus == 1) {
    return `\nYou see a Wild Spider. You tried to look at it's eyes but you can't. The spider has 8 eyes staring back at you.
      Villagers will be meal soon. You must kill it!"`;
  } else if (x == 0 && y == -1 && enemyInfo[3].livingStatus == 1) {
    return `\nYou see a Mutant Fox. This fox has been a pet of a villager and a lifelong friend of his.
      But dark magic transformed the friendly fox into a fox of darkness. It has eaten several villagers. You know what you must do.`;
  } else if (x == -2 && y == 0 && enemyInfo[4].livingStatus == 1) {
    return `\nYou see a Wild Leopard. This Leopard is very hungry not able to hunt for days.
    It sees you as a prey. It chases after you.`;
  } else if (x == -1 && y == 1 && enemyInfo[5].livingStatus == 1) {
    return `You see a Desert Bee. It is a giant yellow black stripped Bee with a drill as a tail. 
    It hears your footsteps and you must fight`;
  } else if (x == 1 && y == -1 && enemyInfo[6].livingStatus == 1) {
    return `\nYou see a Water Tortoise. It is sleeping gently. Attacking it will wake it up.
    Turtle meat is now selling for a good price. Killing it will give you wealth.`;
  } else if (x == 2 && y == 0 && enemyInfo[7].livingStatus == 1) {
    return `\nYou see a Seaman. These people belong to a water spear wielding race. Be careful not to get poked.`;
  } else if (x == 2 && y == 1 && enemyInfo[8].livingStatus == 1) {
    return `\nIron Giant walks and the ground shakes. The giant wields a giant sword and a giant shield.
    This enemy is too strong. DO NOT FIGHT!`;
  } else if (x == 0 && y == -2 && enemyInfo[8].livingStatus == 1) {
    return `\nYou see a beautiful jade sculpture of a dragon. The dragon sculpture looks majestic and humongous.
    You marvel at the shine the jade and have decided to touch it. 
    
    The dragon wakes up and stares at you with killing intent. If you do not want to die: PREPARE TO FIGHT!`;
  } else if (x == 2 && y == 2 && event[4] == 0) {
    return `\nThe streets are buzzing. There are merchants selling their goods on the street. Ranging from chickens, pandesals, bankus, and roasted beaver.
    There is a big house right beside the middle of the city that houses the Hammer of the Ancients. It is one of the strongest weapons in the world.
    The house owner is philosopher Rez. He asks worthy adventurers several questions to see if they are worth wielding the hammer. 
    Type \x1b[36m\u2605\u2605\u2605 /talk \u2605\u2605\u2605\x1b[0m to talk to Philosopher Rez.`;
  } else if (x == -1 && y == -2 && event[2] == 0) {
    return `\nA little girl is selling flowers for her sick mother. These flowers are freshly picked from the garden.
    The little girl is selling them for 50g. Type /buy to buy some flowers.`;
  } else if (x == 0 && y == 2) {
    return `\nThis is the castle of the tyrant King. The castle is dark but elegant. The surrounding air is heavy and you are running out of breath. 
    Your fate is in your hands! You must liberate the village and finish this once and for all! Prepare for the FINAL BATTLE!!! `;
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
    return `\nVillage Elder Ran: "Thank you ${playerInfo[0].name}. You are our village's savior!
    Let me present you a star award. For the Stars are with you."
    You have gained +20 max life.     You're current max life points is now: ${playerInfo[0].maxLife}
    You have gained 85 gold.          You're current gold is now: ${playerInfo[0].gold}`;
  } else if (x == -1 && y == -1) {
    return `\nThere is an old house here. It is sturdy and surrounded by totems. You can feel majestic energy surrounding the house.
    It has a signage saying: "Village Elder Ran's House."`;
  } else if (x == 2 && y == -2 && event[0] == 2) {
    playerInfo[0].maxLife = playerInfo[0].maxLife + 10;
    event[0]++;
    return `\nThe sign says "Lady Moon's Bakery Shop." She sells tasty baked goods. You see many kids and other customers enjoying their bread.
    Lady Moon has heard of you helping the homeless man in the village. She gives you one chocolate bread.\n
      You have gained +10 max life.     You're current max life points is now: ${playerInfo[0].maxLife}`;
  } else if (x == 2 && y == -2 && event[0] == 3 && event[1] == 1) {
    playerInfo[0].maxLife = playerInfo[0].maxLife + 120;
    event[0]++;
    event[1]++;
    return `\nThe sign says "Lady Moon's Bakery Shop." She sells tasty baked goods. You see many kids and other customers enjoying their bread.
    Lady Moon has heard of your great deeds towards the villagers. The word of the mighty hero has spread far and wide.
    She has known that you are the legendary hero that all her customers a praising everywhere they go.
    She gives you a dozen of assorted bread for your contribution towards humanity. \n
      You have gained +120 max life.     You're current max life points is now: ${playerInfo[0].maxLife}`;
  } else if (x == 2 && y == -2) {
    return `\nYou come to this place and you smell good food in the air. There is a bakery shop close by.
    The bakery looks like an Asian temple repurposed as bakery. It is surrounded by lanterns with candles inside.
    The sign says "Lady Moon's Bakery Shop." She sells tasty baked goods. You see many kids and other customers enjoying their bread.`;
  } else if (x == -2 && y == 2 && event[5] == 0) {
    return `\nIn a land far, far away....
    The birds are chirping, the winds are gently blowing the trees, there is fruit hanging on every three, and children playing outside.
    You have reached The temple of the Great Spirit. There is a statue of angel Gabriel. Beside the statue, you see a widow asking for bread. 
    You can choose to /give to her so her and her children have something to eat.`;
  } else if (x == -2 && y == 2 && event[5] == 1) {
    return `\nIn a land far, far away....
    The birds are chirping, the winds are gently blowing the trees, there is fruit hanging on every three, and children playing outside.
    You have reached The temple of the Great Spirit. The citizens believe the angels guide those who do good.`;
  } else if (x == 1 && y == 2) {
    return `\n\x1b[36mYou see a Directional Sign Post:\x1b[0m
    \x1b[33m\u21A0\x1b[0m  \x1b[36m-\x1b[0m  Trial for the Hammer of the Ancients
    \x1b[33m\u219E\x1b[0m  \x1b[36m-\x1b[0m  Dungeon of the Final Boss
    \x1b[33m\u21A1\x1b[0m  \x1b[36m-\x1b[0m  Healer Yuna's House\n`;
  } else if (x == 1 && y == -2) {
    return `\n\x1b[36mYou see a Directional Sign Post:\x1b[0m
    \x1b[33m\u21A0\x1b[0m  \x1b[36m-\x1b[0m  Lady Moon's Bakery;
    \x1b[33m\u219E\x1b[0m  \x1b[36m-\x1b[0m  Water Dragon Jade Statue
    \x1b[33m\u219F\x1b[0m  \x1b[36m-\x1b[0m  Water Tortoise Caverns\n`;
  } else if (x == -2 && y == 1) {
    return `\n\x1b[36mYou see a Directional Sign Post:\x1b[0m
    \x1b[33m\u219F\x1b[0m  \x1b[36m-\x1b[0m  Temple of the Great Spirit
    \x1b[33m\u21A1\x1b[0m  \x1b[36m-\x1b[0m  Wild Leopard's Territory
    \x1b[33m\u21A0\x1b[0m  \x1b[36m-\x1b[0m  Wild Desert with honey trap\n`;
  } else if (x == -2 && y == -1) {
    return `\n\x1b[36mYou see a Directional Sign Post:\x1b[0m
    \x1b[33m\u219F\x1b[0m  \x1b[36m-\x1b[0m  Wild Leopard's Territory
    \x1b[33m\u21A0\x1b[0m  \x1b[36m-\x1b[0m  Village Elder Ran's House
    You have also found who is the one making all these Sign Posts. Type \x1b[36m\u2605\u2605\u2605 /talk \u2605\u2605\u2605\x1b[0m to talk to her.\n`;
  } else {
    return `\nThere is nothing here.`;
  }
}
let event = [0, 0, 0, 0, 0, 0];
function give() {
  if (x == 0 && y == 0 && event[0] == 0) {
    playerInfo[0].gold = playerInfo[0].gold - 100;
    event[0]++;
    return `You currently have ${playerInfo[0].gold} gold. He wants to /talk to you.`;
  } else if (x == -2 && y == 2 && event[5] == 0) {
    playerInfo[0].maxLife = playerInfo[0].maxLife + 30;
    playerInfo[0].gold = playerInfo[0].gold - 50;
    event[5]++;
    return `Angel Gabriel looks from the sky and is pleased with your good deeds. You have received his blessings.
      You have gained +30 max life.     You're current max life points is now: ${playerInfo[0].maxLife}`;
  } else {
    return `You cannot give anymore.`;
  }
}
function talk() {
  if (x == 0 && y == 0 && event[0] == 1) {
    playerInfo[0].maxLife = playerInfo[0].maxLife + 10;
    event[0]++;
    return `\nThe homeless man smiles at you. He hasn't eaten for days and has tons of debts to pay. 
    He looks at you and says I cannot pay you back your gold.
    But I have something that might be valuable to you when the time comes.
    If your life is in danger, go to (1,1) to find Yuna, the Healer. She will tend your wounds until you are healthy.
    Thank you adventurer. May the Great Spirit be with you. He smiles gently as he walks away from you.\n
    You have gained +10 max life.     You're current max life points is now: ${playerInfo[0].maxLife}`;
  } else if (x == -2 && y == -1 && event[3] == 0) {
    playerInfo[0].maxLife = playerInfo[0].maxLife + 10;
    event[3]++;
    return `\nLady in a blue dress: Helllllooooooo ${playerInfo[0].name}. Nice to meet you. Now you get to meet who makes these Sign Posts.
    I had a good corporate job before being a Sign Post maker but something inside me says that I have to go and find my own path.
    Now here I am guiding travelers through their lifepath. Thank you for listening to my story. I'll go take my parachute now.\n
    You have gained +10 max life.     You're current max life points is now: ${playerInfo[0].maxLife}`;
  } else if (x == 2 && y == 2 && event[4] == 0 && playerInfo[0].exp >= 0) {
    return `\nPhilosopher Rez: Fellow adventurer, you have proven yourself worthy to take the test to acquire the ancient hammer.
    Answer my questions and riddles and you will own the best hammer in the world. Type \x1b[36m\u2605\u2605\u2605 /test \u2605\u2605\u2605\x1b[0m to take the test.`;
  } else {
    return `There is no one to talk to.`;
  }
}
function heal() {
  if (x == 1 && y == 1) {
    playerInfo[0].life = playerInfo[0].maxLife;
    return `Yuna, the Healer: Hello ${playerInfo[0].name}! Free heals for you!
    Your health has been restored to full.     You're current life points is now: ${playerInfo[0].life}`;
  } else if (x == -1 && y == -2 && event[2] == 1) {
    return `Little girl: Thank you ${playerInfo[0].name}. My mother is now feeling better after I got her the medicine she needs. Free heals for you!
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

\x1b[33mTips on playing the game:\x1b[0m
-------------------------------------------------
1. Every action uses curl. So if you want to move north, the instructions say /w. It means to type out curl localhost:4000/w to go north.
            
2. To prevent typing curls over and over again, press up on your terminal so it displays your previous command. 
            `;
}
function west() {
  x--;
  if (x < -2) {
    x++;
    return `\nYou cannot go there. You are back at \x1b[33m(${x}, ${y})\x1b[0m`;
  } else {
    return `\nMoving West \x1b[36m\u2190\x1b[0m You are located at: \x1b[33m(${x}, ${y})\x1b[0m`;
  }
}
function north() {
  y++;
  if (y > 2) {
    y--;
    return `\nYou cannot go there. You are back at \x1b[33m(${x}, ${y})\x1b[0m`;
  } else {
    return `\nMoving North \x1b[36m\u2191\x1b[0m You are located at: \x1b[33m(${x}, ${y})\x1b[0m`;
  }
}
function south() {
  y--;
  if (y < -2) {
    y++;
    return `\nYou cannot go there. You are back at \x1b[33m(${x}, ${y})\x1b[0m`;
  } else {
    return `\nMoving South \x1b[36m\u2193\x1b[0m You are located at: \x1b[33m(${x}, ${y})\x1b[0m`;
  }
}
function east() {
  x++;
  if (x > 2) {
    x--;
    return `\nYou cannot go there. You are back at \x1b[33m(${x}, ${y})\x1b[0m`;
  } else {
    return `\nMoving East \x1b[36m\u2192\x1b[0m You are located at: \x1b[33m(${x}, ${y})\x1b[0m`;
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

app.get("/buy", (request, response) => {
  response.send(buy());
});
app.get("/teleport", (request, response) => {
  response.send(teleport());
});
app.get("/help", (request, response) => {
  response.send(help());
});
app.get("/test", (request, response) => {
  response.send(test());
});
app.get("/parameter", (request, response) => {
  response.send(parameter());
});
app.get("/variable", (request, response) => {
  response.send(variable());
});
app.get("/helloworld", (request, response) => {
  response.send(helloworld());
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
app.get("/welcome", (request, response) => {
  response.send(welcome());
});
app.get("/", (request, response) => {
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
