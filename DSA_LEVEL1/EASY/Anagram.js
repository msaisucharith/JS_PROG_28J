var groupAnagrams = function (strs) {
  let mp = new Map();
  let ans = [];

  for (const str of strs) {
    const sorted = str.split(" ").sort().join(" ");
    if (mp.has(sorted)) {
      ans[mp.get(sorted)].push(str);
    } else {
      mp.set(sorted, ans.length);
      ans.push([str]);
    }
  }
  return [ans];
};

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
