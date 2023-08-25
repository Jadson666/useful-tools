import { verifyTypedData } from './signature';

test('verifyTypedData', () => {
  const domain = {
    chainId: 56,
    verifyingContract: '0x9e62B92114B9B68BA6318e67553bb8b36fF859a9' // safe contract address
  };
  const types = {
    SafeTx: [
      {
        type: 'address',
        name: 'to'
      },
      {
        type: 'uint256',
        name: 'value'
      },
      {
        type: 'bytes',
        name: 'data'
      },
      {
        type: 'uint8',
        name: 'operation'
      },
      {
        type: 'uint256',
        name: 'safeTxGas'
      },
      {
        type: 'uint256',
        name: 'baseGas'
      },
      {
        type: 'uint256',
        name: 'gasPrice'
      },
      {
        type: 'address',
        name: 'gasToken'
      },
      {
        type: 'address',
        name: 'refundReceiver'
      },
      {
        type: 'uint256',
        name: 'nonce'
      }
    ]
  };
  const result = verifyTypedData({
    domain,
    types,
    data: {
      // copy from raw safeTx.data
      to: '0x168ac3D5D0c84D4C5e4687B9a4d2227b832b1037',
      value: '0',
      data: '0x42966c68000000000000000000000000000000000000000000000002b5e3af16b1880000',
      operation: 0,
      baseGas: 0,
      gasPrice: 0,
      gasToken: '0x0000000000000000000000000000000000000000',
      refundReceiver: '0x0000000000000000000000000000000000000000',
      nonce: 27,
      safeTxGas: 0
    },
    signature:
      '0xb8f07fc238fa0ebbd31d398ae985e507fc8bcfea58d785b73d7f171fbbbc98d0786c679e63d402a75693b434d41404a69a5a5959992844dddeb11afa082c4e441b',
    signerAddress: '0xf9f50ac9F3c5FfED39C95164DF4C2bCff7e63A54'
  });
  expect(result).toBe(true);
});
