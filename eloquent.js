//1. MINIMUM

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10


//2. RECURSION

function isEven(n) {
  if (n == 0) {
    return true;
  } else if (n == 1) {
    return false;
  } else {
    return isEven(Math.abs(n) - 2);
  }
}

console.log(isEven(40));
// → true
console.log(isEven(-5));
// → false
console.log(isEven(-12));
// → ??


//3. BEAN COUNTING

function countBs(string) {
  let count = 0;
  for(let n = 0; n < string.length; n++) {
    if (string[n] === 'B') {
      count++;
  	}
  }
  return count;
}

function countChar(string, letter) {
  let count = 0;
  for(let n = 0; n < string.length; n++) {
    if (string[n] === letter) {
      count++;
  	}
  }
  return count;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4