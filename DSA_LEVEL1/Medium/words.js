function workBreak(s, wordDict) {
  let wordSet = new Set(wordDict);
  let dp = new Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordSet.has(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[s.length];
}
console.log(workBreak("leetcode", ["leet", "code"]));
// console.log(workBreak("leetcode",["leet","code"]));
