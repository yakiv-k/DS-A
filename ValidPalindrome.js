var isPalindrome = function(s) {
    const r = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
      let i = 0;
      let j = r.length-1;
      
      while (i < j) {
        if (r[i] !== r[j]) {
          return false;
        }
        i++;
        j--;
      }
      return true;
    };