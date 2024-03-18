//import { LAMPORTS_PER_SOL, PublicKey, Connection, clusterApiUrl } from '../node_modules/@solana/web3.js';

const fetchBalances = async () => {
  // Create a connection to the blockchain
  const connection = new Connection(clusterApiUrl('mainnet-beta'))
  
  // The address you want to get the balance of
  const address = document.getElementById("wallet-address").textContent
  const publicKey = new PublicKey(address)
  
  // Get the Solana balance
  const balance = await connection.getBalance(publicKey);

  // Return the balance in the right units
  return balance / LAMPORTS_PER_SOL;
};

function saveWallet(publicKey) {
  // Check if the browser supports local storage
  if (typeof(Storage) !== "undefined") {
    // Save the wallet address in local storage
    localStorage.setItem("wallet-address", publicKey);
    //phantomWalletPublicKey = publicKey;
    console.log("Wallet address saved successfully");
  } else {
    console.error("Local storage is not supported in this browser");
  }
}

// const { Connection, PublicKey } = require("@solana/web3.js");

// async function connectWallet() {
//   try {
//     const connection = new Connection("https://api.mainnet-beta.solana.com");
//     const wallet = window.solana;
//     await wallet.connect();
//     const publicKey = new PublicKey(wallet.publicKey.toString());

//     // Save the wallet information on your website (you can customize this part)
//     saveWallet(publicKey);

//     console.log("Connected to Phantom wallet");
//     document.getElementById("wallet-address").textContent = publicKey.toString();
//   } catch (error) {
//     console.error("Failed to connect to Phantom wallet", error);
//   }
// }

async function connectWallet() {
  try {
    const resp = await window.solana.connect();
    const publicKey = resp.publicKey.toString();

    // Save the wallet information on your website (you can customize this part)
    saveWallet(publicKey);

    console.log("Connected to Phantom wallet");

    // Display a popup window with the "Connect Success" message and the wallet address
    const popupMessage = `Connect Success!\nWallet Address: ${publicKey}`;
    // window.alert(popupMessage);

    document.getElementById("wallet-address").textContent = publicKey;
    // Get the wallet address and do something with it
    //getWalletAddress(publicKey);
  } catch (error) {
    console.error("Failed to connect to Phantom wallet", error);
  }
}

async function getTokenBalance(walletAddress, tokenMintAddress, rpcEndpoint, web3connection, publicKey) {
  const connection = new Connection('https://api.mainnet-beta.solana.com', 'confirmed');

  // Create the token mint address
  const mintPublicKey = publicKey(tokenMintAddress);

  // Create the wallet address
  const walletPublicKey = publicKey(walletAddress);

  // Get the token account of the wallet
  const tokenAccount = await connection.getTokenAccountBalance(walletPublicKey, mintPublicKey);

  // Extract the balance from the token account
  const balance = tokenAccount.value.uiAmount;
  console.log(balance);

  return balance;
}
async function checkTokenBalance(){
  const web3connection = new Connection();
  const publicKey = new PublicKey();
    const walletAddress = document.getElementById("wallet-address").textContent;
    const tokenMintAddress = 'So11111111111111111111111111111111111111112';
    const rpcEndpoint = 'https://api.mainnet-beta.solana.com';
    //console.log("wallet-address", walletAddress);
    if (fetchBalances()){
      window.alert("you have 1 sol");
    }
    else{
      window.alert("no sol");
    }
}
async function checkBalance() {
  const publicKey = document.getElementById('wallet-address').textContent;

  const connection = new web3.Connection(
    'https://api.mainnet-beta.solana.com'
  );

  try {
    const balance = await connection.getBalance(
      new web3.PublicKey(publicKey)
    );

    // Check if the balance is equal to or greater than 1 SOL
    const hasOneSol = balance >= 1000000000;

    document.getElementById('balance').textContent = hasOneSol
      ? console.log('Has at least 1 SOL')
      : console.log('Has less 1 SOL');
  } catch (error) {
    console.error('Error:', error);
    document.getElementById('balance').textContent = 'Error occurred';
  }
}



// Disconnect the wallet
async function disconnectWallet() {
  // Replace this with your own logic to disconnect the wallet
  // For example, clear the wallet information from the global variable or perform any necessary cleanup

  // Clear the stored public key
  phantomWalletPublicKey = null;

  await window.solana.disconnect();
  const popupMessage = `Disconnect Success!\n`;

  // window.alert(popupMessage);

  console.log("Disconnected from the wallet");
  document.getElementById("wallet-address").textContent = "";
}

// Add event listener to the disconnect button
document.getElementById("disconnect-button").addEventListener("click", disconnectWallet);

// Add event listener to the connect button
document.getElementById("connect-button").addEventListener("click", connectWallet);
document.getElementById("airdrop-button").addEventListener("click", checkAccount);
