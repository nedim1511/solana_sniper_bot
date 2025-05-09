# Solana Trading Bot

A lightweight, modular trading bot for the Solana blockchain, designed to execute limit orders on the Serum DEX using a simple moving-average crossover strategy.

## 🚀 Features

- **Automated SMA Strategy**: Buy/Sell signals based on configurable Simple Moving Average (SMA) crossover.
- **Serum DEX Execution**: Seamless limit order placement via the Serum program.
- **Configurable**: Easily adjust RPC endpoint, market addresses, trade size, and SMA window.
- **Modular Architecture**: Separate modules for client setup, strategy, execution, and configuration.
- **Extensible**: Plug in additional strategies, risk controls, or alerting systems.

## 🛠️ Prerequisites

- **Node.js** v14 or higher
- **npm** or **yarn**
- A funded Solana wallet (private key in HEX format)
- Serum market program ID and market address

## 📥 Installation

```bash
# Clone this repository
git clone https://github.com/yourusername/solana-trading-bot.git
cd solana-trading-bot

# Install dependencies
npm install
# or
# yarn install

