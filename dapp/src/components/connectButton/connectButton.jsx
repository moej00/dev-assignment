import { useEffect } from "react";
import { useState } from "react";
import "./connectButton.css";

const ConnectButton = () => {
  const [currentAccount, setCurrentAccount] = useState(null);

  const clickHandler = async () => {

    if (window.ethereum) {
      console.log("Metamask Detected!");

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        
        setCurrentAccount(accounts[0])

      } catch (err) {
        console.log(err);
      }
    } else {
      alert("In order to connect please install MetaMask!");
    }
  };

  useEffect(()=>{

    const checkWalletIsConnected = async()=>{
      
      if(!window.ethereum){
        alert("Make sure you installed Metamask!");
        return;
      }
      
      const accounts = await window.ethereum.request({method:"eth_accounts"});
      
      if(accounts.length !==0){
        const account = accounts[0];
        setCurrentAccount(account)
      }else{
        console.log("No account found");
      }
    }
    checkWalletIsConnected();
  },[])
    
  return (
    <div>
      {!currentAccount ? (
        <button className="btnConnect" onClick={clickHandler}>
      Connect Wallet
      </button>
    ) : (
      <button className="btnConnected">
      Wallet Connected
      </button>
    )
  }
    </div>
  );
};

export default ConnectButton;
