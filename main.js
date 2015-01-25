console.log("This works");


/**
 * PART 1
 *
 * Write a JavaScript program that takes two numbers as
 parameters and computes the sum of those two numbers
 *
 * For example, if the user input 3 and 6, then the answer would be: "9 (3+6)".
 */

var sum = function(a, b) {
    return a + b;
}
console.log(sum(8, 11));

// =======================================================================

/**
 * PART 2
 *
 * Write a JavaScript program that calculates the average time for this marathoner to complete the full marathon (26.2mi)
 */

var runner1  = {
    finishingTime1: 240, //in minutes
    finishingTime2: 210.4,
    finishingTime3: 235.1,
    finishingTime4: 208.9,
    finishingTime5: 197.5,

	}
    
var runner1add = (runner1.finishingTime1 + runner1.finishingTime2 + runner1.finishingTime3 + runner1.finishingTime4 + runner1.finishingTime5);
	
var getAverageTime_runner1 = runner1add / 5;

console.log(getAverageTime_runner1.toFixed(2));

var runner2 = {
    finishingTime1: 120, //in minutes
    finishingTime2: 110.4,
    finishingTime3: 135.1,
    finishingTime4: 108.9,
    finishingTime5: 97.5
};

var runner2add = (runner2.finishingTime1 + runner2.finishingTime2 + runner2.finishingTime3 + runner2.finishingTime4 + runner2.finishingTime5);

var getAverageTime_runner2 = runner2add / 5;
 
console.log(getAverageTime_runner2.toFixed(2));

// =======================================================================

