let isPrime = n => {
    if (n <= 3) return false;
    else if ((n % 2 === 0) || (n % 3 === 0)) return false;

    let i = 5;
    while (i * i <= n) {
        if ((n % i === 0) || (n % (i + 2) === 0)) return false;
        i += 6;
    }
    return true;
}

// console.log(isPrime(0));
// console.log(isPrime(1));
// console.log(isPrime(17));
// console.log(isPrime(100000000));


let factorial = n => {
    if (n === 0) return 0;
    else if (n === 1) return 1;
    else return n * factorial(n - 1);
}

// console.log(factorial(0));
// console.log(factorial(1));
// console.log(factorial(6));

let fib = n => {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2)
}

// console.log(fib(0));
// console.log(fib(1));
// console.log(fib(10));
// console.log(fib(20));

let isSorted = n => {
    for (let i = 0; i < n.length; i++) {
        if (n[i - 1] > n[i]) return false;
    }
    return true
}

// console.log(isSorted([]));
// console.log(isSorted([-Infinity, -5, 0, 3, 9]));
// console.log(isSorted([3,9,-3,10]));

let reverse = n => {
    let reversed = "";
    for (let i = n.length - 1; i >= 0; i--) reversed += n[i];
    return reversed;
}

// console.log(reverse(''));
// console.log(reverse('abcdef'));

let indexOf = (arr, elem) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === elem) return i;
    }
    return -1;
}

// console.log(indexOf([1,2,3],1));
// console.log(indexOf([1,2,3],4));

let isPalindrome = str => {
    str = str.toLowerCase().replace(/[^a-z0-9]+/g, '');
    return str === str.split('').reverse().join('');
}

// console.log(isPalindrome(''));
// console.log(isPalindrome('abcdcba'));
// console.log(isPalindrome('abcd'));
// console.log(isPalindrome('a man a plan a canal panama'));

function sortArray(inputAr) {
    var temp;
    for (var i = 0; i < inputAr.length; i++) {
      for (var j = i + 1; j < inputAr.length; j++) {
        if (inputAr[j] < inputAr[i]) {
          temp = inputAr[j];
          inputAr[j] = inputAr[i];
          inputAr[i] = temp;
        }
      }
    }
    return inputAr;
  }

let missing = (arr) => {
    let total = [];
    let A = sortArray(arr);
    for(let i=1; i<Math.max(...arr); i++){
        if ( arr.indexOf(i) === -1) {total.push(i)};
    }
     return total;

}

// console.log(missing([]));
// console.log(missing([1,4,3]));
// console.log(missing([2,3,4]));
// console.log(missing([5,1,4,2]));
//  console.log(missing([6,1,4,2]));

let isBalansed = (str) => {
    if (isBalancedBreckets(str)) return true
    else return false
}

let isBalancedBreckets = (str) => {
    let ch;
    let brackets = new Map();
    brackets.set('}', '{');
    let closingBrackets = [...brackets.keys()];
    let openingBrackets = [...brackets.values()];
    let temp = [];

    for (let i = 0; i < str.length; i++) {
        ch = str[i];

        if (openingBrackets.indexOf(ch) > -1) temp.push(ch);
        else if (closingBrackets.indexOf(ch) > -1) {

            let expectedBracket = brackets.get(ch);
            if (temp.length === 0 || (temp.pop() !== expectedBracket))
                return false;

        } else continue;
    }
    return (temp.length === 0);
}

// console.log(isBalansed('}{')); 
// console.log(isBalansed('{{}')); 
// console.log(isBalansed('{}{}')); 
// console.log(isBalansed('foo { bar { baz } boo}')); 
// console.log(isBalansed('foo { bar { baz}')); 
// console.log(isBalansed('foo { bar } }')); 
