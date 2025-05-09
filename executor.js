const { loadMarket, connection, owner } = require('./solanaClient');
const config = require('./config');
const { OpenOrders } = require('@project-serum/serum');

/**
 * Execute an order on the Serum DEX
 */
async function executeOrder(side, price, size) {
  const market = await loadMarket();

  // Derive the open orders address for this owner
  const [openOrdersAddr] = await OpenOrders.getAddress(
    market.address,
    owner.publicKey,
    market.programId
  );

  const transaction = await market.placeOrder(connection, {
    owner,
    payer: side === 'buy' ? market.baseVault : market.quoteVault,
    side,
    price,
    size,
    orderType: 'limit',
    clientId: new Date().getTime(),
    openOrdersAddressKey: openOrdersAddr,
  });

  console.log(`Order executed: ${side} ${size}@${price}`);
  return transaction;
}

module.exports = { executeOrder };
