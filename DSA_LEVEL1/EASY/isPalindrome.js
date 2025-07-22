function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !isAlaphanum(s[left])) left++;
    while (left < right && !isAlaphanum(s[right])) right--;
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

function isAlaphanum(c) {
  return /^[a-z0-9]$/i.test(c);
}

let s = "";
console.log(isPalindrome(s));
