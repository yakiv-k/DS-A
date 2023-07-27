const searchInsert = function(nums, target) {
    let t;
     for (let i = 0; i < nums.length; i++) {
       if (!nums.includes(target)) {
         nums.push(target);
         t = nums.sort((a,b) => a-b).indexOf(target);
       } else {
         t = nums.indexOf(target);
       }
     }
     return t;
  };