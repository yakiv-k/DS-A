const isPalindrome = function (num) {
    let numArr = num.toString().split("");
        let count = 0;
    
        for (let i = 0; i < numArr.length; i++) {
            if (numArr[i] === numArr.reverse()[i] && count < 1) {
            } else if (numArr[i] !== numArr.reverse()[i]) {
                count += 1;
            }
        }
        return count < 1 ? true : false;
    };