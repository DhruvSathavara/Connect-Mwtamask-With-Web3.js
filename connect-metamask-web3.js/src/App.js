import Web3 from 'web3';
import './App.css';
import { useState } from 'react';

function App() {

const [walletAddress,setWalletAddress]=useState("");

  async function requestAccount(){
   // Checking is Metamask is exist?
    if(window.ethereum){
      console.log('detected');

      try{
        const accounts = await window.ethereum.request({
          method:"eth_requestAccounts",
          
        });
        setWalletAddress(accounts)
      }catch(error){
        console.log("there is an error");
      }
    }else{
      console.log('');
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={requestAccount}>Connect Wallet</button>
        <h3>Wallet Address : <br></br>{walletAddress}</h3>
      </header>
    </div>
  );
}

export default App;
