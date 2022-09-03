import "./nft.css";
import { ethers } from "ethers";

import contract from "../../blockend/abis/CryptowareAssignment.json";

const contractAddress = "0xAA5bce27a684b30d9522ff67783B2460a9017107";

const abi = contract.abi;

const Nft = () => {
  const mintNftHandler = async () => {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const nftContract = new ethers.Contract(contractAddress, abi, signer);

        let nftTxn = await nftContract.mint(1, {
          value: ethers.utils.parseEther("0.01"),
        });

        await nftTxn.wait();
        console.log(`Minted: ${nftTxn}`);
      } else {
        console.log("No Ethereum Object");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="nft">
      <div className="nftpreview">
        <span className="previewtxt">Preview/nft</span>
      </div>
      <div className="nftleft">
        <h1>Nft Data</h1>
        <span>Press The Button to Start Minting..</span>
        <table className="tblnft">
          <tbody>
            <tr>
              <td>
                Price:
                <br /> 100 Eth
              </td>
              <td>
                Available: <br /> 80/100
              </td>
            </tr>

            <tr>
              <td>
                Mints Per Wallet:
                <br /> ...{" "}
              </td>
              <td>(Set Number)</td>
            </tr>
          </tbody>
        </table>
        <button className="btnmint" onClick={mintNftHandler}>
          Mint
        </button>
      </div>
    </div>
  );
};

export default Nft;
