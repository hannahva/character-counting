//return character indexes instead of instances
//ie, "hannah" would return {h:0, 5 a:1,,4, etc etc}




var givenInput = process.argv.slice(2).join(" ");

function letterPosition(input) {

  var result = {};

    for(var i = 0; i < input.length; i++){
      var letter = input[i];
      if (letter === " ") continue;
      if(result[letter] === undefined) result[letter] = [];
      result[letter].push(i);
    }

  return result;
}

console.log(letterPosition(givenInput));