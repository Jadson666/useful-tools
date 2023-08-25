import { ethers } from 'ethers';

interface IVerifyTypedData {
  domain: {
    chainId: number;
    verifyingContract: string;
  };
  types: Record<string, { type: string; name: string }[]>;
  data: Record<string, any>;
  signature: string;
  signerAddress: string;
}

export const verifyTypedData = ({ types, domain, data, signature, signerAddress }: IVerifyTypedData) => {
  const recoveredAddress = ethers.utils.verifyTypedData(domain, types, data, signature);
  return recoveredAddress === signerAddress;
};
