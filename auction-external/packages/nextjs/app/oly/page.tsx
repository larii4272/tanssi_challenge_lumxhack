"use client";

import { useState, useEffect } from "react";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { IntegerInput } from "~~/components/scaffold-eth";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth/useScaffoldReadContract";
import { useScaffoldContract } from "~~/hooks/scaffold-eth/useScaffoldContract";

import { readJson } from "../../services/util.js";
import { formatEther } from 'viem'
import Link from "next/link.js";

const OlyCrypto: NextPage = () => {
  const { address: connectedAddress } = useAccount();
  const account = useAccount();

  const smartContractName= "OlyCrypto";

  const { data: contractAddress } = useScaffoldContract({
    contractName: smartContractName,
  });


  const { data: totalSupply } = useScaffoldReadContract({
    contractName: smartContractName,
    functionName: "totalSupply",
  });

  const { data: symbol } = useScaffoldReadContract({
    contractName: smartContractName,
    functionName: "symbol",
  });

  const { data: nameContract } = useScaffoldReadContract({
    contractName: smartContractName,
    functionName: "name",
  });

  const { data: ownerContract } = useScaffoldReadContract({
    contractName: smartContractName,
    functionName: "owner",
  });


  const showTokenId = false;

  const [tokensAvailable, setTokensAvailable] = useState<{tokenId: any; name: any; initValue: any; metadata: any;
    available: any;  dateCheckIn: any;  image: any; attributes: any;}[]>([]);
  
  const { data: tokenBalance } = useScaffoldReadContract({
    contractName: smartContractName,
    functionName: "balanceOf",
    args: [account?.address ?? ""],
  });

  const { data: getOwnerTokens, isLoading, error } = useScaffoldReadContract({
    contractName: smartContractName,
    functionName: "getAllTokens",
   // args: [account?.address ?? ""],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isLoading) {
          return <span className="loading loading-spinner loading-lg"></span>;
        }
        if (getOwnerTokens) {
          const tokensAvailable = [];
          const tokensNotAvailable = [];
          for (let indx = 0; indx < getOwnerTokens.length; indx++) {
              const metadataJson = await readJson(getOwnerTokens[indx].metadata);
              const item = {
                tokenId: getOwnerTokens[indx].tokenId,
                name: getOwnerTokens[indx].name,
                initValue: getOwnerTokens[indx].initValue,
                metadata: getOwnerTokens[indx].metadata,
                available: getOwnerTokens[indx].available,
                dateCheckIn: getOwnerTokens[indx].dateCheckIn,
                image: metadataJson.image, // Atribui a imagem do metadataJson
                attributes: metadataJson.attributes // Atribui os atributos do metadataJson
              };

              if (getOwnerTokens[indx].available)
                tokensAvailable.push(item);
              else 
               tokensNotAvailable.push(item);
          }
          setTokensAvailable(tokensAvailable);
          setTokensNotAvailable(tokensNotAvailable);
        }
      } catch (error) {
        console.error("Erro ao obter tokens do proprietário:", error);
      }
    };
    fetchData();
  }, [getOwnerTokens, isLoading, error]);

  const handleOpenDetail = (tokenIdNewPage) => {

    localStorage.setItem("tokenIdBefore", tokenIdNewPage);
    window.location.replace('/detail?tokenId'); 
   };

  return (
    <div className="flex items-center flex-col flex-grow pt-5">
      
      <div className="px-5">

        <div className="flex justify-center items-center space-x-2">   


          <br/>
        </div>
      </div>


      <div>
      <div className="flex-1 card bg-base-100 shadow-xl">

              </div>


        <div className="px-12">
          <hr style={{ width: "100%", borderTop: "1px solid #ccc", margin: "10px 0" }}/>            
        </div>        
        <div className="px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 justify-items-stretch">          
          {tokensAvailable && tokensAvailable.map((token, index) => (
            <div className="flex flex-col justify-between card bg-base-100 shadow-xl">
              <div className="card-body">
                <p key={index}>            
                  {showTokenId && (
                    <IntegerInput disabled name="tokenIdCheckIn" value={token.tokenId} 
                    onChange={(e) => { console.log(e) }}/>
                  )}                
                  <h4 className="card-title">{token.name}</h4>
                  <Link href=""
                  onClick={() => handleOpenDetail(token.tokenId || "0")} >
                  <img src={String(token.image) || '0'} className="w-25 h-25"/> 
                  </Link>                
 
                 <div className="card-actions justify-center">
                  <hr style={{ width: "100%", borderTop: "1px solid #ccc", margin: "10px 0" }}/>

                  <span className="text-xs"> {formatEther(token.initValue)} ETH</span>

                   
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
