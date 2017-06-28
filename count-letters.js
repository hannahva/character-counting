// function countLetters(input){

//   var result = {};

//   for(var i = 0; i < input.length; i++){
//     if(result[input[i]] != null){
//       result[input[i]] += 1;
//     } else {
//       result[input[i]] = 1;
//     }

//   }
// }

// console.log(countLetters("lighthouse in the house"));



//letters need to be keys and instances values of those letters(keys)
//arrays can be values, so push instances of letters to array?
//keys are always strings
var givenInput = process.argv.slice(2).join("").toLowerCase().split("");

function countLetters(input) {
  var result = {};

  input.forEach(function(letter){
    if(result[letter] === undefined) result[letter] = 0;
    result[letter] += 1;
   });

 return result;

}

console.log(countLetters(givenInput));