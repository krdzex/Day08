// Only change code below this line
function randomRangeNumber(minNumber, maxNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}
randomRangeNumber(1, 3);
console.log(randomRangeNumber(1, 3));
// Only change code above this line
module.exports = randomRangeNumber;