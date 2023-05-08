var topKFrequent = function(nums, k) {
    let map = {};

    for (let i = 0; i < nums.length; i++) {
        if (!(nums[i] in map)) {
            map[`${nums[i]}`] = 1;
        } 
        else {
            map[`${nums[i]}`]++;
        }
    }

    let result = Object.keys(map).map((key) => [key, map[key]]);
    result.sort((a,b) => a[1] - b[1]);
    let sorted = result.slice(result.length-k, result.length);

    return sorted.map((item) => item[0]);
        
};