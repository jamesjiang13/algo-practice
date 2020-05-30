// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

var change = function(amount, coins) {
  
  if (amount === 0) return 1;
  let ways = [];
  coins.forEach((coin) => {
    if (coin <= amount) {
      ways.push(change(amount - coin, coins) + 1);
    }
  })
  return ways;
};

return change(5, [1,2,5])