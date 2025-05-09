const { Connection, Keypair, PublicKey } = require('@solana/web3.js');
const { Market } = require('@project-serum/serum');
const config = require('./config');

const connection = new Connection(config.RPC_ENDPOINT, 'confirmed');
const owner = Keypair.fromSecretKey(Buffer.from(config.PRIVATE_KEY, 'hex'));

/**
 * Load the Serum market
 */
async function loadMarket() {
  return await Market.load(
    connection,
    new PublicKey(config.SERUM_MARKET_ADDRESS),
    {},
    new PublicKey(config.SERUM_PROGRAM_ID)
  );
}

module.exports = { connection, owner, loadMarket };
