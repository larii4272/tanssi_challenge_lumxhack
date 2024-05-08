"use client";

import { useState, useEffect, use } from "react";

import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { IntegerInput } from "~~/components/scaffold-eth";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth/useScaffoldReadContract";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth/useScaffoldWriteContract";
import { readJson } from "../../services/util.js";
import { formatEther } from 'viem'

const OlyCrypto: NextPage = () => {
  const { address: connectedAddress } = useAccount();
  const account = useAccount();

  const smartContractName= "OlyCrypto";

  const tokenIdParameter = localStorage.getItem("tokenIdBefore") || 'undefined';

  const showTokenId = false;

  const [tokensAvailable, setTokensAvailable] = useState<{tokenId: any; name: any; initValue: any; metadata: any;
    available: any;  dateCheckIn: any;  image: any; attributes: any;}[]>([]);
  
  const { data: getOwnerTokens, isLoading, error } = useScaffoldReadContract({
    contractName: smartContractName,
    functionName: "tokensCreated",
    args: [BigInt(tokenIdParameter || '0')],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isLoading) {
          return <span className="loading loading-spinner loading-lg"></span>;
        }
        if (getOwnerTokens) {
          const tokensAvailable = [];
          const metadataJson = await readJson(getOwnerTokens[3]);
          const item = {
            tokenId: getOwnerTokens[0],
            name: getOwnerTokens[1],
            initValue: getOwnerTokens[2],
            metadata: getOwnerTokens[3],
            available: getOwnerTokens[4],
            dateCheckIn: getOwnerTokens[5],
            image: metadataJson.image, // Atribui a imagem do metadataJson
            attributes: metadataJson.attributes // Atribui os atributos do metadataJson
          };

          tokensAvailable.push(item);
          setTokensAvailable(tokensAvailable);
        }
      } catch (error) {
        console.error("Erro ao obter tokens do proprietário:", error);
      }
    };
    fetchData();
  }, [getOwnerTokens, isLoading, error]);

  const { writeContractAsync: purchaseToken } = useScaffoldWriteContract(smartContractName);
  const handleByToken = async (tokenIdCheckIn) => {
    try {
      const transferResult = await purchaseToken({
        functionName: "purchaseToken",
        args: [account.address, BigInt(tokenIdCheckIn)],
      });
  
      if (transferResult !== undefined) {
          setTransferResult("Hash Transaction Result: "+transferResult);
      }   
      return transferResult;
    } catch (e) {
      console.error("Error transferring tokens:", e);
      throw e;
    }
  };


  return (
    <div className="flex items-center flex-col flex-grow pt-5">
      
      <div className="px-5">
      </div>

      <div>
        <div className="px-12 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 justify-items-stretch">          
          {tokensAvailable && tokensAvailable.map((token, index) => (
            <div className="flex flex-col justify-between card bg-base-100 shadow-xl">
              <div className="card-body">
                <p key={index}>            
                  {showTokenId && (
                    <IntegerInput disabled name="tokenIdCheckIn" value={token.tokenId} 
                    onChange={(e) => { console.log(e) }}/>
                  )}                
                  <h4 className="card-title">{token.name}</h4>
                  <img src={String(token.image) || '0'} className="w-25 h-25"/> 
                
                 <div className="card-actions justify-center">
                  <hr style={{ width: "100%", borderTop: "1px solid #ccc", margin: "10px 0" }}/>
                    <span className="text-xs"> {formatEther(token.initValue)} ETH</span>

                    <p>
                    <button className="btn btn-primary text-ml text-white mt-2"
                     onClick={() => handleByToken(token.initValue)}>Buy
                  </button>
                    </p>

                </div>              
                </p>
              
              </div>
            </div>
          ) )}              
        </div>
        
      </div>

    </div>
  );
};

export default OlyCrypto;
