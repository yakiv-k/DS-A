const twoSum = (arr, targ) => {
    let remainder;
    let indices = [];
      for (let i = 0; i < arr.length; i++) {
        remainder = targ - arr[i];
        if (arr.includes(remainder) && arr.indexOf(remainder) !== i) {
          indices.push(i);
          indices.push(arr.indexOf(remainder));
          break;
        }
      }
    return indices;
  };