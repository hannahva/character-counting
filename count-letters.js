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