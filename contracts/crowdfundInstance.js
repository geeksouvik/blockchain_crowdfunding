/* eslint-disable */
import web3 from './web3';
const address = '0xb4B2F400a2a0202da34BA07B818688C8e3172B24'; // Your deployed contract's address goes here

const abi = [
	{
		"constant": true,
		"inputs": [],
		"name": "returnAllProjects",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "title",
				"type": "string"
			},
			{
				"name": "description",
				"type": "string"
			},
			{
				"name": "durationInDays",
				"type": "uint256"
			},
			{
				"name": "amountToRaise",
				"type": "uint256"
			},
			{
				"name": "reward",
				"type": "bool"
			},
			{
				"name": "milestone",
				"type": "uint256"
			}
		],
		"name": "startProject",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "contractAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "projectStarter",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "projectTitle",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "projectDesc",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "deadline",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "goalAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "reward",
				"type": "bool"
			},
			{
				"indexed": false,
				"name": "milestone",
				"type": "uint256"
			}
		],
		"name": "ProjectStarted",
		"type": "event"
	}
];
const instance = new web3.eth.Contract(abi, address);

export default instance;
