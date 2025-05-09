/**
 * Simple moving average crossover strategy
 */
function calculateSMA(prices, window) {
  if (prices.length < window) return null;
  const sum = prices.slice(-window).reduce((a, b) => a + b, 0);
  return sum / window;
}

function generateSignal(prices, window) {
  const sma = calculateSMA(prices, window);
  if (sma === null) return 'HOLD';
  const lastPrice = prices[prices.length - 1];
  if (lastPrice > sma) return 'BUY';
  if (lastPrice < sma) return 'SELL';
  return 'HOLD';
}

module.exports = { calculateSMA, generateSignal };
