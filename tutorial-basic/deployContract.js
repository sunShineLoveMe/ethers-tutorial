const { ethers } = require("ethers");

// 部署智能合约是一种特殊的交易： 将编译智能合约得到的字节码发送到0地址
const providerRinkeby = new ethers.providers.JsonRpcProvider("https://rinkeby.infura.io/v3/5084424153934cf094acc9d9c4cb58cd")
// 用私钥来创建钱包并发送交易
const privateKey1 = '5c10fd556b49e22e0a4df15ee4025aedc395ce84cdb95f84f689242f9892ade7';
const wallet1 = new ethers.Wallet(privateKey1, providerRinkeby)

// ERC20的人类可读abi
const abiERC20 = [
    "constructor(string memory name_, string memory symbol_)",
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",
    "function transfer(address to, uint256 amount) external returns (bool)",
    "function mint(uint amount) external",
];
// 填入合约字节码，在remix中，你可以在两个地方找到Bytecode
// 1. 部署面板的Bytecode按钮
// 2. 文件面板artifact文件夹下与合约同名的json文件中
// 里面"object"字段对应的数据就是Bytecode，挺长的，608060起始
// "object": "608060405260646000553480156100...
const bytecodeERC20 = {
	"functionDebugData": {
		"@_42": {
			"entryPoint": null,
			"id": 42,
			"parameterSlots": 2,
			"returnSlots": 0
		},
		"abi_decode_available_length_t_string_memory_ptr_fromMemory": {
			"entryPoint": 317,
			"id": null,
			"parameterSlots": 3,
			"returnSlots": 1
		},
		"abi_decode_t_string_memory_ptr_fromMemory": {
			"entryPoint": 392,
			"id": null,
			"parameterSlots": 2,
			"returnSlots": 1
		},
		"abi_decode_tuple_t_string_memory_ptrt_string_memory_ptr_fromMemory": {
			"entryPoint": 443,
			"id": null,
			"parameterSlots": 2,
			"returnSlots": 2
		},
		"allocate_memory": {
			"entryPoint": 576,
			"id": null,
			"parameterSlots": 1,
			"returnSlots": 1
		},
		"allocate_unbounded": {
			"entryPoint": 607,
			"id": null,
			"parameterSlots": 0,
			"returnSlots": 1
		},
		"array_allocation_size_t_string_memory_ptr": {
			"entryPoint": 617,
			"id": null,
			"parameterSlots": 1,
			"returnSlots": 1
		},
		"copy_memory_to_memory": {
			"entryPoint": 671,
			"id": null,
			"parameterSlots": 3,
			"returnSlots": 0
		},
		"extract_byte_array_length": {
			"entryPoint": 725,
			"id": null,
			"parameterSlots": 1,
			"returnSlots": 1
		},
		"finalize_allocation": {
			"entryPoint": 779,
			"id": null,
			"parameterSlots": 2,
			"returnSlots": 0
		},
		"panic_error_0x22": {
			"entryPoint": 833,
			"id": null,
			"parameterSlots": 0,
			"returnSlots": 0
		},
		"panic_error_0x41": {
			"entryPoint": 880,
			"id": null,
			"parameterSlots": 0,
			"returnSlots": 0
		},
		"revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d": {
			"entryPoint": 927,
			"id": null,
			"parameterSlots": 0,
			"returnSlots": 0
		},
		"revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae": {
			"entryPoint": 932,
			"id": null,
			"parameterSlots": 0,
			"returnSlots": 0
		},
		"revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db": {
			"entryPoint": 937,
			"id": null,
			"parameterSlots": 0,
			"returnSlots": 0
		},
		"revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b": {
			"entryPoint": 942,
			"id": null,
			"parameterSlots": 0,
			"returnSlots": 0
		},
		"round_up_to_mul_of_32": {
			"entryPoint": 947,
			"id": null,
			"parameterSlots": 1,
			"returnSlots": 1
		}
	},
	"generatedSources": [
		{
			"ast": {
				"nodeType": "YulBlock",
				"src": "0:4093:2",
				"statements": [
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "102:326:2",
							"statements": [
								{
									"nodeType": "YulAssignment",
									"src": "112:75:2",
									"value": {
										"arguments": [
											{
												"arguments": [
													{
														"name": "length",
														"nodeType": "YulIdentifier",
														"src": "179:6:2"
													}
												],
												"functionName": {
													"name": "array_allocation_size_t_string_memory_ptr",
													"nodeType": "YulIdentifier",
													"src": "137:41:2"
												},
												"nodeType": "YulFunctionCall",
												"src": "137:49:2"
											}
										],
										"functionName": {
											"name": "allocate_memory",
											"nodeType": "YulIdentifier",
											"src": "121:15:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "121:66:2"
									},
									"variableNames": [
										{
											"name": "array",
											"nodeType": "YulIdentifier",
											"src": "112:5:2"
										}
									]
								},
								{
									"expression": {
										"arguments": [
											{
												"name": "array",
												"nodeType": "YulIdentifier",
												"src": "203:5:2"
											},
											{
												"name": "length",
												"nodeType": "YulIdentifier",
												"src": "210:6:2"
											}
										],
										"functionName": {
											"name": "mstore",
											"nodeType": "YulIdentifier",
											"src": "196:6:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "196:21:2"
									},
									"nodeType": "YulExpressionStatement",
									"src": "196:21:2"
								},
								{
									"nodeType": "YulVariableDeclaration",
									"src": "226:27:2",
									"value": {
										"arguments": [
											{
												"name": "array",
												"nodeType": "YulIdentifier",
												"src": "241:5:2"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "248:4:2",
												"type": "",
												"value": "0x20"
											}
										],
										"functionName": {
											"name": "add",
											"nodeType": "YulIdentifier",
											"src": "237:3:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "237:16:2"
									},
									"variables": [
										{
											"name": "dst",
											"nodeType": "YulTypedName",
											"src": "230:3:2",
											"type": ""
										}
									]
								},
								{
									"body": {
										"nodeType": "YulBlock",
										"src": "291:83:2",
										"statements": [
											{
												"expression": {
													"arguments": [],
													"functionName": {
														"name": "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae",
														"nodeType": "YulIdentifier",
														"src": "293:77:2"
													},
													"nodeType": "YulFunctionCall",
													"src": "293:79:2"
												},
												"nodeType": "YulExpressionStatement",
												"src": "293:79:2"
											}
										]
									},
									"condition": {
										"arguments": [
											{
												"arguments": [
													{
														"name": "src",
														"nodeType": "YulIdentifier",
														"src": "272:3:2"
													},
													{
														"name": "length",
														"nodeType": "YulIdentifier",
														"src": "277:6:2"
													}
												],
												"functionName": {
													"name": "add",
													"nodeType": "YulIdentifier",
													"src": "268:3:2"
												},
												"nodeType": "YulFunctionCall",
												"src": "268:16:2"
											},
											{
												"name": "end",
												"nodeType": "YulIdentifier",
												"src": "286:3:2"
											}
										],
										"functionName": {
											"name": "gt",
											"nodeType": "YulIdentifier",
											"src": "265:2:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "265:25:2"
									},
									"nodeType": "YulIf",
									"src": "262:112:2"
								},
								{
									"expression": {
										"arguments": [
											{
												"name": "src",
												"nodeType": "YulIdentifier",
												"src": "405:3:2"
											},
											{
												"name": "dst",
												"nodeType": "YulIdentifier",
												"src": "410:3:2"
											},
											{
												"name": "length",
												"nodeType": "YulIdentifier",
												"src": "415:6:2"
											}
										],
										"functionName": {
											"name": "copy_memory_to_memory",
											"nodeType": "YulIdentifier",
											"src": "383:21:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "383:39:2"
									},
									"nodeType": "YulExpressionStatement",
									"src": "383:39:2"
								}
							]
						},
						"name": "abi_decode_available_length_t_string_memory_ptr_fromMemory",
						"nodeType": "YulFunctionDefinition",
						"parameters": [
							{
								"name": "src",
								"nodeType": "YulTypedName",
								"src": "75:3:2",
								"type": ""
							},
							{
								"name": "length",
								"nodeType": "YulTypedName",
								"src": "80:6:2",
								"type": ""
							},
							{
								"name": "end",
								"nodeType": "YulTypedName",
								"src": "88:3:2",
								"type": ""
							}
						],
						"returnVariables": [
							{
								"name": "array",
								"nodeType": "YulTypedName",
								"src": "96:5:2",
								"type": ""
							}
						],
						"src": "7:421:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "521:282:2",
							"statements": [
								{
									"body": {
										"nodeType": "YulBlock",
										"src": "570:83:2",
										"statements": [
											{
												"expression": {
													"arguments": [],
													"functionName": {
														"name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
														"nodeType": "YulIdentifier",
														"src": "572:77:2"
													},
													"nodeType": "YulFunctionCall",
													"src": "572:79:2"
												},
												"nodeType": "YulExpressionStatement",
												"src": "572:79:2"
											}
										]
									},
									"condition": {
										"arguments": [
											{
												"arguments": [
													{
														"arguments": [
															{
																"name": "offset",
																"nodeType": "YulIdentifier",
																"src": "549:6:2"
															},
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "557:4:2",
																"type": "",
																"value": "0x1f"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "545:3:2"
														},
														"nodeType": "YulFunctionCall",
														"src": "545:17:2"
													},
													{
														"name": "end",
														"nodeType": "YulIdentifier",
														"src": "564:3:2"
													}
												],
												"functionName": {
													"name": "slt",
													"nodeType": "YulIdentifier",
													"src": "541:3:2"
												},
												"nodeType": "YulFunctionCall",
												"src": "541:27:2"
											}
										],
										"functionName": {
											"name": "iszero",
											"nodeType": "YulIdentifier",
											"src": "534:6:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "534:35:2"
									},
									"nodeType": "YulIf",
									"src": "531:122:2"
								},
								{
									"nodeType": "YulVariableDeclaration",
									"src": "662:27:2",
									"value": {
										"arguments": [
											{
												"name": "offset",
												"nodeType": "YulIdentifier",
												"src": "682:6:2"
											}
										],
										"functionName": {
											"name": "mload",
											"nodeType": "YulIdentifier",
											"src": "676:5:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "676:13:2"
									},
									"variables": [
										{
											"name": "length",
											"nodeType": "YulTypedName",
											"src": "666:6:2",
											"type": ""
										}
									]
								},
								{
									"nodeType": "YulAssignment",
									"src": "698:99:2",
									"value": {
										"arguments": [
											{
												"arguments": [
													{
														"name": "offset",
														"nodeType": "YulIdentifier",
														"src": "770:6:2"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "778:4:2",
														"type": "",
														"value": "0x20"
													}
												],
												"functionName": {
													"name": "add",
													"nodeType": "YulIdentifier",
													"src": "766:3:2"
												},
												"nodeType": "YulFunctionCall",
												"src": "766:17:2"
											},
											{
												"name": "length",
												"nodeType": "YulIdentifier",
												"src": "785:6:2"
											},
											{
												"name": "end",
												"nodeType": "YulIdentifier",
												"src": "793:3:2"
											}
										],
										"functionName": {
											"name": "abi_decode_available_length_t_string_memory_ptr_fromMemory",
											"nodeType": "YulIdentifier",
											"src": "707:58:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "707:90:2"
									},
									"variableNames": [
										{
											"name": "array",
											"nodeType": "YulIdentifier",
											"src": "698:5:2"
										}
									]
								}
							]
						},
						"name": "abi_decode_t_string_memory_ptr_fromMemory",
						"nodeType": "YulFunctionDefinition",
						"parameters": [
							{
								"name": "offset",
								"nodeType": "YulTypedName",
								"src": "499:6:2",
								"type": ""
							},
							{
								"name": "end",
								"nodeType": "YulTypedName",
								"src": "507:3:2",
								"type": ""
							}
						],
						"returnVariables": [
							{
								"name": "array",
								"nodeType": "YulTypedName",
								"src": "515:5:2",
								"type": ""
							}
						],
						"src": "448:355:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "923:739:2",
							"statements": [
								{
									"body": {
										"nodeType": "YulBlock",
										"src": "969:83:2",
										"statements": [
											{
												"expression": {
													"arguments": [],
													"functionName": {
														"name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
														"nodeType": "YulIdentifier",
														"src": "971:77:2"
													},
													"nodeType": "YulFunctionCall",
													"src": "971:79:2"
												},
												"nodeType": "YulExpressionStatement",
												"src": "971:79:2"
											}
										]
									},
									"condition": {
										"arguments": [
											{
												"arguments": [
													{
														"name": "dataEnd",
														"nodeType": "YulIdentifier",
														"src": "944:7:2"
													},
													{
														"name": "headStart",
														"nodeType": "YulIdentifier",
														"src": "953:9:2"
													}
												],
												"functionName": {
													"name": "sub",
													"nodeType": "YulIdentifier",
													"src": "940:3:2"
												},
												"nodeType": "YulFunctionCall",
												"src": "940:23:2"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "965:2:2",
												"type": "",
												"value": "64"
											}
										],
										"functionName": {
											"name": "slt",
											"nodeType": "YulIdentifier",
											"src": "936:3:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "936:32:2"
									},
									"nodeType": "YulIf",
									"src": "933:119:2"
								},
								{
									"nodeType": "YulBlock",
									"src": "1062:291:2",
									"statements": [
										{
											"nodeType": "YulVariableDeclaration",
											"src": "1077:38:2",
											"value": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "1101:9:2"
															},
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "1112:1:2",
																"type": "",
																"value": "0"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "1097:3:2"
														},
														"nodeType": "YulFunctionCall",
														"src": "1097:17:2"
													}
												],
												"functionName": {
													"name": "mload",
													"nodeType": "YulIdentifier",
													"src": "1091:5:2"
												},
												"nodeType": "YulFunctionCall",
												"src": "1091:24:2"
											},
											"variables": [
												{
													"name": "offset",
													"nodeType": "YulTypedName",
													"src": "1081:6:2",
													"type": ""
												}
											]
										},
										{
											"body": {
												"nodeType": "YulBlock",
												"src": "1162:83:2",
												"statements": [
													{
														"expression": {
															"arguments": [],
															"functionName": {
																"name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
																"nodeType": "YulIdentifier",
																"src": "1164:77:2"
															},
															"nodeType": "YulFunctionCall",
															"src": "1164:79:2"
														},
														"nodeType": "YulExpressionStatement",
														"src": "1164:79:2"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"name": "offset",
														"nodeType": "YulIdentifier",
														"src": "1134:6:2"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "1142:18:2",
														"type": "",
														"value": "0xffffffffffffffff"
													}
												],
												"functionName": {
													"name": "gt",
													"nodeType": "YulIdentifier",
													"src": "1131:2:2"
												},
												"nodeType": "YulFunctionCall",
												"src": "1131:30:2"
											},
											"nodeType": "YulIf",
											"src": "1128:117:2"
										},
										{
											"nodeType": "YulAssignment",
											"src": "1259:84:2",
											"value": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "1315:9:2"
															},
															{
																"name": "offset",
																"nodeType": "YulIdentifier",
																"src": "1326:6:2"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "1311:3:2"
														},
														"nodeType": "YulFunctionCall",
														"src": "1311:22:2"
													},
													{
														"name": "dataEnd",
														"nodeType": "YulIdentifier",
														"src": "1335:7:2"
													}
												],
												"functionName": {
													"name": "abi_decode_t_string_memory_ptr_fromMemory",
													"nodeType": "YulIdentifier",
													"src": "1269:41:2"
												},
												"nodeType": "YulFunctionCall",
												"src": "1269:74:2"
											},
											"variableNames": [
												{
													"name": "value0",
													"nodeType": "YulIdentifier",
													"src": "1259:6:2"
												}
											]
										}
									]
								},
								{
									"nodeType": "YulBlock",
									"src": "1363:292:2",
									"statements": [
										{
											"nodeType": "YulVariableDeclaration",
											"src": "1378:39:2",
											"value": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "1402:9:2"
															},
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "1413:2:2",
																"type": "",
																"value": "32"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "1398:3:2"
														},
														"nodeType": "YulFunctionCall",
														"src": "1398:18:2"
													}
												],
												"functionName": {
													"name": "mload",
													"nodeType": "YulIdentifier",
													"src": "1392:5:2"
												},
												"nodeType": "YulFunctionCall",
												"src": "1392:25:2"
											},
											"variables": [
												{
													"name": "offset",
													"nodeType": "YulTypedName",
													"src": "1382:6:2",
													"type": ""
												}
											]
										},
										{
											"body": {
												"nodeType": "YulBlock",
												"src": "1464:83:2",
												"statements": [
													{
														"expression": {
															"arguments": [],
															"functionName": {
																"name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
																"nodeType": "YulIdentifier",
																"src": "1466:77:2"
															},
															"nodeType": "YulFunctionCall",
															"src": "1466:79:2"
														},
														"nodeType": "YulExpressionStatement",
														"src": "1466:79:2"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"name": "offset",
														"nodeType": "YulIdentifier",
														"src": "1436:6:2"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "1444:18:2",
														"type": "",
														"value": "0xffffffffffffffff"
													}
												],
												"functionName": {
													"name": "gt",
													"nodeType": "YulIdentifier",
													"src": "1433:2:2"
												},
												"nodeType": "YulFunctionCall",
												"src": "1433:30:2"
											},
											"nodeType": "YulIf",
											"src": "1430:117:2"
										},
										{
											"nodeType": "YulAssignment",
											"src": "1561:84:2",
											"value": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "1617:9:2"
															},
															{
																"name": "offset",
																"nodeType": "YulIdentifier",
																"src": "1628:6:2"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "1613:3:2"
														},
														"nodeType": "YulFunctionCall",
														"src": "1613:22:2"
													},
													{
														"name": "dataEnd",
														"nodeType": "YulIdentifier",
														"src": "1637:7:2"
													}
												],
												"functionName": {
													"name": "abi_decode_t_string_memory_ptr_fromMemory",
													"nodeType": "YulIdentifier",
													"src": "1571:41:2"
												},
												"nodeType": "YulFunctionCall",
												"src": "1571:74:2"
											},
											"variableNames": [
												{
													"name": "value1",
													"nodeType": "YulIdentifier",
													"src": "1561:6:2"
												}
											]
										}
									]
								}
							]
						},
						"name": "abi_decode_tuple_t_string_memory_ptrt_string_memory_ptr_fromMemory",
						"nodeType": "YulFunctionDefinition",
						"parameters": [
							{
								"name": "headStart",
								"nodeType": "YulTypedName",
								"src": "885:9:2",
								"type": ""
							},
							{
								"name": "dataEnd",
								"nodeType": "YulTypedName",
								"src": "896:7:2",
								"type": ""
							}
						],
						"returnVariables": [
							{
								"name": "value0",
								"nodeType": "YulTypedName",
								"src": "908:6:2",
								"type": ""
							},
							{
								"name": "value1",
								"nodeType": "YulTypedName",
								"src": "916:6:2",
								"type": ""
							}
						],
						"src": "809:853:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "1709:88:2",
							"statements": [
								{
									"nodeType": "YulAssignment",
									"src": "1719:30:2",
									"value": {
										"arguments": [],
										"functionName": {
											"name": "allocate_unbounded",
											"nodeType": "YulIdentifier",
											"src": "1729:18:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "1729:20:2"
									},
									"variableNames": [
										{
											"name": "memPtr",
											"nodeType": "YulIdentifier",
											"src": "1719:6:2"
										}
									]
								},
								{
									"expression": {
										"arguments": [
											{
												"name": "memPtr",
												"nodeType": "YulIdentifier",
												"src": "1778:6:2"
											},
											{
												"name": "size",
												"nodeType": "YulIdentifier",
												"src": "1786:4:2"
											}
										],
										"functionName": {
											"name": "finalize_allocation",
											"nodeType": "YulIdentifier",
											"src": "1758:19:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "1758:33:2"
									},
									"nodeType": "YulExpressionStatement",
									"src": "1758:33:2"
								}
							]
						},
						"name": "allocate_memory",
						"nodeType": "YulFunctionDefinition",
						"parameters": [
							{
								"name": "size",
								"nodeType": "YulTypedName",
								"src": "1693:4:2",
								"type": ""
							}
						],
						"returnVariables": [
							{
								"name": "memPtr",
								"nodeType": "YulTypedName",
								"src": "1702:6:2",
								"type": ""
							}
						],
						"src": "1668:129:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "1843:35:2",
							"statements": [
								{
									"nodeType": "YulAssignment",
									"src": "1853:19:2",
									"value": {
										"arguments": [
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "1869:2:2",
												"type": "",
												"value": "64"
											}
										],
										"functionName": {
											"name": "mload",
											"nodeType": "YulIdentifier",
											"src": "1863:5:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "1863:9:2"
									},
									"variableNames": [
										{
											"name": "memPtr",
											"nodeType": "YulIdentifier",
											"src": "1853:6:2"
										}
									]
								}
							]
						},
						"name": "allocate_unbounded",
						"nodeType": "YulFunctionDefinition",
						"returnVariables": [
							{
								"name": "memPtr",
								"nodeType": "YulTypedName",
								"src": "1836:6:2",
								"type": ""
							}
						],
						"src": "1803:75:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "1951:241:2",
							"statements": [
								{
									"body": {
										"nodeType": "YulBlock",
										"src": "2056:22:2",
										"statements": [
											{
												"expression": {
													"arguments": [],
													"functionName": {
														"name": "panic_error_0x41",
														"nodeType": "YulIdentifier",
														"src": "2058:16:2"
													},
													"nodeType": "YulFunctionCall",
													"src": "2058:18:2"
												},
												"nodeType": "YulExpressionStatement",
												"src": "2058:18:2"
											}
										]
									},
									"condition": {
										"arguments": [
											{
												"name": "length",
												"nodeType": "YulIdentifier",
												"src": "2028:6:2"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "2036:18:2",
												"type": "",
												"value": "0xffffffffffffffff"
											}
										],
										"functionName": {
											"name": "gt",
											"nodeType": "YulIdentifier",
											"src": "2025:2:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "2025:30:2"
									},
									"nodeType": "YulIf",
									"src": "2022:56:2"
								},
								{
									"nodeType": "YulAssignment",
									"src": "2088:37:2",
									"value": {
										"arguments": [
											{
												"name": "length",
												"nodeType": "YulIdentifier",
												"src": "2118:6:2"
											}
										],
										"functionName": {
											"name": "round_up_to_mul_of_32",
											"nodeType": "YulIdentifier",
											"src": "2096:21:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "2096:29:2"
									},
									"variableNames": [
										{
											"name": "size",
											"nodeType": "YulIdentifier",
											"src": "2088:4:2"
										}
									]
								},
								{
									"nodeType": "YulAssignment",
									"src": "2162:23:2",
									"value": {
										"arguments": [
											{
												"name": "size",
												"nodeType": "YulIdentifier",
												"src": "2174:4:2"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "2180:4:2",
												"type": "",
												"value": "0x20"
											}
										],
										"functionName": {
											"name": "add",
											"nodeType": "YulIdentifier",
											"src": "2170:3:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "2170:15:2"
									},
									"variableNames": [
										{
											"name": "size",
											"nodeType": "YulIdentifier",
											"src": "2162:4:2"
										}
									]
								}
							]
						},
						"name": "array_allocation_size_t_string_memory_ptr",
						"nodeType": "YulFunctionDefinition",
						"parameters": [
							{
								"name": "length",
								"nodeType": "YulTypedName",
								"src": "1935:6:2",
								"type": ""
							}
						],
						"returnVariables": [
							{
								"name": "size",
								"nodeType": "YulTypedName",
								"src": "1946:4:2",
								"type": ""
							}
						],
						"src": "1884:308:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "2247:258:2",
							"statements": [
								{
									"nodeType": "YulVariableDeclaration",
									"src": "2257:10:2",
									"value": {
										"kind": "number",
										"nodeType": "YulLiteral",
										"src": "2266:1:2",
										"type": "",
										"value": "0"
									},
									"variables": [
										{
											"name": "i",
											"nodeType": "YulTypedName",
											"src": "2261:1:2",
											"type": ""
										}
									]
								},
								{
									"body": {
										"nodeType": "YulBlock",
										"src": "2326:63:2",
										"statements": [
											{
												"expression": {
													"arguments": [
														{
															"arguments": [
																{
																	"name": "dst",
																	"nodeType": "YulIdentifier",
																	"src": "2351:3:2"
																},
																{
																	"name": "i",
																	"nodeType": "YulIdentifier",
																	"src": "2356:1:2"
																}
															],
															"functionName": {
																"name": "add",
																"nodeType": "YulIdentifier",
																"src": "2347:3:2"
															},
															"nodeType": "YulFunctionCall",
															"src": "2347:11:2"
														},
														{
															"arguments": [
																{
																	"arguments": [
																		{
																			"name": "src",
																			"nodeType": "YulIdentifier",
																			"src": "2370:3:2"
																		},
																		{
																			"name": "i",
																			"nodeType": "YulIdentifier",
																			"src": "2375:1:2"
																		}
																	],
																	"functionName": {
																		"name": "add",
																		"nodeType": "YulIdentifier",
																		"src": "2366:3:2"
																	},
																	"nodeType": "YulFunctionCall",
																	"src": "2366:11:2"
																}
															],
															"functionName": {
																"name": "mload",
																"nodeType": "YulIdentifier",
																"src": "2360:5:2"
															},
															"nodeType": "YulFunctionCall",
															"src": "2360:18:2"
														}
													],
													"functionName": {
														"name": "mstore",
														"nodeType": "YulIdentifier",
														"src": "2340:6:2"
													},
													"nodeType": "YulFunctionCall",
													"src": "2340:39:2"
												},
												"nodeType": "YulExpressionStatement",
												"src": "2340:39:2"
											}
										]
									},
									"condition": {
										"arguments": [
											{
												"name": "i",
												"nodeType": "YulIdentifier",
												"src": "2287:1:2"
											},
											{
												"name": "length",
												"nodeType": "YulIdentifier",
												"src": "2290:6:2"
											}
										],
										"functionName": {
											"name": "lt",
											"nodeType": "YulIdentifier",
											"src": "2284:2:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "2284:13:2"
									},
									"nodeType": "YulForLoop",
									"post": {
										"nodeType": "YulBlock",
										"src": "2298:19:2",
										"statements": [
											{
												"nodeType": "YulAssignment",
												"src": "2300:15:2",
												"value": {
													"arguments": [
														{
															"name": "i",
															"nodeType": "YulIdentifier",
															"src": "2309:1:2"
														},
														{
															"kind": "number",
															"nodeType": "YulLiteral",
															"src": "2312:2:2",
															"type": "",
															"value": "32"
														}
													],
													"functionName": {
														"name": "add",
														"nodeType": "YulIdentifier",
														"src": "2305:3:2"
													},
													"nodeType": "YulFunctionCall",
													"src": "2305:10:2"
												},
												"variableNames": [
													{
														"name": "i",
														"nodeType": "YulIdentifier",
														"src": "2300:1:2"
													}
												]
											}
										]
									},
									"pre": {
										"nodeType": "YulBlock",
										"src": "2280:3:2",
										"statements": []
									},
									"src": "2276:113:2"
								},
								{
									"body": {
										"nodeType": "YulBlock",
										"src": "2423:76:2",
										"statements": [
											{
												"expression": {
													"arguments": [
														{
															"arguments": [
																{
																	"name": "dst",
																	"nodeType": "YulIdentifier",
																	"src": "2473:3:2"
																},
																{
																	"name": "length",
																	"nodeType": "YulIdentifier",
																	"src": "2478:6:2"
																}
															],
															"functionName": {
																"name": "add",
																"nodeType": "YulIdentifier",
																"src": "2469:3:2"
															},
															"nodeType": "YulFunctionCall",
															"src": "2469:16:2"
														},
														{
															"kind": "number",
															"nodeType": "YulLiteral",
															"src": "2487:1:2",
															"type": "",
															"value": "0"
														}
													],
													"functionName": {
														"name": "mstore",
														"nodeType": "YulIdentifier",
														"src": "2462:6:2"
													},
													"nodeType": "YulFunctionCall",
													"src": "2462:27:2"
												},
												"nodeType": "YulExpressionStatement",
												"src": "2462:27:2"
											}
										]
									},
									"condition": {
										"arguments": [
											{
												"name": "i",
												"nodeType": "YulIdentifier",
												"src": "2404:1:2"
											},
											{
												"name": "length",
												"nodeType": "YulIdentifier",
												"src": "2407:6:2"
											}
										],
										"functionName": {
											"name": "gt",
											"nodeType": "YulIdentifier",
											"src": "2401:2:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "2401:13:2"
									},
									"nodeType": "YulIf",
									"src": "2398:101:2"
								}
							]
						},
						"name": "copy_memory_to_memory",
						"nodeType": "YulFunctionDefinition",
						"parameters": [
							{
								"name": "src",
								"nodeType": "YulTypedName",
								"src": "2229:3:2",
								"type": ""
							},
							{
								"name": "dst",
								"nodeType": "YulTypedName",
								"src": "2234:3:2",
								"type": ""
							},
							{
								"name": "length",
								"nodeType": "YulTypedName",
								"src": "2239:6:2",
								"type": ""
							}
						],
						"src": "2198:307:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "2562:269:2",
							"statements": [
								{
									"nodeType": "YulAssignment",
									"src": "2572:22:2",
									"value": {
										"arguments": [
											{
												"name": "data",
												"nodeType": "YulIdentifier",
												"src": "2586:4:2"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "2592:1:2",
												"type": "",
												"value": "2"
											}
										],
										"functionName": {
											"name": "div",
											"nodeType": "YulIdentifier",
											"src": "2582:3:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "2582:12:2"
									},
									"variableNames": [
										{
											"name": "length",
											"nodeType": "YulIdentifier",
											"src": "2572:6:2"
										}
									]
								},
								{
									"nodeType": "YulVariableDeclaration",
									"src": "2603:38:2",
									"value": {
										"arguments": [
											{
												"name": "data",
												"nodeType": "YulIdentifier",
												"src": "2633:4:2"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "2639:1:2",
												"type": "",
												"value": "1"
											}
										],
										"functionName": {
											"name": "and",
											"nodeType": "YulIdentifier",
											"src": "2629:3:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "2629:12:2"
									},
									"variables": [
										{
											"name": "outOfPlaceEncoding",
											"nodeType": "YulTypedName",
											"src": "2607:18:2",
											"type": ""
										}
									]
								},
								{
									"body": {
										"nodeType": "YulBlock",
										"src": "2680:51:2",
										"statements": [
											{
												"nodeType": "YulAssignment",
												"src": "2694:27:2",
												"value": {
													"arguments": [
														{
															"name": "length",
															"nodeType": "YulIdentifier",
															"src": "2708:6:2"
														},
														{
															"kind": "number",
															"nodeType": "YulLiteral",
															"src": "2716:4:2",
															"type": "",
															"value": "0x7f"
														}
													],
													"functionName": {
														"name": "and",
														"nodeType": "YulIdentifier",
														"src": "2704:3:2"
													},
													"nodeType": "YulFunctionCall",
													"src": "2704:17:2"
												},
												"variableNames": [
													{
														"name": "length",
														"nodeType": "YulIdentifier",
														"src": "2694:6:2"
													}
												]
											}
										]
									},
									"condition": {
										"arguments": [
											{
												"name": "outOfPlaceEncoding",
												"nodeType": "YulIdentifier",
												"src": "2660:18:2"
											}
										],
										"functionName": {
											"name": "iszero",
											"nodeType": "YulIdentifier",
											"src": "2653:6:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "2653:26:2"
									},
									"nodeType": "YulIf",
									"src": "2650:81:2"
								},
								{
									"body": {
										"nodeType": "YulBlock",
										"src": "2783:42:2",
										"statements": [
											{
												"expression": {
													"arguments": [],
													"functionName": {
														"name": "panic_error_0x22",
														"nodeType": "YulIdentifier",
														"src": "2797:16:2"
													},
													"nodeType": "YulFunctionCall",
													"src": "2797:18:2"
												},
												"nodeType": "YulExpressionStatement",
												"src": "2797:18:2"
											}
										]
									},
									"condition": {
										"arguments": [
											{
												"name": "outOfPlaceEncoding",
												"nodeType": "YulIdentifier",
												"src": "2747:18:2"
											},
											{
												"arguments": [
													{
														"name": "length",
														"nodeType": "YulIdentifier",
														"src": "2770:6:2"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "2778:2:2",
														"type": "",
														"value": "32"
													}
												],
												"functionName": {
													"name": "lt",
													"nodeType": "YulIdentifier",
													"src": "2767:2:2"
												},
												"nodeType": "YulFunctionCall",
												"src": "2767:14:2"
											}
										],
										"functionName": {
											"name": "eq",
											"nodeType": "YulIdentifier",
											"src": "2744:2:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "2744:38:2"
									},
									"nodeType": "YulIf",
									"src": "2741:84:2"
								}
							]
						},
						"name": "extract_byte_array_length",
						"nodeType": "YulFunctionDefinition",
						"parameters": [
							{
								"name": "data",
								"nodeType": "YulTypedName",
								"src": "2546:4:2",
								"type": ""
							}
						],
						"returnVariables": [
							{
								"name": "length",
								"nodeType": "YulTypedName",
								"src": "2555:6:2",
								"type": ""
							}
						],
						"src": "2511:320:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "2880:238:2",
							"statements": [
								{
									"nodeType": "YulVariableDeclaration",
									"src": "2890:58:2",
									"value": {
										"arguments": [
											{
												"name": "memPtr",
												"nodeType": "YulIdentifier",
												"src": "2912:6:2"
											},
											{
												"arguments": [
													{
														"name": "size",
														"nodeType": "YulIdentifier",
														"src": "2942:4:2"
													}
												],
												"functionName": {
													"name": "round_up_to_mul_of_32",
													"nodeType": "YulIdentifier",
													"src": "2920:21:2"
												},
												"nodeType": "YulFunctionCall",
												"src": "2920:27:2"
											}
										],
										"functionName": {
											"name": "add",
											"nodeType": "YulIdentifier",
											"src": "2908:3:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "2908:40:2"
									},
									"variables": [
										{
											"name": "newFreePtr",
											"nodeType": "YulTypedName",
											"src": "2894:10:2",
											"type": ""
										}
									]
								},
								{
									"body": {
										"nodeType": "YulBlock",
										"src": "3059:22:2",
										"statements": [
											{
												"expression": {
													"arguments": [],
													"functionName": {
														"name": "panic_error_0x41",
														"nodeType": "YulIdentifier",
														"src": "3061:16:2"
													},
													"nodeType": "YulFunctionCall",
													"src": "3061:18:2"
												},
												"nodeType": "YulExpressionStatement",
												"src": "3061:18:2"
											}
										]
									},
									"condition": {
										"arguments": [
											{
												"arguments": [
													{
														"name": "newFreePtr",
														"nodeType": "YulIdentifier",
														"src": "3002:10:2"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "3014:18:2",
														"type": "",
														"value": "0xffffffffffffffff"
													}
												],
												"functionName": {
													"name": "gt",
													"nodeType": "YulIdentifier",
													"src": "2999:2:2"
												},
												"nodeType": "YulFunctionCall",
												"src": "2999:34:2"
											},
											{
												"arguments": [
													{
														"name": "newFreePtr",
														"nodeType": "YulIdentifier",
														"src": "3038:10:2"
													},
													{
														"name": "memPtr",
														"nodeType": "YulIdentifier",
														"src": "3050:6:2"
													}
												],
												"functionName": {
													"name": "lt",
													"nodeType": "YulIdentifier",
													"src": "3035:2:2"
												},
												"nodeType": "YulFunctionCall",
												"src": "3035:22:2"
											}
										],
										"functionName": {
											"name": "or",
											"nodeType": "YulIdentifier",
											"src": "2996:2:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "2996:62:2"
									},
									"nodeType": "YulIf",
									"src": "2993:88:2"
								},
								{
									"expression": {
										"arguments": [
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "3097:2:2",
												"type": "",
												"value": "64"
											},
											{
												"name": "newFreePtr",
												"nodeType": "YulIdentifier",
												"src": "3101:10:2"
											}
										],
										"functionName": {
											"name": "mstore",
											"nodeType": "YulIdentifier",
											"src": "3090:6:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "3090:22:2"
									},
									"nodeType": "YulExpressionStatement",
									"src": "3090:22:2"
								}
							]
						},
						"name": "finalize_allocation",
						"nodeType": "YulFunctionDefinition",
						"parameters": [
							{
								"name": "memPtr",
								"nodeType": "YulTypedName",
								"src": "2866:6:2",
								"type": ""
							},
							{
								"name": "size",
								"nodeType": "YulTypedName",
								"src": "2874:4:2",
								"type": ""
							}
						],
						"src": "2837:281:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "3152:152:2",
							"statements": [
								{
									"expression": {
										"arguments": [
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "3169:1:2",
												"type": "",
												"value": "0"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "3172:77:2",
												"type": "",
												"value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
											}
										],
										"functionName": {
											"name": "mstore",
											"nodeType": "YulIdentifier",
											"src": "3162:6:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "3162:88:2"
									},
									"nodeType": "YulExpressionStatement",
									"src": "3162:88:2"
								},
								{
									"expression": {
										"arguments": [
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "3266:1:2",
												"type": "",
												"value": "4"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "3269:4:2",
												"type": "",
												"value": "0x22"
											}
										],
										"functionName": {
											"name": "mstore",
											"nodeType": "YulIdentifier",
											"src": "3259:6:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "3259:15:2"
									},
									"nodeType": "YulExpressionStatement",
									"src": "3259:15:2"
								},
								{
									"expression": {
										"arguments": [
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "3290:1:2",
												"type": "",
												"value": "0"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "3293:4:2",
												"type": "",
												"value": "0x24"
											}
										],
										"functionName": {
											"name": "revert",
											"nodeType": "YulIdentifier",
											"src": "3283:6:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "3283:15:2"
									},
									"nodeType": "YulExpressionStatement",
									"src": "3283:15:2"
								}
							]
						},
						"name": "panic_error_0x22",
						"nodeType": "YulFunctionDefinition",
						"src": "3124:180:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "3338:152:2",
							"statements": [
								{
									"expression": {
										"arguments": [
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "3355:1:2",
												"type": "",
												"value": "0"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "3358:77:2",
												"type": "",
												"value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
											}
										],
										"functionName": {
											"name": "mstore",
											"nodeType": "YulIdentifier",
											"src": "3348:6:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "3348:88:2"
									},
									"nodeType": "YulExpressionStatement",
									"src": "3348:88:2"
								},
								{
									"expression": {
										"arguments": [
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "3452:1:2",
												"type": "",
												"value": "4"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "3455:4:2",
												"type": "",
												"value": "0x41"
											}
										],
										"functionName": {
											"name": "mstore",
											"nodeType": "YulIdentifier",
											"src": "3445:6:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "3445:15:2"
									},
									"nodeType": "YulExpressionStatement",
									"src": "3445:15:2"
								},
								{
									"expression": {
										"arguments": [
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "3476:1:2",
												"type": "",
												"value": "0"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "3479:4:2",
												"type": "",
												"value": "0x24"
											}
										],
										"functionName": {
											"name": "revert",
											"nodeType": "YulIdentifier",
											"src": "3469:6:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "3469:15:2"
									},
									"nodeType": "YulExpressionStatement",
									"src": "3469:15:2"
								}
							]
						},
						"name": "panic_error_0x41",
						"nodeType": "YulFunctionDefinition",
						"src": "3310:180:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "3585:28:2",
							"statements": [
								{
									"expression": {
										"arguments": [
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "3602:1:2",
												"type": "",
												"value": "0"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "3605:1:2",
												"type": "",
												"value": "0"
											}
										],
										"functionName": {
											"name": "revert",
											"nodeType": "YulIdentifier",
											"src": "3595:6:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "3595:12:2"
									},
									"nodeType": "YulExpressionStatement",
									"src": "3595:12:2"
								}
							]
						},
						"name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
						"nodeType": "YulFunctionDefinition",
						"src": "3496:117:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "3708:28:2",
							"statements": [
								{
									"expression": {
										"arguments": [
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "3725:1:2",
												"type": "",
												"value": "0"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "3728:1:2",
												"type": "",
												"value": "0"
											}
										],
										"functionName": {
											"name": "revert",
											"nodeType": "YulIdentifier",
											"src": "3718:6:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "3718:12:2"
									},
									"nodeType": "YulExpressionStatement",
									"src": "3718:12:2"
								}
							]
						},
						"name": "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae",
						"nodeType": "YulFunctionDefinition",
						"src": "3619:117:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "3831:28:2",
							"statements": [
								{
									"expression": {
										"arguments": [
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "3848:1:2",
												"type": "",
												"value": "0"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "3851:1:2",
												"type": "",
												"value": "0"
											}
										],
										"functionName": {
											"name": "revert",
											"nodeType": "YulIdentifier",
											"src": "3841:6:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "3841:12:2"
									},
									"nodeType": "YulExpressionStatement",
									"src": "3841:12:2"
								}
							]
						},
						"name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
						"nodeType": "YulFunctionDefinition",
						"src": "3742:117:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "3954:28:2",
							"statements": [
								{
									"expression": {
										"arguments": [
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "3971:1:2",
												"type": "",
												"value": "0"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "3974:1:2",
												"type": "",
												"value": "0"
											}
										],
										"functionName": {
											"name": "revert",
											"nodeType": "YulIdentifier",
											"src": "3964:6:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "3964:12:2"
									},
									"nodeType": "YulExpressionStatement",
									"src": "3964:12:2"
								}
							]
						},
						"name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
						"nodeType": "YulFunctionDefinition",
						"src": "3865:117:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "4036:54:2",
							"statements": [
								{
									"nodeType": "YulAssignment",
									"src": "4046:38:2",
									"value": {
										"arguments": [
											{
												"arguments": [
													{
														"name": "value",
														"nodeType": "YulIdentifier",
														"src": "4064:5:2"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "4071:2:2",
														"type": "",
														"value": "31"
													}
												],
												"functionName": {
													"name": "add",
													"nodeType": "YulIdentifier",
													"src": "4060:3:2"
												},
												"nodeType": "YulFunctionCall",
												"src": "4060:14:2"
											},
											{
												"arguments": [
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "4080:2:2",
														"type": "",
														"value": "31"
													}
												],
												"functionName": {
													"name": "not",
													"nodeType": "YulIdentifier",
													"src": "4076:3:2"
												},
												"nodeType": "YulFunctionCall",
												"src": "4076:7:2"
											}
										],
										"functionName": {
											"name": "and",
											"nodeType": "YulIdentifier",
											"src": "4056:3:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "4056:28:2"
									},
									"variableNames": [
										{
											"name": "result",
											"nodeType": "YulIdentifier",
											"src": "4046:6:2"
										}
									]
								}
							]
						},
						"name": "round_up_to_mul_of_32",
						"nodeType": "YulFunctionDefinition",
						"parameters": [
							{
								"name": "value",
								"nodeType": "YulTypedName",
								"src": "4019:5:2",
								"type": ""
							}
						],
						"returnVariables": [
							{
								"name": "result",
								"nodeType": "YulTypedName",
								"src": "4029:6:2",
								"type": ""
							}
						],
						"src": "3988:102:2"
					}
				]
			},
			"contents": "{\n\n    function abi_decode_available_length_t_string_memory_ptr_fromMemory(src, length, end) -> array {\n        array := allocate_memory(array_allocation_size_t_string_memory_ptr(length))\n        mstore(array, length)\n        let dst := add(array, 0x20)\n        if gt(add(src, length), end) { revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() }\n        copy_memory_to_memory(src, dst, length)\n    }\n\n    // string\n    function abi_decode_t_string_memory_ptr_fromMemory(offset, end) -> array {\n        if iszero(slt(add(offset, 0x1f), end)) { revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() }\n        let length := mload(offset)\n        array := abi_decode_available_length_t_string_memory_ptr_fromMemory(add(offset, 0x20), length, end)\n    }\n\n    function abi_decode_tuple_t_string_memory_ptrt_string_memory_ptr_fromMemory(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := mload(add(headStart, 0))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value0 := abi_decode_t_string_memory_ptr_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := mload(add(headStart, 32))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value1 := abi_decode_t_string_memory_ptr_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function allocate_memory(size) -> memPtr {\n        memPtr := allocate_unbounded()\n        finalize_allocation(memPtr, size)\n    }\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function array_allocation_size_t_string_memory_ptr(length) -> size {\n        // Make sure we can allocate memory without overflow\n        if gt(length, 0xffffffffffffffff) { panic_error_0x41() }\n\n        size := round_up_to_mul_of_32(length)\n\n        // add length slot\n        size := add(size, 0x20)\n\n    }\n\n    function copy_memory_to_memory(src, dst, length) {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        if gt(i, length)\n        {\n            // clear end\n            mstore(add(dst, length), 0)\n        }\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function finalize_allocation(memPtr, size) {\n        let newFreePtr := add(memPtr, round_up_to_mul_of_32(size))\n        // protect against overflow\n        if or(gt(newFreePtr, 0xffffffffffffffff), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() {\n        revert(0, 0)\n    }\n\n    function revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n}\n",
			"id": 2,
			"language": "Yul",
			"name": "#utility.yul"
		}
	],
	"linkReferences": {},
	"object": "60806040526012600560006101000a81548160ff021916908360ff1602179055503480156200002d57600080fd5b5060405162001166380380620011668339818101604052810190620000539190620001bb565b81600390805190602001906200006b9291906200008d565b508060049080519060200190620000849291906200008d565b505050620003c4565b8280546200009b90620002d5565b90600052602060002090601f016020900481019282620000bf57600085556200010b565b82601f10620000da57805160ff19168380011785556200010b565b828001600101855582156200010b579182015b828111156200010a578251825591602001919060010190620000ed565b5b5090506200011a91906200011e565b5090565b5b80821115620001395760008160009055506001016200011f565b5090565b6000620001546200014e8462000269565b62000240565b905082815260208101848484011115620001735762000172620003a4565b5b620001808482856200029f565b509392505050565b600082601f830112620001a0576200019f6200039f565b5b8151620001b28482602086016200013d565b91505092915050565b60008060408385031215620001d557620001d4620003ae565b5b600083015167ffffffffffffffff811115620001f657620001f5620003a9565b5b620002048582860162000188565b925050602083015167ffffffffffffffff811115620002285762000227620003a9565b5b620002368582860162000188565b9150509250929050565b60006200024c6200025f565b90506200025a82826200030b565b919050565b6000604051905090565b600067ffffffffffffffff82111562000287576200028662000370565b5b6200029282620003b3565b9050602081019050919050565b60005b83811015620002bf578082015181840152602081019050620002a2565b83811115620002cf576000848401525b50505050565b60006002820490506001821680620002ee57607f821691505b6020821081141562000305576200030462000341565b5b50919050565b6200031682620003b3565b810181811067ffffffffffffffff8211171562000338576200033762000370565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b610d9280620003d46000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c806342966c681161007157806342966c681461016857806370a082311461018457806395d89b41146101b4578063a0712d68146101d2578063a9059cbb146101ee578063dd62ed3e1461021e576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100fc57806323b872dd1461011a578063313ce5671461014a575b600080fd5b6100b661024e565b6040516100c39190610b02565b60405180910390f35b6100e660048036038101906100e19190610a14565b6102dc565b6040516100f39190610ae7565b60405180910390f35b6101046103ce565b6040516101119190610b24565b60405180910390f35b610134600480360381019061012f91906109c1565b6103d4565b6040516101419190610ae7565b60405180910390f35b610152610583565b60405161015f9190610b3f565b60405180910390f35b610182600480360381019061017d9190610a54565b610596565b005b61019e60048036038101906101999190610954565b61066d565b6040516101ab9190610b24565b60405180910390f35b6101bc610685565b6040516101c99190610b02565b60405180910390f35b6101ec60048036038101906101e79190610a54565b610713565b005b61020860048036038101906102039190610a14565b6107ea565b6040516102159190610ae7565b60405180910390f35b61023860048036038101906102339190610981565b610905565b6040516102459190610b24565b60405180910390f35b6003805461025b90610c88565b80601f016020809104026020016040519081016040528092919081815260200182805461028790610c88565b80156102d45780601f106102a9576101008083540402835291602001916102d4565b820191906000526020600020905b8154815290600101906020018083116102b757829003601f168201915b505050505081565b600081600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516103bc9190610b24565b60405180910390a36001905092915050565b60025481565b600081600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546104629190610bcc565b92505081905550816000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546104b79190610bcc565b92505081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461050c9190610b76565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516105709190610b24565b60405180910390a3600190509392505050565b600560009054906101000a900460ff1681565b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546105e49190610bcc565b9250508190555080600260008282546105fd9190610bcc565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516106629190610b24565b60405180910390a350565b60006020528060005260406000206000915090505481565b6004805461069290610c88565b80601f01602080910402602001604051908101604052809291908181526020018280546106be90610c88565b801561070b5780601f106106e05761010080835404028352916020019161070b565b820191906000526020600020905b8154815290600101906020018083116106ee57829003601f168201915b505050505081565b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546107619190610b76565b92505081905550806002600082825461077a9190610b76565b925050819055503373ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516107df9190610b24565b60405180910390a350565b6000816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461083a9190610bcc565b92505081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461088f9190610b76565b925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516108f39190610b24565b60405180910390a36001905092915050565b6001602052816000526040600020602052806000526040600020600091509150505481565b60008135905061093981610d2e565b92915050565b60008135905061094e81610d45565b92915050565b60006020828403121561096a57610969610d18565b5b60006109788482850161092a565b91505092915050565b6000806040838503121561099857610997610d18565b5b60006109a68582860161092a565b92505060206109b78582860161092a565b9150509250929050565b6000806000606084860312156109da576109d9610d18565b5b60006109e88682870161092a565b93505060206109f98682870161092a565b9250506040610a0a8682870161093f565b9150509250925092565b60008060408385031215610a2b57610a2a610d18565b5b6000610a398582860161092a565b9250506020610a4a8582860161093f565b9150509250929050565b600060208284031215610a6a57610a69610d18565b5b6000610a788482850161093f565b91505092915050565b610a8a81610c12565b82525050565b6000610a9b82610b5a565b610aa58185610b65565b9350610ab5818560208601610c55565b610abe81610d1d565b840191505092915050565b610ad281610c3e565b82525050565b610ae181610c48565b82525050565b6000602082019050610afc6000830184610a81565b92915050565b60006020820190508181036000830152610b1c8184610a90565b905092915050565b6000602082019050610b396000830184610ac9565b92915050565b6000602082019050610b546000830184610ad8565b92915050565b600081519050919050565b600082825260208201905092915050565b6000610b8182610c3e565b9150610b8c83610c3e565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610bc157610bc0610cba565b5b828201905092915050565b6000610bd782610c3e565b9150610be283610c3e565b925082821015610bf557610bf4610cba565b5b828203905092915050565b6000610c0b82610c1e565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b83811015610c73578082015181840152602081019050610c58565b83811115610c82576000848401525b50505050565b60006002820490506001821680610ca057607f821691505b60208210811415610cb457610cb3610ce9565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600080fd5b6000601f19601f8301169050919050565b610d3781610c00565b8114610d4257600080fd5b50565b610d4e81610c3e565b8114610d5957600080fd5b5056fea264697066735822122086bd260d05e9a064ca29290d396a1afd0c8d4e43f3a7e07405a02024fb052b7764736f6c63430008070033",
	"opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x12 PUSH1 0x5 PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH1 0xFF MUL NOT AND SWAP1 DUP4 PUSH1 0xFF AND MUL OR SWAP1 SSTORE POP CALLVALUE DUP1 ISZERO PUSH3 0x2D JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x40 MLOAD PUSH3 0x1166 CODESIZE SUB DUP1 PUSH3 0x1166 DUP4 CODECOPY DUP2 DUP2 ADD PUSH1 0x40 MSTORE DUP2 ADD SWAP1 PUSH3 0x53 SWAP2 SWAP1 PUSH3 0x1BB JUMP JUMPDEST DUP2 PUSH1 0x3 SWAP1 DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 PUSH3 0x6B SWAP3 SWAP2 SWAP1 PUSH3 0x8D JUMP JUMPDEST POP DUP1 PUSH1 0x4 SWAP1 DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 PUSH3 0x84 SWAP3 SWAP2 SWAP1 PUSH3 0x8D JUMP JUMPDEST POP POP POP PUSH3 0x3C4 JUMP JUMPDEST DUP3 DUP1 SLOAD PUSH3 0x9B SWAP1 PUSH3 0x2D5 JUMP JUMPDEST SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x1F ADD PUSH1 0x20 SWAP1 DIV DUP2 ADD SWAP3 DUP3 PUSH3 0xBF JUMPI PUSH1 0x0 DUP6 SSTORE PUSH3 0x10B JUMP JUMPDEST DUP3 PUSH1 0x1F LT PUSH3 0xDA JUMPI DUP1 MLOAD PUSH1 0xFF NOT AND DUP4 DUP1 ADD OR DUP6 SSTORE PUSH3 0x10B JUMP JUMPDEST DUP3 DUP1 ADD PUSH1 0x1 ADD DUP6 SSTORE DUP3 ISZERO PUSH3 0x10B JUMPI SWAP2 DUP3 ADD JUMPDEST DUP3 DUP2 GT ISZERO PUSH3 0x10A JUMPI DUP3 MLOAD DUP3 SSTORE SWAP2 PUSH1 0x20 ADD SWAP2 SWAP1 PUSH1 0x1 ADD SWAP1 PUSH3 0xED JUMP JUMPDEST JUMPDEST POP SWAP1 POP PUSH3 0x11A SWAP2 SWAP1 PUSH3 0x11E JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST JUMPDEST DUP1 DUP3 GT ISZERO PUSH3 0x139 JUMPI PUSH1 0x0 DUP2 PUSH1 0x0 SWAP1 SSTORE POP PUSH1 0x1 ADD PUSH3 0x11F JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH3 0x154 PUSH3 0x14E DUP5 PUSH3 0x269 JUMP JUMPDEST PUSH3 0x240 JUMP JUMPDEST SWAP1 POP DUP3 DUP2 MSTORE PUSH1 0x20 DUP2 ADD DUP5 DUP5 DUP5 ADD GT ISZERO PUSH3 0x173 JUMPI PUSH3 0x172 PUSH3 0x3A4 JUMP JUMPDEST JUMPDEST PUSH3 0x180 DUP5 DUP3 DUP6 PUSH3 0x29F JUMP JUMPDEST POP SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 PUSH1 0x1F DUP4 ADD SLT PUSH3 0x1A0 JUMPI PUSH3 0x19F PUSH3 0x39F JUMP JUMPDEST JUMPDEST DUP2 MLOAD PUSH3 0x1B2 DUP5 DUP3 PUSH1 0x20 DUP7 ADD PUSH3 0x13D JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH3 0x1D5 JUMPI PUSH3 0x1D4 PUSH3 0x3AE JUMP JUMPDEST JUMPDEST PUSH1 0x0 DUP4 ADD MLOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH3 0x1F6 JUMPI PUSH3 0x1F5 PUSH3 0x3A9 JUMP JUMPDEST JUMPDEST PUSH3 0x204 DUP6 DUP3 DUP7 ADD PUSH3 0x188 JUMP JUMPDEST SWAP3 POP POP PUSH1 0x20 DUP4 ADD MLOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH3 0x228 JUMPI PUSH3 0x227 PUSH3 0x3A9 JUMP JUMPDEST JUMPDEST PUSH3 0x236 DUP6 DUP3 DUP7 ADD PUSH3 0x188 JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH3 0x24C PUSH3 0x25F JUMP JUMPDEST SWAP1 POP PUSH3 0x25A DUP3 DUP3 PUSH3 0x30B JUMP JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x40 MLOAD SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT ISZERO PUSH3 0x287 JUMPI PUSH3 0x286 PUSH3 0x370 JUMP JUMPDEST JUMPDEST PUSH3 0x292 DUP3 PUSH3 0x3B3 JUMP JUMPDEST SWAP1 POP PUSH1 0x20 DUP2 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH3 0x2BF JUMPI DUP1 DUP3 ADD MLOAD DUP2 DUP5 ADD MSTORE PUSH1 0x20 DUP2 ADD SWAP1 POP PUSH3 0x2A2 JUMP JUMPDEST DUP4 DUP2 GT ISZERO PUSH3 0x2CF JUMPI PUSH1 0x0 DUP5 DUP5 ADD MSTORE JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x2 DUP3 DIV SWAP1 POP PUSH1 0x1 DUP3 AND DUP1 PUSH3 0x2EE JUMPI PUSH1 0x7F DUP3 AND SWAP2 POP JUMPDEST PUSH1 0x20 DUP3 LT DUP2 EQ ISZERO PUSH3 0x305 JUMPI PUSH3 0x304 PUSH3 0x341 JUMP JUMPDEST JUMPDEST POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH3 0x316 DUP3 PUSH3 0x3B3 JUMP JUMPDEST DUP2 ADD DUP2 DUP2 LT PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT OR ISZERO PUSH3 0x338 JUMPI PUSH3 0x337 PUSH3 0x370 JUMP JUMPDEST JUMPDEST DUP1 PUSH1 0x40 MSTORE POP POP POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x22 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x41 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH1 0x1F NOT PUSH1 0x1F DUP4 ADD AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0xD92 DUP1 PUSH3 0x3D4 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0xA9 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x42966C68 GT PUSH2 0x71 JUMPI DUP1 PUSH4 0x42966C68 EQ PUSH2 0x168 JUMPI DUP1 PUSH4 0x70A08231 EQ PUSH2 0x184 JUMPI DUP1 PUSH4 0x95D89B41 EQ PUSH2 0x1B4 JUMPI DUP1 PUSH4 0xA0712D68 EQ PUSH2 0x1D2 JUMPI DUP1 PUSH4 0xA9059CBB EQ PUSH2 0x1EE JUMPI DUP1 PUSH4 0xDD62ED3E EQ PUSH2 0x21E JUMPI PUSH2 0xA9 JUMP JUMPDEST DUP1 PUSH4 0x6FDDE03 EQ PUSH2 0xAE JUMPI DUP1 PUSH4 0x95EA7B3 EQ PUSH2 0xCC JUMPI DUP1 PUSH4 0x18160DDD EQ PUSH2 0xFC JUMPI DUP1 PUSH4 0x23B872DD EQ PUSH2 0x11A JUMPI DUP1 PUSH4 0x313CE567 EQ PUSH2 0x14A JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xB6 PUSH2 0x24E JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0xC3 SWAP2 SWAP1 PUSH2 0xB02 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0xE6 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0xE1 SWAP2 SWAP1 PUSH2 0xA14 JUMP JUMPDEST PUSH2 0x2DC JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0xF3 SWAP2 SWAP1 PUSH2 0xAE7 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x104 PUSH2 0x3CE JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x111 SWAP2 SWAP1 PUSH2 0xB24 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x134 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x12F SWAP2 SWAP1 PUSH2 0x9C1 JUMP JUMPDEST PUSH2 0x3D4 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x141 SWAP2 SWAP1 PUSH2 0xAE7 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x152 PUSH2 0x583 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x15F SWAP2 SWAP1 PUSH2 0xB3F JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x182 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x17D SWAP2 SWAP1 PUSH2 0xA54 JUMP JUMPDEST PUSH2 0x596 JUMP JUMPDEST STOP JUMPDEST PUSH2 0x19E PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x199 SWAP2 SWAP1 PUSH2 0x954 JUMP JUMPDEST PUSH2 0x66D JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x1AB SWAP2 SWAP1 PUSH2 0xB24 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x1BC PUSH2 0x685 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x1C9 SWAP2 SWAP1 PUSH2 0xB02 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x1EC PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x1E7 SWAP2 SWAP1 PUSH2 0xA54 JUMP JUMPDEST PUSH2 0x713 JUMP JUMPDEST STOP JUMPDEST PUSH2 0x208 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x203 SWAP2 SWAP1 PUSH2 0xA14 JUMP JUMPDEST PUSH2 0x7EA JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x215 SWAP2 SWAP1 PUSH2 0xAE7 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x238 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x233 SWAP2 SWAP1 PUSH2 0x981 JUMP JUMPDEST PUSH2 0x905 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x245 SWAP2 SWAP1 PUSH2 0xB24 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH1 0x3 DUP1 SLOAD PUSH2 0x25B SWAP1 PUSH2 0xC88 JUMP JUMPDEST DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD PUSH2 0x287 SWAP1 PUSH2 0xC88 JUMP JUMPDEST DUP1 ISZERO PUSH2 0x2D4 JUMPI DUP1 PUSH1 0x1F LT PUSH2 0x2A9 JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x2D4 JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x2B7 JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP DUP2 JUMP JUMPDEST PUSH1 0x0 DUP2 PUSH1 0x1 PUSH1 0x0 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP6 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 DUP2 SWAP1 SSTORE POP DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x8C5BE1E5EBEC7D5BD14F71427D1E84F3DD0314C0F7B2291E5B200AC8C7C3B925 DUP5 PUSH1 0x40 MLOAD PUSH2 0x3BC SWAP2 SWAP1 PUSH2 0xB24 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 PUSH1 0x1 SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x2 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x0 DUP2 PUSH1 0x1 PUSH1 0x0 DUP7 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP3 DUP3 SLOAD PUSH2 0x462 SWAP2 SWAP1 PUSH2 0xBCC JUMP JUMPDEST SWAP3 POP POP DUP2 SWAP1 SSTORE POP DUP2 PUSH1 0x0 DUP1 DUP7 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP3 DUP3 SLOAD PUSH2 0x4B7 SWAP2 SWAP1 PUSH2 0xBCC JUMP JUMPDEST SWAP3 POP POP DUP2 SWAP1 SSTORE POP DUP2 PUSH1 0x0 DUP1 DUP6 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP3 DUP3 SLOAD PUSH2 0x50C SWAP2 SWAP1 PUSH2 0xB76 JUMP JUMPDEST SWAP3 POP POP DUP2 SWAP1 SSTORE POP DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0xDDF252AD1BE2C89B69C2B068FC378DAA952BA7F163C4A11628F55A4DF523B3EF DUP5 PUSH1 0x40 MLOAD PUSH2 0x570 SWAP2 SWAP1 PUSH2 0xB24 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 PUSH1 0x1 SWAP1 POP SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x5 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND DUP2 JUMP JUMPDEST DUP1 PUSH1 0x0 DUP1 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP3 DUP3 SLOAD PUSH2 0x5E4 SWAP2 SWAP1 PUSH2 0xBCC JUMP JUMPDEST SWAP3 POP POP DUP2 SWAP1 SSTORE POP DUP1 PUSH1 0x2 PUSH1 0x0 DUP3 DUP3 SLOAD PUSH2 0x5FD SWAP2 SWAP1 PUSH2 0xBCC JUMP JUMPDEST SWAP3 POP POP DUP2 SWAP1 SSTORE POP PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0xDDF252AD1BE2C89B69C2B068FC378DAA952BA7F163C4A11628F55A4DF523B3EF DUP4 PUSH1 0x40 MLOAD PUSH2 0x662 SWAP2 SWAP1 PUSH2 0xB24 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 MSTORE DUP1 PUSH1 0x0 MSTORE PUSH1 0x40 PUSH1 0x0 KECCAK256 PUSH1 0x0 SWAP2 POP SWAP1 POP SLOAD DUP2 JUMP JUMPDEST PUSH1 0x4 DUP1 SLOAD PUSH2 0x692 SWAP1 PUSH2 0xC88 JUMP JUMPDEST DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD PUSH2 0x6BE SWAP1 PUSH2 0xC88 JUMP JUMPDEST DUP1 ISZERO PUSH2 0x70B JUMPI DUP1 PUSH1 0x1F LT PUSH2 0x6E0 JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x70B JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x6EE JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP DUP2 JUMP JUMPDEST DUP1 PUSH1 0x0 DUP1 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP3 DUP3 SLOAD PUSH2 0x761 SWAP2 SWAP1 PUSH2 0xB76 JUMP JUMPDEST SWAP3 POP POP DUP2 SWAP1 SSTORE POP DUP1 PUSH1 0x2 PUSH1 0x0 DUP3 DUP3 SLOAD PUSH2 0x77A SWAP2 SWAP1 PUSH2 0xB76 JUMP JUMPDEST SWAP3 POP POP DUP2 SWAP1 SSTORE POP CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0xDDF252AD1BE2C89B69C2B068FC378DAA952BA7F163C4A11628F55A4DF523B3EF DUP4 PUSH1 0x40 MLOAD PUSH2 0x7DF SWAP2 SWAP1 PUSH2 0xB24 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP JUMP JUMPDEST PUSH1 0x0 DUP2 PUSH1 0x0 DUP1 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP3 DUP3 SLOAD PUSH2 0x83A SWAP2 SWAP1 PUSH2 0xBCC JUMP JUMPDEST SWAP3 POP POP DUP2 SWAP1 SSTORE POP DUP2 PUSH1 0x0 DUP1 DUP6 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP3 DUP3 SLOAD PUSH2 0x88F SWAP2 SWAP1 PUSH2 0xB76 JUMP JUMPDEST SWAP3 POP POP DUP2 SWAP1 SSTORE POP DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0xDDF252AD1BE2C89B69C2B068FC378DAA952BA7F163C4A11628F55A4DF523B3EF DUP5 PUSH1 0x40 MLOAD PUSH2 0x8F3 SWAP2 SWAP1 PUSH2 0xB24 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 PUSH1 0x1 SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x1 PUSH1 0x20 MSTORE DUP2 PUSH1 0x0 MSTORE PUSH1 0x40 PUSH1 0x0 KECCAK256 PUSH1 0x20 MSTORE DUP1 PUSH1 0x0 MSTORE PUSH1 0x40 PUSH1 0x0 KECCAK256 PUSH1 0x0 SWAP2 POP SWAP2 POP POP SLOAD DUP2 JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x939 DUP2 PUSH2 0xD2E JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x94E DUP2 PUSH2 0xD45 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x96A JUMPI PUSH2 0x969 PUSH2 0xD18 JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0x978 DUP5 DUP3 DUP6 ADD PUSH2 0x92A JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH2 0x998 JUMPI PUSH2 0x997 PUSH2 0xD18 JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0x9A6 DUP6 DUP3 DUP7 ADD PUSH2 0x92A JUMP JUMPDEST SWAP3 POP POP PUSH1 0x20 PUSH2 0x9B7 DUP6 DUP3 DUP7 ADD PUSH2 0x92A JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 PUSH1 0x60 DUP5 DUP7 SUB SLT ISZERO PUSH2 0x9DA JUMPI PUSH2 0x9D9 PUSH2 0xD18 JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0x9E8 DUP7 DUP3 DUP8 ADD PUSH2 0x92A JUMP JUMPDEST SWAP4 POP POP PUSH1 0x20 PUSH2 0x9F9 DUP7 DUP3 DUP8 ADD PUSH2 0x92A JUMP JUMPDEST SWAP3 POP POP PUSH1 0x40 PUSH2 0xA0A DUP7 DUP3 DUP8 ADD PUSH2 0x93F JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 POP SWAP3 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH2 0xA2B JUMPI PUSH2 0xA2A PUSH2 0xD18 JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0xA39 DUP6 DUP3 DUP7 ADD PUSH2 0x92A JUMP JUMPDEST SWAP3 POP POP PUSH1 0x20 PUSH2 0xA4A DUP6 DUP3 DUP7 ADD PUSH2 0x93F JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0xA6A JUMPI PUSH2 0xA69 PUSH2 0xD18 JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0xA78 DUP5 DUP3 DUP6 ADD PUSH2 0x93F JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0xA8A DUP2 PUSH2 0xC12 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0xA9B DUP3 PUSH2 0xB5A JUMP JUMPDEST PUSH2 0xAA5 DUP2 DUP6 PUSH2 0xB65 JUMP JUMPDEST SWAP4 POP PUSH2 0xAB5 DUP2 DUP6 PUSH1 0x20 DUP7 ADD PUSH2 0xC55 JUMP JUMPDEST PUSH2 0xABE DUP2 PUSH2 0xD1D JUMP JUMPDEST DUP5 ADD SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0xAD2 DUP2 PUSH2 0xC3E JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH2 0xAE1 DUP2 PUSH2 0xC48 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0xAFC PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0xA81 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0xB1C DUP2 DUP5 PUSH2 0xA90 JUMP JUMPDEST SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0xB39 PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0xAC9 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0xB54 PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0xAD8 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 MLOAD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0xB81 DUP3 PUSH2 0xC3E JUMP JUMPDEST SWAP2 POP PUSH2 0xB8C DUP4 PUSH2 0xC3E JUMP JUMPDEST SWAP3 POP DUP3 PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF SUB DUP3 GT ISZERO PUSH2 0xBC1 JUMPI PUSH2 0xBC0 PUSH2 0xCBA JUMP JUMPDEST JUMPDEST DUP3 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0xBD7 DUP3 PUSH2 0xC3E JUMP JUMPDEST SWAP2 POP PUSH2 0xBE2 DUP4 PUSH2 0xC3E JUMP JUMPDEST SWAP3 POP DUP3 DUP3 LT ISZERO PUSH2 0xBF5 JUMPI PUSH2 0xBF4 PUSH2 0xCBA JUMP JUMPDEST JUMPDEST DUP3 DUP3 SUB SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0xC0B DUP3 PUSH2 0xC1E JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 ISZERO ISZERO SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0xFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0xC73 JUMPI DUP1 DUP3 ADD MLOAD DUP2 DUP5 ADD MSTORE PUSH1 0x20 DUP2 ADD SWAP1 POP PUSH2 0xC58 JUMP JUMPDEST DUP4 DUP2 GT ISZERO PUSH2 0xC82 JUMPI PUSH1 0x0 DUP5 DUP5 ADD MSTORE JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x2 DUP3 DIV SWAP1 POP PUSH1 0x1 DUP3 AND DUP1 PUSH2 0xCA0 JUMPI PUSH1 0x7F DUP3 AND SWAP2 POP JUMPDEST PUSH1 0x20 DUP3 LT DUP2 EQ ISZERO PUSH2 0xCB4 JUMPI PUSH2 0xCB3 PUSH2 0xCE9 JUMP JUMPDEST JUMPDEST POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x22 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH1 0x1F NOT PUSH1 0x1F DUP4 ADD AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0xD37 DUP2 PUSH2 0xC00 JUMP JUMPDEST DUP2 EQ PUSH2 0xD42 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH2 0xD4E DUP2 PUSH2 0xC3E JUMP JUMPDEST DUP2 EQ PUSH2 0xD59 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 DUP7 0xBD 0x26 0xD SDIV 0xE9 LOG0 PUSH5 0xCA29290D39 PUSH11 0x1AFD0C8D4E43F3A7E07405 LOG0 KECCAK256 0x24 0xFB SDIV 0x2B PUSH24 0x64736F6C6343000807003300000000000000000000000000 ",
	"sourceMap": "88:2076:0:-:0;;;436:2;412:26;;;;;;;;;;;;;;;;;;;;528:113;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;601:5;594:4;:12;;;;;;;;;;;;:::i;:::-;;626:7;617:6;:16;;;;;;;;;;;;:::i;:::-;;528:113;;88:2076;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;7:421:2:-;96:5;121:66;137:49;179:6;137:49;:::i;:::-;121:66;:::i;:::-;112:75;;210:6;203:5;196:21;248:4;241:5;237:16;286:3;277:6;272:3;268:16;265:25;262:112;;;293:79;;:::i;:::-;262:112;383:39;415:6;410:3;405;383:39;:::i;:::-;102:326;7:421;;;;;:::o;448:355::-;515:5;564:3;557:4;549:6;545:17;541:27;531:122;;572:79;;:::i;:::-;531:122;682:6;676:13;707:90;793:3;785:6;778:4;770:6;766:17;707:90;:::i;:::-;698:99;;521:282;448:355;;;;:::o;809:853::-;908:6;916;965:2;953:9;944:7;940:23;936:32;933:119;;;971:79;;:::i;:::-;933:119;1112:1;1101:9;1097:17;1091:24;1142:18;1134:6;1131:30;1128:117;;;1164:79;;:::i;:::-;1128:117;1269:74;1335:7;1326:6;1315:9;1311:22;1269:74;:::i;:::-;1259:84;;1062:291;1413:2;1402:9;1398:18;1392:25;1444:18;1436:6;1433:30;1430:117;;;1466:79;;:::i;:::-;1430:117;1571:74;1637:7;1628:6;1617:9;1613:22;1571:74;:::i;:::-;1561:84;;1363:292;809:853;;;;;:::o;1668:129::-;1702:6;1729:20;;:::i;:::-;1719:30;;1758:33;1786:4;1778:6;1758:33;:::i;:::-;1668:129;;;:::o;1803:75::-;1836:6;1869:2;1863:9;1853:19;;1803:75;:::o;1884:308::-;1946:4;2036:18;2028:6;2025:30;2022:56;;;2058:18;;:::i;:::-;2022:56;2096:29;2118:6;2096:29;:::i;:::-;2088:37;;2180:4;2174;2170:15;2162:23;;1884:308;;;:::o;2198:307::-;2266:1;2276:113;2290:6;2287:1;2284:13;2276:113;;;2375:1;2370:3;2366:11;2360:18;2356:1;2351:3;2347:11;2340:39;2312:2;2309:1;2305:10;2300:15;;2276:113;;;2407:6;2404:1;2401:13;2398:101;;;2487:1;2478:6;2473:3;2469:16;2462:27;2398:101;2247:258;2198:307;;;:::o;2511:320::-;2555:6;2592:1;2586:4;2582:12;2572:22;;2639:1;2633:4;2629:12;2660:18;2650:81;;2716:4;2708:6;2704:17;2694:27;;2650:81;2778:2;2770:6;2767:14;2747:18;2744:38;2741:84;;;2797:18;;:::i;:::-;2741:84;2562:269;2511:320;;;:::o;2837:281::-;2920:27;2942:4;2920:27;:::i;:::-;2912:6;2908:40;3050:6;3038:10;3035:22;3014:18;3002:10;2999:34;2996:62;2993:88;;;3061:18;;:::i;:::-;2993:88;3101:10;3097:2;3090:22;2880:238;2837:281;;:::o;3124:180::-;3172:77;3169:1;3162:88;3269:4;3266:1;3259:15;3293:4;3290:1;3283:15;3310:180;3358:77;3355:1;3348:88;3455:4;3452:1;3445:15;3479:4;3476:1;3469:15;3496:117;3605:1;3602;3595:12;3619:117;3728:1;3725;3718:12;3742:117;3851:1;3848;3841:12;3865:117;3974:1;3971;3964:12;3988:102;4029:6;4080:2;4076:7;4071:2;4064:5;4060:14;4056:28;4046:38;;3988:102;;;:::o;88:2076:0:-;;;;;;;"
}

const factoryERC20 = new ethers.ContractFactory(abiERC20, bytecodeERC20, wallet1)

const contractToken = "0x5FFb6DF5D4061e9906C92135D9c6323eebE401a1"

const contractERC20 = new ethers.Contract(contractToken, abiERC20, wallet1)

const main = async() => {
    console.log("利用合约工厂部署erc20代币")
    const contractERC20 = await factoryERC20.deploy("QI Token", "QI")
    console.log(`合约地址： ${contractERC20.address}`)
    console.log("部署合约的交易详情")
    console.log(contractERC20.deployTransaction)
    console.log("等待部署上链....")
    await contractERC20.deployed()
    console.log("合约已经上链")
}

// main();
const main1 = async() => {
    console.log("调用mint函数，给自己的地址mint 10000个币")
    const contractName = await contractERC20.name()
    console.log(`合约名称：${contractName}`)
    const contractSymbol = await contractERC20.symbol()
    console.log(`合约代号：${contractSymbol}`)

    let tx = await contractERC20.mint("10000")
    console.log("等待交易上链")
    await tx.wait()
    const walletBalance = await contractERC20.balanceOf(wallet1.address)
    console.log(`mint后地址中的代币余额: ${walletBalance}`)
    const totalSupplyToken = await contractERC20.totalSupply()
    console.log(`代币总供给: ${totalSupplyToken}`)
}

const main2 = async() => {
    console.log("调用转账给v神")
    let tx = await contractERC20.transfer("vitalik.eth", 1000)
    console.log("等待上链")
    await tx.wait()
    const balanceOfQi = await contractERC20.balanceOf("vitalik.eth")
    console.log(`V神钱包代币余额: ${balanceOfQi}`)
}

main2()