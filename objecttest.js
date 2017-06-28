// var input = process.argv.splice(2);
function countLetters(input){
var letters = input.reduce(function (acc, curr) {
  if (typeof acc[curr] == 'undefined') {
    acc[curr] = 1;
  } else {
    acc[curr] += 1;
  }

  return acc;
}, {});
}
countLetters("lighthouse in the house")