const lengthOfLastWord = function(s) {
    s = s.split(" ").filter(word => word !== "");
      return s[s.length-1].length;
  };