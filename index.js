const { connection, loadMarket } = require('./solanaClient');
const config = require('./config');
const { generateSignal } = require('./strategy');
const { executeOrder } = require('./executor');

(async () => {
  // Fetch the order book to compute a mid price
  const market = await loadMarket();
  const bids = await market.loadBids(connection);
  const asks = await market.loadAsks(connection);

  const bestBid = bids.getL2(1)[0][0];
  const bestAsk = asks.getL2(1)[0][0];
  const midPrice = (bestBid + bestAsk) / 2;

  // Maintain a simple in-memory price history
  global.prices = global.prices || [];
  global.prices.push(midPrice);

  const signal = generateSignal(global.prices, config.MOVING_AVERAGE_WINDOW);
  console.log(`Mid price: ${midPrice}, Signal: ${signal}`);

  if (signal === 'BUY' || signal === 'SELL') {
    await executeOrder(signal.toLowerCase(), midPrice, config.TRADE_QUANTITY);
  } else {
    console.log('No trade executed.');
  }

  process.exit(0);
})();
