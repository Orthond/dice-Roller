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
let dAmount = 1;
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
  let tester = Math.floor(Math.random() * max + 1) * dAmount;
  let rollVal = (document.querySelector("#rollVal").textContent = `${tester}`);
}
const rollBtn = document.querySelector("#rollBtn");
const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");
//selects our roll button and calls roller to roll a dice
rollBtn.onclick = function () {
  udValue(dTotal.value);
  roller(diceVal(dSelect));
};

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
// the Select function adds a floor and ceiling to the dice selectors contains logic for incrementing or decrementing total
function Select(x) {
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
const dPlus = document.querySelector("#dPlus");
const dMinus = document.querySelector("#dMinus");
const dTotal = document.querySelector("#dTotal");
dPlus.onclick = function () {
  Amount(1);
  dTotal.placeholder = dAmount;
};

dMinus.onclick = function () {
  Amount(0);
  dTotal.placeholder = dAmount;
};
//Floor and Ceiling to the Amount of dice you can roll at any given time, logic for incrementing and decrementing total
function Amount(x) {
  if (x == 1) {
    dAmount++;
  } else {
    dAmount--;
  }
  if (dAmount >= 21) {
    dAmount--;
  }
  if (dAmount < 1) {
    dAmount++;
  }

  console.log(dAmount);
}
// checks value of user dice amount input if it's an integer update the dAmount value so the roller will roll the correct amount of dice
function udValue(x) {
  if (Number.isInteger(parseInt(x))) {
    dAmount = x;
  } else {
    dAmount = dAmount;
  }
  console.log(x);
}
