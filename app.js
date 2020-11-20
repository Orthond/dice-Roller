const dice = {
    d4 : 4,
    d6 : 6,
    d8 : 8,
    d10 : 10,
    d12: 12,
    d20: 20
}
let dSelect = 0;
// initialize the dice selector, we will use this to index both our dice objects keys and values
function diceVal(x){
    let diceType = (Object.values(dice)[x]);
    return diceType
}

function diceKey(y){
    let diceType = (Object.keys(dice)[y]);
    return diceType
}
// diceVal and diceKey are object selector functions for dice
function roller(max){
    let tester = (Math.floor(Math.random() * (max) + 1));
    let rollVal = document.querySelector("#rollVal").textContent = `${tester}`;
}
document.querySelector("#testBtn").onclick = function() {roller(diceVal(dSelect))};
// selects our roll button and calls roller to roll a dice based on the current dice value
document.querySelector("#nextBtn").onclick = function() {
    dSelect++;
    document.querySelector("#testBtn").textContent = `Roll ${diceKey(dSelect)}`;
}
document.querySelector("#prevBtn").onclick = function() {
    dSelect--;
    document.querySelector("#testBtn").textContent = `Roll ${diceKey(dSelect)}`;
}
// increments/Decrements the key/value selector by 1 and updates the roll buttons text to accuratley show its current dice key 
document.querySelector("#testBtn").textContent = `Roll ${diceKey(dSelect)}`;
// failsafe for always displaying the current Dice via the dice key on startup