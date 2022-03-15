import Image from 'next/image';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { ethers, BigNumber } from 'ethers';
import contractAbi from '../../utils/json/abi.json';

var Web3 = require('web3')

// config
const contractAddress = '0xc2DE29207C3A129F8909E7306eEEB540685Fc537'; // paste contract address here 
const whitelistMintPrice = '0'; // set default to 40 matic
const publicMintPrice = '0'; // set default to 40 matic 

const Mint = () => {
  const [accounts, setAccounts] = useState([]);
  const [mintAmount, setMintAmount] = useState(1);
  const [isMinting, setIsMinting] = useState(true);
  const [isMintingSuccessful, setIsMintingSuccessful] = useState(false);
  const [errorResponse, setErrorResponse] = useState("");
  const [mintedClosed, setMintedClosed] = useState(false);


  // connecting to metamask
  async function connectMetamask() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts"
      })
      setAccounts(accounts);
    }
  }

  // mint nft 
  async function mintNFT() {
    const tokenIds = [];
    const rawTokenUris = [];

    
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum); // connect to blockchain
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractAbi, signer); // interact with contract using deployed contract address and its abi | set to contractAbi.abi if the abi is not deployed in remix and in server

      try {
        setIsMinting(false)
        if (!contract.onlyWhitelisted) {
          // mint
          const mintResponse = await contract.mint(BigNumber.from(mintAmount), {value: ethers.utils.parseEther(publicMintPrice)})
        } else if (contract.onlyWhitelisted) {
          // mint
          const mintResponse = await contract.mint(BigNumber.from(mintAmount), {value: ethers.utils.parseEther(whitelistMintPrice)})
        } 
        setIsMintingSuccessful(true)
        setTimeout(function(){
          setIsMintingSuccessful(false);
        }, 3000)

      } catch(err) {
        setErrorResponse(err.data.message) ;
        setTimeout(function(){
          setErrorResponse("");
        }, 3000)
      } finally {
        setIsMinting(true);     
        setMintedClosed(false); 
      }
    }
  }

  return (
    <>
      <div className="flex items-center justify-center gap-x-4">

        {/* set mint amount */}
        <div className={`${accounts.length >= 1 ? "flex" : "hidden"}  text-white font-bold`}>
          <button className="h-content" onClick={() => setMintAmount(mintAmount - 1)} disabled = {mintAmount <= 1 || !isMinting ? true : false} >-</button>
          <p className=" ">{mintAmount}</p>
          <button onClick={() => setMintAmount(mintAmount + 1)} disabled = {!isMinting ? true : false}>+</button>
        </div>

        {/* connnect button */}
        <button className={`${accounts.length == 0 ? "block" : "hidden"} hover:bg-gold-300 block px-[24px] py-[12px]  bg-gold-500 rounded-lg font-ReadexPro font-bold text-[16px] block`}
          onClick={(e) => {
            e.preventDefault();
            connectMetamask();
          }}
        >CONNECT
        </button>

        {/* mint button */}
        <button className={`${accounts.length >= 1 ? "block" : "hidden"} ${isMinting ? "hover:bg-gold-300" : ""} px-[24px] py-[12px] bg-gold-500 rounded-lg font-ReadexPro font-bold text-[16px] block`}
          disabled = {!isMinting ? true : false}
          onClick={(e) => {
            e.preventDefault();
            mintNFT();
          }}
        >{!isMinting ? "PROCESSING" : "START MINTING" }
        </button>
      </div>

      {/* mint popup error */}
      <div className={`${errorResponse ? "absolute left-1/2 -translate-x-1/2 mt-4" : "hidden"} font-ReadexPro `}>
        <span className="text-center text-flamingo-700 flex justify-center items-center">err: {errorResponse.toLowerCase()}</span>
      </div>

      {/* mint pop success */}
      <div className={`${isMintingSuccessful ? "absolute left-1/2 -translate-x-1/2 mt-4" : "hidden"} font-ReadexPro `}>
        <span className="text-green-500">Minting succesful, check your minted nft at opensea.io</span>
      </div>
    </>
  )
}


export default Mint;