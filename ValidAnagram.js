const isAnagram = function(s, t) {
    let isValid = true;
    let arr = s.split("").sort();
    let arr2 = t.split("").sort();
    
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr2[i]) {
          isValid = false;
          break;
        }
      }
    return arr.length === t.split("").length ? isValid : false;
  };