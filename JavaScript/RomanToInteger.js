var romanToInt = function(s) {
    s.split("");
    let total = 0;
    
    let map = { "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000 };
    
    for (let i = 0; i < s.length; i++) {
      if (map[s[i]] < map[s[i+1]]) {
        total -= map[s[i]];
      } else {
        total += map[s[i]]
      }
    }
  return total
};