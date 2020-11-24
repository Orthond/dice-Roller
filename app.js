const dice = {
  d4: 4,
  d6: 6,
  d8: 8,
  d10: 10,
  d12: 12,
  d20: 20,
};
// initialize the dice selector, we will use this to index both our dice objects keys and values
let dSelect = 0;
// diceVal and diceKey are object selector functions for dice
function diceVal(x) {
  let diceType = Object.values(dice)[x];
  return diceType;
}

function diceKey(y) {
  let diceType = Object.keys(dice)[y];
  return diceType;
}
// Roll Math
function roller(max) {
  let tester = Math.floor(Math.random() * max + 1);
  let rollVal = (document.querySelector("#rollVal").textContent = `${tester}`);
}
const rollBtn = document.querySelector("#rollBtn");
const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");
//selects our roll button and calls roller to roll a dice based on the current dice value (dSelect)
rollBtn.onclick = function () {
  roller(diceVal(dSelect));
};
// increments/Decrements the key/value selector by 1 and updates the roll buttons text to accuratley show its current dice key
nextBtn.onclick = function () {
  Select(1);
  rollBtn.textContent = `Roll ${diceKey(dSelect)}`;
};
prevBtn.onclick = function () {
  Select(0);
  rollBtn.textContent = `Roll ${diceKey(dSelect)}`;
};
// failsafe for always displaying the current Dice via the dice key on startup
rollBtn.textContent = `Roll ${diceKey(dSelect)}`;
// the Select function adds a floor and ceiling to the dice selectors
function Select(x) {
  dSelect + x;
  if (x == 1) {
    dSelect++;
  } else {
    dSelect--;
  }
  if (dSelect >= Object.keys(dice).length) {
    dSelect--;
  }
  if (dSelect <= -1) {
    dSelect++;
  }
  console.log(dSelect);
}
