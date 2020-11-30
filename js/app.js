const allDice = {
  d4: 4,
  d6: 6,
  d8: 8,
  d10: 10,
  d12: 12,
  d20: 20,
};
// initialize the dice selector, we will use this to index both our dice objects keys and values
let dSelect = 0;
// dAmount is the value of the current roll within the history tab
let dAmount = 1;
// rollNum is the number for roll history, roll no. ,1 roll no. 2 etc.
let rollNum = 0;
// diceVal and diceKey are object selector functions for dice
function diceVal(x) {
  let diceType = Object.values(allDice)[x];
  return diceType;
}

function diceKey(y) {
  let diceType = Object.keys(allDice)[y];
  return diceType;
}
// Roll Math
function roller(max) {
  let rollVal = document.querySelector("#rollVal");
  let tester = Math.floor(Math.random() * max + 1) * dAmount;
  rollVal.classList.remove("card-text");
  rollVal.textContent = `${tester}`;
  void rollVal.offsetWidth;
  rollVal.classList.add("card-text");
  // remove class and add same class back aswell as triggering reflow to re-animate on function call and change text to roll value
  hVal = tester;
  //updates the History Value so we can append the value to our roll history
}
const rollBtn = document.querySelector("#rollBtn");
const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");
//selects our roll button and calls roller to roll a dice

rollBtn.onclick = function () {
  rollNum++;
  udValue(dTotal.value);
  roller(diceVal(dSelect));
  rollHistory(rollNum, diceKey(dSelect), dAmount, hVal);
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
  if (dSelect >= Object.keys(allDice).length) {
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
    dTotal.value = "";
  } else {
    dAmount--;
    dTotal.value = "";
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
function rollHistory(num, dice, amount, total) {
  let hTab = document.querySelector("#hTab");
  let TR = document.createElement("tr");
  let TH = document.createElement("th");
  let number = document.createTextNode(num);
  let TD1 = document.createElement("td");
  let tDice = document.createTextNode(dice);
  let TD2 = document.createElement("td");
  let tAmount = document.createTextNode(amount);
  let TD3 = document.createElement("td");
  let tTotal = document.createTextNode(total);
  hTab.appendChild(TR);
  TH.appendChild(number);
  TR.appendChild(TH);
  TD1.appendChild(tDice);
  TR.appendChild(TD1);
  TD2.appendChild(tAmount);
  TR.appendChild(TD2);
  TD3.appendChild(tTotal);
  TR.appendChild(TD3);
  let testy = hTab.childNodes.item(0);
  if (rollNum > 6) {
    testy.remove();
  }
}
