var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let so = {};
  let to = {};

  for (let i = 0; i < s.length; i++) {
    if (!so[s[i]]) {
      so[s[i]] = 1;
    } else {
      so[s[i]] = so[s[i]] + 1;
    }
  }
  for (let j = 0; j < t.length; j++) {
    if (!to[t[j]]) {
      to[t[j]] = 1;
    } else {
      to[t[j]] = to[t[j]] + 1;
    }
  }

  const keyss = Object.keys(so);
  const keyst = Object.keys(to);

  for (let key of keyss) {
    if (so[key] !== to[key]) {
      return false;
    }
  }

  return true;
};

let s = "aacc";
let t = "ccac";

console.log(isAnagram(s, t));
