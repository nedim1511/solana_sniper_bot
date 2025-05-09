# Solana Trading Bot

A lightweight, modular trading bot for the Solana blockchain, designed to execute limit orders on the Serum DEX using a simple moving-average crossover strategy.

## 🚀 Features

* **Automated SMA Strategy**: Buy/Sell signals based on configurable Simple Moving Average (SMA) crossover.
* **Serum DEX Execution**: Seamless limit order placement via the Serum program.
* **Configurable**: Easily adjust RPC endpoint, market addresses, trade size, and SMA window.
* **Modular Architecture**: Separate modules for client setup, strategy, execution, and configuration.
* **Extensible**: Plug in additional strategies, risk controls, or alerting systems.

## 🛠️ Prerequisites

* **Node.js** v14 or higher
* **npm** or **yarn**
* A funded Solana wallet (private key in HEX format)
* Serum market program ID and market address

## 📥 Installation

```bash
# Clone this repository
git clone https://github.com/yourusername/solana-trading-bot.git
cd solana-trading-bot

# Install dependencies
npm install
# or
# yarn install
```

## ⚙️ Configuration

Copy `config.js.example` to `config.js` and fill in your details:

```js
module.exports = {
  RPC_ENDPOINT: 'https://api.mainnet-beta.solana.com',
  SERUM_PROGRAM_ID: '9xQeWvG816bUx9EPBjFHGx9NWXvQ1nX1eQpV7ZzYCw4V',
  SERUM_MARKET_ADDRESS: 'ENTER_SERUM_MARKET_ADDRESS',
  PRIVATE_KEY: 'ENTER_PRIVATE_KEY_IN_HEX',
  TRADE_QUANTITY: 1.0,
  MOVING_AVERAGE_WINDOW: 20,
};
```

## ▶️ Usage

```bash
# Run the bot (fetches price, generates signal, executes trade, then exits)
node index.js
```

For continuous trading, integrate with a scheduler (cron, PM2, etc.) or wrap in a loop with delays.

## 📈 Strategy

The bot computes a mid-market price from the best bid/ask and maintains an in-memory history. It then calculates the SMA over the last N prices and:

* **BUY** if price > SMA
* **SELL** if price < SMA
* **HOLD** otherwise

Customize or add additional indicators in `strategy.js`.

## 🤝 Contributing

Contributions are welcome! Please open issues or pull requests for features, improvements, or bug fixes.

## 📄 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

## 🔗 Backlink

**Powered by** [Solana Sniper](https://solsniper.com) — the leading **Solana sniper** platform for lightning-fast on-chain trading. Check out Solana Sniper to supercharge your trading strategies and stay ahead in the Solana ecosystem!
