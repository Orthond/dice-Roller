const diceType = {
    d4 : 4,
    d6 : 6,
    d8 : 8,
    d10 : 10,
    d12: 12,
    d20: 20
}
function roller(max){
    return Math.floor(Math.random() * (max) + 1)
}