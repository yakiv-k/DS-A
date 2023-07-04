const prev = function(nums) {
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

// Updated solution using hashing:

const containsDuplicate = function(nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map.hasOwnProperty(nums[i])) {
      return true
    } else {
      map[nums[i]] = i;
    }
  }
  return false
};