/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {Contract, ContractFactory, Signer} from 'ethers';
import {Provider} from 'ethers/providers';
import {UnsignedTransaction} from 'ethers/utils/transaction';

import {TransactionOverrides} from '.';
import {StarkVerifier} from './StarkVerifier';

export class StarkVerifierFactory extends ContractFactory {
    constructor(signer?: Signer) {
        super(_abi, _bytecode, signer);
    }

    deploy(overrides?: TransactionOverrides): Promise<StarkVerifier> {
        return super.deploy(overrides) as Promise<StarkVerifier>;
    }
    getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
        return super.getDeployTransaction(overrides);
    }
    attach(address: string): StarkVerifier {
        return super.attach(address) as StarkVerifier;
    }
    connect(signer: Signer): StarkVerifierFactory {
        return super.connect(signer) as StarkVerifierFactory;
    }
    static connect(address: string, signerOrProvider: Signer | Provider): StarkVerifier {
        return new Contract(address, _abi, signerOrProvider) as StarkVerifier;
    }
}

const _abi = [
    {
        inputs: [
            {
                components: [
                    {
                        internalType: 'bytes',
                        name: 'public_inputs',
                        type: 'bytes',
                    },
                    {
                        internalType: 'uint256[]',
                        name: 'trace_values',
                        type: 'uint256[]',
                    },
                    {
                        internalType: 'bytes32',
                        name: 'trace_commitment',
                        type: 'bytes32',
                    },
                    {
                        internalType: 'uint256[]',
                        name: 'constraint_values',
                        type: 'uint256[]',
                    },
                    {
                        internalType: 'bytes32',
                        name: 'constraint_commitment',
                        type: 'bytes32',
                    },
                    {
                        internalType: 'uint256[]',
                        name: 'trace_oods_values',
                        type: 'uint256[]',
                    },
                    {
                        internalType: 'uint256[]',
                        name: 'constraint_oods_values',
                        type: 'uint256[]',
                    },
                    {
                        internalType: 'bytes8',
                        name: 'pow_nonce',
                        type: 'bytes8',
                    },
                    {
                        internalType: 'bytes32[]',
                        name: 'trace_decommitment',
                        type: 'bytes32[]',
                    },
                    {
                        internalType: 'bytes32[]',
                        name: 'constraint_decommitment',
                        type: 'bytes32[]',
                    },
                    {
                        internalType: 'uint256[][]',
                        name: 'fri_values',
                        type: 'uint256[][]',
                    },
                    {
                        internalType: 'bytes32[]',
                        name: 'fri_commitments',
                        type: 'bytes32[]',
                    },
                    {
                        internalType: 'bytes32[][]',
                        name: 'fri_decommitments',
                        type: 'bytes32[][]',
                    },
                    {
                        internalType: 'uint256[]',
                        name: 'last_layer_coeffiencts',
                        type: 'uint256[]',
                    },
                ],
                internalType: 'struct ProofTypes.StarkProof',
                name: 'proof',
                type: 'tuple',
            },
            {
                internalType: 'contract ConstraintSystem',
                name: 'constraints',
                type: 'address',
            },
        ],
        name: 'verify_proof',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
];

const _bytecode =
    '0x608060405234801561001057600080fd5b50612e28806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80632c912efc14610030575b600080fd5b61004361003e3660046123b6565b610059565b6040516100509190612949565b60405180910390f35b6000610063611e7e565b61006b611ec4565b84516040517ff837656b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff86169163f837656b916100be9190600401612954565b60006040518083038186803b1580156100d657600080fd5b505afa1580156100ea573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261013091908101906122b7565b91509150606060006060806101468987876102c8565b9350935093509350610161858a60e001518860a0015161046e565b6101a0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161019790612b45565b60405180910390fd5b60008660600151876020015101905060606101c087838a60c0015161054e565b9050606060008b73ffffffffffffffffffffffffffffffffffffffff1663cdb7ef438e8c868b8d8c6040518763ffffffff1660e01b815260040161020996959493929190612b7c565b600060405180830381600087803b15801561022357600080fd5b505af1158015610237573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261027d919081019061221a565b60608c015160208d01519294509092500161029a8e8c868461064c565b6102ac8e8c60e001518884888861078a565b6102b78e89846107f1565b505050505050505050505092915050565b606060006060806102e68760400151866108ac90919063ffffffff16565b61030a866040015160020267ffffffffffffffff16866108ca90919063ffffffff16565b93506103238760800151866108ac90919063ffffffff16565b61032c85610937565b92506103458760a00151866109c990919063ffffffff16565b60c087015161035b90869063ffffffff6109c916565b60c08701515160a0880151516103799187910163ffffffff6108ca16565b91508560e00151516040519080825280602002602001820160405280156103aa578160200160208202803683370190505b50905060005b8660e0015151811015610410576103e888610160015182815181106103d157fe5b6020026020010151876108ac90919063ffffffff16565b6103f186610937565b8282815181106103fd57fe5b60209081029190910101526001016103b0565b50610465876101a0015160405160200161042a9190612835565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052869063ffffffff610a0816565b93509350935093565b6000808460000151836040516020016104889291906128ee565b604051602081830303815290604052805190602001209050600081856040516020016104b592919061284f565b60405160208183030381529060405280519060200120905061051c856040516020016104e191906128a5565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052879063ffffffff610a0816565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60ff85161c10159150509392505050565b6060808260ff1660405190808252806020026020018201604052801561057e578160200160208202803683370190505b5090507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60ff851660020a0160005b600460ff86160460ff1681116106395760006105c888610a46565b905060005b600481101561062f578660ff16818460040201101561062757838260c01c1685828560040201815181106105fd57fe5b602002602001019067ffffffffffffffff16908167ffffffffffffffff1681525050604082901b91505b6001016105cd565b50506001016105ad565b5061064382610a86565b50949350505050565b60608360c0015160ff1660405190808252806020026020018201604052801561067f578160200160208202803683370190505b509050606083516040519080825280602002602001820160405280156106af578160200160208202803683370190505b506020870151865191925060ff80861660020a926106d292911687848787610b81565b6106e7876040015184848a6101000151610c8c565b61071d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161019790612ad7565b6107368760600151876080015160ff1687848787610b81565b61074b876080015184848a6101200151610c8c565b610781576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610197906129d5565b50505050505050565b6107e96040518061012001604052808861014001518152602001886101600151815260200188610180015181526020018781526020018681526020018560ff168152602001848152602001838152602001886101a00151815250610de4565b505050505050565b6000806107fe60016111ed565b905060005b8560c001515181101561086b57600061083c838860c00151848151811061082657fe5b602002602001015161123990919063ffffffff16565b905061084e848263ffffffff61127416565b9350610860838763ffffffff61123916565b925050600101610803565b508282146108a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161019790612b0e565b5050505050565b60006108bc8360000151836112a1565b600060208501529092525050565b606080826040519080825280602002602001820160405280156108f7578160200160208202803683370190505b50905060005b8381101561092d5761090e85610937565b82828151811061091a57fe5b60209081029190910101526001016108fd565b5090505b92915050565b60008061094383610a46565b7f0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1690505b7f080000000000001100000000000000000000000000000000000000000000000181106109c15761099883610a46565b7f0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff169050610968565b90505b919050565b60005b8151811015610a035760008282815181106109e357fe5b602002602001015160001b90506109fa84826108ac565b506001016109cc565b505050565b6000610a38836000015183604051602001610a2492919061287f565b6040516020818303038152906040526112d4565b835250506000602090910152565b600080610a688360000151846020015167ffffffffffffffff1660001b6112a1565b602093909301805160010167ffffffffffffffff1690525090919050565b60005b8151811015610b7d57805b600081118015610ae05750826001820381518110610aae57fe5b602002602001015167ffffffffffffffff16838281518110610acc57fe5b602002602001015167ffffffffffffffff16105b15610b7457826001820381518110610af457fe5b6020026020010151838281518110610b0857fe5b6020026020010151848381518110610b1c57fe5b60200260200101856001850381518110610b3257fe5b67ffffffffffffffff9384166020918202929092010152911690527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610a94565b50600101610a89565b5050565b606085604051908082528060200260200182016040528015610bad578160200160208202803683370190505b50905060005b86885181610bbd57fe5b04811015610c305760005b87811015610c075788818984020181518110610be057fe5b6020026020010151838281518110610bf457fe5b6020908102919091010152600101610bc8565b50610c1182611304565b848281518110610c1d57fe5b6020908102919091010152600101610bb3565b50610c41858363ffffffff61138016565b60005b8551811015610c825784838281518110610c5a57fe5b602002602001015101838281518110610c6f57fe5b6020908102919091010152600101610c44565b5050505050505050565b600080845111610cc8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161019790612a69565b610cd0611edb565b6040518060a001604052806000815260200160018751038152602001858152602001868152602001600015158152509050610d09611f0c565b610d12846113c9565b90505b600080610d21846113e0565b915091508160011415610d3b5788149350610ddc92505050565b600180831615908115610da457610d518661143b565b15610da457600080610d6288611443565b9150915085600101821415610da157610d7a886113e0565b90925090506000610d8b8683611499565b9050610d9b8960028904836114f1565b60009350505b50505b8015610dd357610db3856115ac565b610dc65760009650505050505050610ddc565b610dd382878786886115b8565b50505050610d15565b949350505050565b610dec611f26565b610df98260a001516115f9565b9050610e03611f26565b6040518060600160405280600067ffffffffffffffff168152602001600167ffffffffffffffff1681526020018460a0015160ff16600267ffffffffffffffff160a67ffffffffffffffff16815250905060608360c0015151604051908082528060200260200182016040528015610e85578160200160208202803683370190505b50905060608460c0015151604051908082528060200260200182016040528015610eb9578160200160208202803683370190505b50905060005b8560600151518110156110b45785606001518181518110610edc57fe5b602090810291909101015160ff1660020a67ffffffffffffffff16845260e086015160c087015187518051610f48939291610f289186908110610f1b57fe5b60200260200101516113c9565b888a608001518681518110610f3957fe5b6020026020010151898861163c565b60c0860151610f5d908463ffffffff61138016565b82518660c001515114610f925760c086015151610f80848263ffffffff61187216565b610f90838263ffffffff61187216565b505b60005b8351811015610ff357846000015167ffffffffffffffff16856040015167ffffffffffffffff1681610fc357fe5b0467ffffffffffffffff16848281518110610fda57fe5b6020908102919091010180519091019052600101610f95565b5061102e8660200151828151811061100757fe5b602002602001015183858960400151858151811061102157fe5b6020026020010151610c8c565b611064576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161019790612967565b836000015167ffffffffffffffff168460400181815167ffffffffffffffff168161108b57fe5b0467ffffffffffffffff9081169091528551602087018051909102909116905250600101610ebf565b5060006110f8846040015167ffffffffffffffff16866040015167ffffffffffffffff16816110df57fe5b879167ffffffffffffffff91041663ffffffff6118b116565b905060005b8660e0015151811015610781576000611123866040015167ffffffffffffffff166118c1565b9050600061115b828a60c00151858151811061113b57fe5b602002602001015167ffffffffffffffff166119c790919063ffffffff16565b9050600061116f858363ffffffff611a0f16565b9050600061118b828c6101000151611a3c90919063ffffffff16565b90508a60e00151858151811061119d57fe5b602002602001015181146111dd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161019790612aa0565b5050600190920191506110fd9050565b60007f08000000000000110000000000000000000000000000000000000000000000017f07fffffffffffdf0ffffffffffffffffffffffffffffffffffffffffffffffe1830992915050565b600061126d6112488484611ad7565b7e40000000000001100000000000012100000000000000000000000000000000611ad7565b9392505050565b60007f08000000000000110000000000000000000000000000000000000000000000018284089392505050565b600082826040516020016112b6929190612841565b60405160208183030381529060405280519060200120905092915050565b6000816040516020016112e791906128d2565b604051602081830303815290604052805190602001209050919050565b600081516001141561132f578160008151811061131d57fe5b602002602001015160001b90506109c4565b6040517fffffffffffffffffffffffffffffffffffffffff00000000000000000000000090611362908490602001612835565b604051602081830303815290604052805190602001201690506109c4565b60005b8251811015610a035782818151811061139857fe5b602002602001015167ffffffffffffffff168282815181106113b657fe5b6020908102919091010152600101611383565b6113d1611f0c565b60208101919091526000815290565b6000808260800151156113f857506000905080611436565b61140183611443565b6020850151855192945090925014156114205760016080840152611436565b60608301515183516001018161143257fe5b0683525b915091565b608001511590565b60008082608001511561145b57506000905080611436565b606083015183518151811061146c57fe5b60200260200101519050826040015183600001518151811061148a57fe5b60200260200101519150915091565b60007fffffffffffffffffffffffffffffffffffffffff00000000000000000000000060001b83836040516020016114d2929190612841565b6040516020818303038152906040528051906020012016905092915050565b82608001511561154d57600080845260208401819052608084018190526040840151805184929061151e57fe5b60200260200101818152505080836060015160008151811061153c57fe5b602002602001018181525050610a03565b600083606001515184602001516001018161156457fe5b069050818460600151828151811061157857fe5b602002602001018181525050828460400151828151811061159557fe5b602090810291909101810191909152840152505050565b60208101515190511090565b60006115c384611b04565b9050600086156115de576115d78483611499565b90506115eb565b6115e88285611499565b90505b6107818660028504836114f1565b611601611f26565b604051806060016040528061161584611b2e565b815260ff84166020820181905260020a67ffffffffffffffff166040909101529050919050565b600080905060006060846000015167ffffffffffffffff1660405190808252806020026020018201604052801561167d578160200160208202803683370190505b50905060005b8a518110156118455789818151811061169857fe5b602002602001015192506000866000015167ffffffffffffffff168467ffffffffffffffff16816116c557fe5b068403905060005b876000015167ffffffffffffffff168167ffffffffffffffff16101561179f5781810167ffffffffffffffff168567ffffffffffffffff16141561176b578c838151811061171757fe5b6020026020010151848267ffffffffffffffff168151811061173557fe5b60209081029190910101528b51600190930192831015611766578b838151811061175b57fe5b602002602001015194505b611797565b6117748b611b04565b848267ffffffffffffffff168151811061178a57fe5b6020026020010181815250505b6001016116cd565b506117a983611304565b8686815181106117b557fe5b60209081029190910101526117da838989600267ffffffffffffffff8616048d611bf0565b8c86815181106117e657fe5b602002602001018181525050866000015167ffffffffffffffff168167ffffffffffffffff168161181357fe5b048b868151811061182057fe5b67ffffffffffffffff9092166020928302919091019091015250600190930192611683565b6118558b8563ffffffff61187216565b6118658a8563ffffffff61187216565b5050505050505050505050565b80825110156118ad576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161019790612a32565b9052565b600061126d836000015183611a0f565b60008064010000000067ffffffffffffffff8416106118e85763ffffffff602093841c1692015b620100008367ffffffffffffffff161061190c5765ffffffffffff601093841c1692015b6101008367ffffffffffffffff16106119305766ffffffffffffff600893841c1692015b60108367ffffffffffffffff161061195457670fffffffffffffff600493841c1692015b60048367ffffffffffffffff161061197857673fffffffffffffff600293841c1692015b60028367ffffffffffffffff161061199c57677fffffffffffffff600193841c1692015b919091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01919050565b60008281805b8460ff168160ff1610156119fc57600291820260018416179167ffffffffffffffff84160492506001016119cd565b5067ffffffffffffffff16949350505050565b600061126d83837f0800000000000011000000000000000000000000000000000000000000000001611de7565b60008083600185510381518110611a4f57fe5b602002602001015190506000600285510390505b8015611ab857611a8f858281518110611a7857fe5b6020026020010151611a8a8487611ad7565b611274565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01611a63565b50610ddc84600081518110611ac957fe5b6020026020010151611a8a83865b60007f08000000000000110000000000000000000000000000000000000000000000018284099392505050565b805160018101825260208201518051600092908110611b1f57fe5b60200260200101519050919050565b60008060ff831660020a7f080000000000001100000000000000000000000000000000000000000000000081611b6057fe5b04905060ff831660020a81027f080000000000001100000000000000000000000000000000000000000000000014611bc4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101979061299e565b61126d6003827f0800000000000011000000000000000000000000000000000000000000000001611de7565b60408301516020840151865160009291905b6001811115611dc45760005b81811015611d815760008088600284040190506000611c43600267ffffffffffffffff89160467ffffffffffffffff166118c1565b90506000611c6167ffffffffffffffff84168363ffffffff6119c716565b60408b015190915067ffffffffffffffff80891683029116908103908181611c8557fe5b069050611c988b8263ffffffff6118b116565b9450505050506000611cdc8c8460010181518110611cb257fe5b60200260200101518d8581518110611cc657fe5b602002602001015161127490919063ffffffff16565b90506000611cf0838d63ffffffff611ad716565b90506000611d308e8660010181518110611d0657fe5b60200260200101518f8781518110611d1a57fe5b6020026020010151611e2f90919063ffffffff16565b90506000611d44838363ffffffff61123916565b9050611d56848263ffffffff61127416565b8f6002880481518110611d6557fe5b6020026020010181815250505050505050600281019050611c0e565b50600267ffffffffffffffff8416049250600267ffffffffffffffff871604955060029190910290611db9888063ffffffff61123916565b975060029004611c02565b88600081518110611dd157fe5b6020026020010151935050505095945050505050565b600060405160208152602080820152602060408201528460608201528360808201528260a082015260208160c08360006005600019f1611e2657600080fd5b51949350505050565b60007f0800000000000011000000000000000000000000000000000000000000000001827f08000000000000110000000000000000000000000000000000000000000000010384089392505050565b604080516101008101825260008082526020820181905291810182905260608082018390526080820183905260a0820183905260c082019290925260e081019190915290565b604080518082019091526000808252602082015290565b6040518060a00160405280600081526020016000815260200160608152602001606081526020016000151581525090565b604051806040016040528060008152602001606081525090565b604080516060810182526000808252602082018190529181019190915290565b600082601f830112611f56578081fd5b8135611f69611f6482612da2565b612d7b565b818152915060208083019084810160005b84811015611fa357611f91888484358a0101612006565b84529282019290820190600101611f7a565b505050505092915050565b600082601f830112611fbe578081fd5b8135611fcc611f6482612da2565b818152915060208083019084810160005b84811015611fa357611ff4888484358a0101612006565b84529282019290820190600101611fdd565b600082601f830112612016578081fd5b8135612024611f6482612da2565b81815291506020808301908481018184028601820187101561204557600080fd5b60005b84811015611fa357813584529282019290820190600101612048565b600082601f830112612074578081fd5b8151612082611f6482612da2565b8181529150602080830190848101818402860182018710156120a357600080fd5b6000805b858110156120d157825160ff811681146120bf578283fd5b855293830193918301916001016120a7565b50505050505092915050565b80357fffffffffffffffff0000000000000000000000000000000000000000000000008116811461093157600080fd5b600082601f83011261211d578081fd5b813567ffffffffffffffff811115612133578182fd5b61216460207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601612d7b565b915080825283602082850101111561217b57600080fd5b8060208401602084013760009082016020015292915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461093157600080fd5b6000604082840312156121c9578081fd5b6121d36040612d7b565b9050815181526121e683602084016121f1565b602082015292915050565b805167ffffffffffffffff8116811461093157600080fd5b805160ff8116811461093157600080fd5b6000806040838503121561222c578182fd5b825167ffffffffffffffff811115612242578283fd5b80840185601f820112612253578384fd5b80519150612263611f6483612da2565b808382526020808301925080840189828388028701011115612283578788fd5b8794505b858510156122a5578051845260019490940193928101928101612287565b50969096015195979596505050505050565b600080606083850312156122c9578182fd5b825167ffffffffffffffff808211156122e0578384fd5b6101009185018087038313156122f4578485fd5b6122fd83612d7b565b6123078883612209565b81526123168860208401612209565b602082015261232888604084016121f1565b604082015261233a8860608401612209565b606082015261234c8860808401612209565b608082015261235e8860a08401612209565b60a08201526123708860c08401612209565b60c082015260e0820151935082841115612388578586fd5b61239488858401612064565b60e0820152809550505050506123ad84602085016121b8565b90509250929050565b600080604083850312156123c8578182fd5b823567ffffffffffffffff808211156123df578384fd5b6101c09185018087038313156123f3578485fd5b6123fc83612d7b565b813593508284111561240c578586fd5b6124188885840161210d565b8152602082013593508284111561242d578586fd5b61243988858401612006565b602082015260408201356040820152606082013593508284111561245b578586fd5b61246788858401612006565b60608201526080820135608082015260a0820135935082841115612489578586fd5b61249588858401612006565b60a082015260c08201359350828411156124ad578586fd5b6124b988858401612006565b60c08201526124cb8860e084016120dd565b60e0820152610100935083820135838111156124e5578687fd5b6124f189828501612006565b85830152506101209350838201358381111561250b578687fd5b61251789828501612006565b858301525061014093508382013583811115612531578687fd5b61253d89828501611fae565b858301525061016093508382013583811115612557578687fd5b61256389828501612006565b85830152506101809350838201358381111561257d578687fd5b61258989828501611f46565b85830152506101a0935083820135838111156125a3578687fd5b6125af89828501612006565b8583015250809550505050506123ad8460208501612194565b6000815180845260208085018081965082840281019150828601855b8581101561260e5782840389526125fc848351612661565b988501989350908401906001016125e4565b5091979650505050505050565b6000815180845260208085018081965082840281019150828601855b8581101561260e57828403895261264f848351612661565b98850198935090840190600101612637565b6000815180845260208085019450808401835b8381101561269057815187529582019590820190600101612674565b509495945050505050565b8051600090602080840183831561269057815187529582019590820190600101612674565b6000815180845260208085019450808401835b8381101561269057815167ffffffffffffffff16875295820195908201906001016126d3565b6000815180845260208085019450808401835b8381101561269057815160ff168752958201959082019060010161270c565b7fffffffffffffffff000000000000000000000000000000000000000000000000169052565b60008151808452612769816020860160208601612dc2565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600061010060ff835116845260ff602084015116602085015267ffffffffffffffff604084015116604085015260ff606084015116606085015260808301516127e7608086018261282e565b5060a08301516127fa60a086018261282e565b5060c083015161280d60c086018261282e565b5060e08301518160e0860152612825828601826126f9565b95945050505050565b60ff169052565b600061126d828461269b565b918252602082015260400190565b9182527fffffffffffffffff00000000000000000000000000000000000000000000000016602082015260280190565b60008382528251612897816020850160208701612dc2565b919091016020019392505050565b7fffffffffffffffff00000000000000000000000000000000000000000000000091909116815260080190565b600082516128e4818460208701612dc2565b9190910192915050565b7f0123456789abcded0000000000000000000000000000000000000000000000008152600881019290925260f81b7fff0000000000000000000000000000000000000000000000000000000000000016602882015260290190565b901515815260200190565b60006020825261126d6020830184612751565b6020808252601e908201527f467269206d65726b6c6520766572696669636174696f6e206661696c65640000604082015260600190565b60208082526010908201527f526f6f7420756e617661696c61626c6500000000000000000000000000000000604082015260600190565b60208082526022908201527f436f6e73747261696e7420636f6d6d69746d656e742070726f6f66206661696c60408201527f6564000000000000000000000000000000000000000000000000000000000000606082015260800190565b6020808252600d908201527f536872696e6b204661696c656400000000000000000000000000000000000000604082015260600190565b6020808252600f908201527f4e6f20636c61696d656420646174610000000000000000000000000000000000604082015260600190565b6020808252601e908201527f4c617374206c6179657220636f65666669656e7473206d69736d617463680000604082015260600190565b6020808252601d908201527f547261636520636f6d6d69746d656e742070726f6f66206661696c6564000000604082015260600190565b6020808252600d908201527f4f6f6473206d69736d6174636800000000000000000000000000000000000000604082015260600190565b6020808252600a908201527f504f57204661696c656400000000000000000000000000000000000000000000604082015260600190565b600060c0825287516101c060c0840152612b9a610280840182612751565b60208a015191507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff40808583030160e0860152612bd68284612661565b60408c015193506101009250838387015260608c01519350610120828783030181880152612c048286612661565b60808e015195506101409250858389015260a08e015195508388820301610160890152612c318187612661565b60c08f0151965084898203016101808a0152612c4d8188612661565b91505060e08e01519550612c656101a089018761272b565b848e0151955083888203016101c0890152612c808187612661565b945050808d015194505081868403016101e0870152612c9f8385612661565b818d015194508287820301610200880152612cba818661261b565b935050506101608b015192508085830301610220860152612cdb8284612661565b6101808c015193508186820301610240870152612cf881856125c8565b9250506101a08b01519250808583030161026086015250612d198183612661565b8481036020860152612d2b818b61279b565b925050508281036040840152612d4181886126c0565b8660608501528381036080850152612d598187612661565b91505082810360a0840152612d6e8185612661565b9998505050505050505050565b60405181810167ffffffffffffffff81118282101715612d9a57600080fd5b604052919050565b600067ffffffffffffffff821115612db8578081fd5b5060209081020190565b60005b83811015612ddd578181015183820152602001612dc5565b83811115612dec576000848401525b5050505056fea2646970667358221220911a08beb465e44043c2f0c4b88eb37365dd1f89178bae5327961c42f44645f264736f6c63430006040033';