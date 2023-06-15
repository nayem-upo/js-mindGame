// Problem 1: mind game

function mindGame(input){
    const multiplication = input *3;
    const addition = multiplication + 10;
    const division = addition/2;
    const subtraction = division-5;

    return subtraction;
}
// console.log(mindGame());

// input should be a number!



// Problem 2: Finding even or odd

let input = "" ;
function evenOdd(input){
    if(input.length % 2 == 0){
        console.log("even")
    }
    else(
        console.log("odd")
    )
    return evenOdd;
}
// evenOdd(input)
// input should be a string!




// Problem 3: Is Less or Greater than seven

function isLGSeven(input){
    let subtraction = input -7;
    if(subtraction<7){
        console.log(subtraction)
    }
    else if (subtraction>=7){
        let doubleOfTheir = subtraction *2;
        console.log(doubleOfTheir)
    }
}
// isLGSeven()
// input should be number!



// Problem 4: Finding Bad data

let numbers = [];
function findingBadData(input) {
  let badData = [];
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    if (number < 0) {
      badData.push(number);
    } else if (number >= 0) {
    }
  }
//   console.log(badData.length);
}
// findingBadData(numbers);
// input should be numbers with arry!




//Problem 5: Convert your gems into diamond

function gemsToDiamond(firstFriendGems1, secondFriendGems2, thirdFriendGems3){
    let firstFriend = 21*firstFriendGems1;
    let secondFriend = 32*secondFriendGems2;
    let thirdFriend = 43*thirdFriendGems3;

    const totalDiamond = firstFriend + secondFriend + thirdFriend;

        if(2000<=totalDiamond){
            let restDiamond = totalDiamond-2000;
            console.log(restDiamond)
        }
        // else(console.log(totalDiamond))
}
//  gemsToDiamond(, , )
//  input should be numbers!