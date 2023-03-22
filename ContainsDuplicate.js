const containsDuplicate = function(nums) {
    let isValid = false;
    let sorted = nums.sort((a,b) => a-b);
    
    for(let i = 0; i < sorted.length; i++) {
      if (sorted[i] === sorted[i+1]) {
        isValid = true;
        break;
      }
    };
    
    return isValid;
};