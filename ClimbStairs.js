const fib = index => {
    let fibSeq = [0, 1];
  
    for (let i = 0; i <= index; i++) {
      if (!fibSeq[i-1] && !fibSeq[i-2]) {
        continue;
      } else {
        fibSeq.push(fibSeq[i - 1] + fibSeq[i - 2]);
      }
    }
    return fibSeq[index];
  }
  
  function climbStairs(num) {
      return fib(num) + fib(num-1)
  }