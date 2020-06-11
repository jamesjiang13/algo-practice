// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

function change(amount, coins) {
  
  if (amount === 0) return 1;
  let currentCoin = coins[0];
  let ways = 0

  for (let qty = 0; qty * currentCoin <= amount; qty++) {
    ways += change(amount - (qty * currentCoin), coins.slice(1))
  }

  return ways;
};

console.log(change(5, [1,2,5]))