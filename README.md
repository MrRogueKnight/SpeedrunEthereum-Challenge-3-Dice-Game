# 🎲 Challenge 3 – Dice Game | SpeedRunEthereum

This is my completed submission for **Challenge 3** of [SpeedRunEthereum](https://speedrunethereum.com).  
The objective: **exploit predictable randomness** in a dice game by building a smart contract (`RiggedRoll`) that only plays when it’s guaranteed to win.

---

## 🚀 Live App & Submission Info

- **Frontend (Vercel):**  
  🌐 [challenge-3-dice-game-tau.vercel.app](https://challenge-3-dice-game-tau.vercel.app/)

- **DiceGame Contract:**  
  [`0x9e996e414Db3667Dc8bf4EB03234441c9820A82E`](https://sepolia.etherscan.io/address/0x9e996e414Db3667Dc8bf4EB03234441c9820A82E)

- **RiggedRoll Contract:**  
  [`0x6a7072F9D0C84622b72af6bb37fD2d7e5025707B`](https://sepolia.etherscan.io/address/0x6a7072F9D0C84622b72af6bb37fD2d7e5025707B)

- **Owner Address:**  
  `0x58ad103D0C0E69250CaC89Ddf0BDaD396914C411`

- ✅ Submission URL:  
  [https://speedrunethereum.com/builders/0x58ad103D0C0E69250CaC89Ddf0BDaD396914C411](https://speedrunethereum.com/builders/0x58ad103D0C0E69250CaC89Ddf0BDaD396914C411)

---

## ✅ Final Submission Checklist

| Item                                            | Status                                                                                              |
| ----------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| **DiceGame Verified**                           | ✔️ [View on Etherscan](https://sepolia.etherscan.io/address/0x9e996e414Db3667Dc8bf4EB03234441c9820A82E) |
| **RiggedRoll Verified**                         | ✔️ [View on Etherscan](https://sepolia.etherscan.io/address/0x6a7072F9D0C84622b72af6bb37fD2d7e5025707B) |
| **Ownership Transferred**                       | ✔️ `0x58ad103D0C0E69250CaC89Ddf0BDaD396914C411`                                                     |
| **Frontend Targeting Sepolia**                  | ✔️ `scaffold.config.ts` uses `chains.sepolia`                                                       |
| **Frontend Live on Vercel**                     | ✔️ [challenge-3-dice-game-tau.vercel.app](https://challenge-3-dice-game-tau.vercel.app/)            |
| **RiggedRoll Balance Withdrawable by You Only** | ✔️ `onlyOwner` check on `withdraw()`                                                                |
| **UI Shows Rigged Roll Button & Contract Info** | ✔️ Fully implemented and functional                                                                 |

---

## 🧠 What This Challenge Teaches

- ❌ Why using `blockhash(block.number - 1)` is insecure
- ✅ How to reproduce a contract’s randomness off-chain
- 🧠 Why strong randomness (e.g., Chainlink VRF) matters
- 🔐 Best practices like `onlyOwner`, `receive()`, and `revert()` patterns
- 🧪 Writing exploit contracts + test-driven development using Hardhat

---

## 📂 Tech Stack

- **Solidity**
- **Hardhat**
- **Ethers.js**
- **TypeScript**
- **Scaffold-ETH 2**
- **Vercel (Frontend Hosting)**

---

## 🏁 Status

- ✅ All test cases pass
- ✅ Contracts verified
- ✅ Frontend deployed to Vercel
- ✅ Exploit works reliably
- ✅ Ready for SpeedRunEthereum submission

---

## 🧑‍💻 Author

**Builder Profile:**  
[https://speedrunethereum.com/builders/0x58ad103D0C0E69250CaC89Ddf0BDaD396914C411](https://speedrunethereum.com/builders/0x58ad103D0C0E69250CaC89Ddf0BDaD396914C411)
