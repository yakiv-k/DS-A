const validParentheses = function (str) {
    let testArr = str.split("");
    let s = [];
    let refObj = {
        ")": "(",
        "}": "{",
        "]": "["
    };
    for (let i = 0; i < testArr.length; i++) {
        if (!refObj[`${testArr[i]}`]) {
            s.push(testArr[i]);
        }
        else if (refObj[`${testArr[i]}`] !== s[s.length - 1]) {
            s.push(testArr[i]);
        } else if (refObj[`${testArr[i]}`] === s[s.length - 1]) {
            s.pop();
        }
    }
    return s.length < 1 && testArr.length > 1 ? true : false;
};