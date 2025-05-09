module.exports = {
  RPC_ENDPOINT: process.env.RPC_ENDPOINT || 'https://api.mainnet-beta.solana.com',
  SERUM_PROGRAM_ID: process.env.SERUM_PROGRAM_ID || '9xQeWvG816bUx9EPBjFHGx9NWXvQ1nX1eQpV7ZzYCw4V',
  SERUM_MARKET_ADDRESS: process.env.SERUM_MARKET_ADDRESS || 'ENTER_SERUM_MARKET_ADDRESS',
  PRIVATE_KEY: process.env.PRIVATE_KEY || 'ENTER_PRIVATE_KEY_IN_HEX',
  TRADE_QUANTITY: parseFloat(process.env.TRADE_QUANTITY) || 1.0,
  MOVING_AVERAGE_WINDOW: parseInt(process.env.MOVING_AVERAGE_WINDOW, 10) || 20,
};
