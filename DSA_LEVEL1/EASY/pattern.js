let rows = 5;
let pattern = "";

// outer loop runs for `rows` no. of times
for (let n = 1; n <= rows; n++) {
  for (let num = 1; num <= n; num++) {
    pattern += n;
  }

  // Add a new line character after contents of each line
  pattern = pattern + "\n";
}
console.log(pattern);
