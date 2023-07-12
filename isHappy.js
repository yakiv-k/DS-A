var isHappy = function(n) {
    let sum;
    
    if (n < 0) { return false };
  
    const seen = new Set();
  
    while (sum != 1) {
      let strArr = n.toString().split("");
      let numArr = strArr.map(char => Number(char));
  
      for (let i = 0; i < numArr.length; i++) {
        if (i == 0) {
          sum = numArr[i] * numArr[i]
        } else {
          sum += numArr[i] * numArr[i]
        }
      }
      if (seen.has(sum)) {
        return false
      }
      seen.add(sum);
      n = sum
    }
    return true
  };