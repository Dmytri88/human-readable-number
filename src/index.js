var numbInOrder = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
    100: "hundred"
};


module.exports = function toReadable(number) {
    if (number === 0) {
        return numbInOrder[number];
    }
    var result = "";

    var hundred = Math.floor(number / 100);
    if (hundred > 0) {
        result += numbInOrder[hundred] + " " + numbInOrder[100];
    };
    var tens = number % 100;
    if (tens === 0) {
        return result;
    }
    if (result) {
        result += " ";
    }
    if (tens < 20) {
        result += numbInOrder[tens];
    } else {
        var ones = tens % 10;
        result += numbInOrder[tens - ones];
        if (ones > 0) {
            result += " " + numbInOrder[ones];
        }
    };
    return result;
}
