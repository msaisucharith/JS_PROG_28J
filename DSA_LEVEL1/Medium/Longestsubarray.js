var lengthOfLongestSubstring = function (s) {
  let longest = 0;
  let set = new Set();

  let left = 0;
  let right = 0;

  while (right < s.length) {
    if (!set.has(s[right])) {
      set.add(s[right]);
      longest = Math.max(longest, set.size);
      right++;
    } else {
      set.delete(s[left]);
      left++;
    }
  }

  return longest;
};
