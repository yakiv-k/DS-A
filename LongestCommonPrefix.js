const longestCommonPrefix = function (strs) {
    let commonPrefix = "";

    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 0; j < strs.length; j++) {
            if (strs[0][i] === strs[j][i] && j === strs.length-1) {
                commonPrefix += strs[0][i];
                
            } else if(strs[0][i] !== strs[j][i]) {
                return commonPrefix;
            }
        }
    }
    return commonPrefix;
};