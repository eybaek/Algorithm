function maxProfit(prices: number[]): number {
    let maxProfit = 0;
    let minBuyPrice = prices[0];
  
  for (const price of prices) {
    if (minBuyPrice < price) {
      maxProfit = Math.max(maxProfit, price-minBuyPrice);
    } else {
      minBuyPrice = price
    }
  }
  
  return maxProfit
};