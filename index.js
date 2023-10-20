function isPalindrome() {
  // write a function isPalindrome, then write an if statement checking if the word is a palindorme, then test to see if the code is working correctly
 let word = 'racecar'
let drow = word.split('').reverse().join('')
  if (word === drow){
    return true
  }
  else{
    return false
  }
}
console.log(isPalindrome())


/* 
  write a function isPalindrome
  create a variable word and assign it a word
  create a method that writes the word backwards
  return the function and check whether or not it is a function
*/



// You can run `node index.js` to view these console logs
/*if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
*/