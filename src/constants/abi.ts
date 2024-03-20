export const abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "rideId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "seats",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "passenger",
        type: "address",
      },
    ],
    name: "rideBooked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "rideId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "origin",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "destination",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "departuretime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fare",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "seats",
        type: "uint256",
      },
    ],
    name: "rideCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_age",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_gender",
        type: "bool",
      },
      {
        internalType: "string",
        name: "_phoneNumber",
        type: "string",
      },
    ],
    name: "addUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "addressDetails",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "age",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "gender",
        type: "bool",
      },
      {
        internalType: "string",
        name: "phoneNumber",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "rideId",
        type: "uint256",
      },
    ],
    name: "bookRide",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_origin",
        type: "string",
      },
      {
        internalType: "string",
        name: "_destination",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_departuretime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_fare",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_seats",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_idUpload",
        type: "string",
      },
      {
        internalType: "string",
        name: "_phoneNumber",
        type: "string",
      },
    ],
    name: "createride",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "person",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "age",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "gender",
        type: "bool",
      },
      {
        internalType: "string",
        name: "phoneNumber",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "phoneNumberMapping",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "rideToRider",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ridecount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "rideowner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "rides",
    outputs: [
      {
        internalType: "uint256",
        name: "rideId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "origin",
        type: "string",
      },
      {
        internalType: "string",
        name: "destination",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "departuretime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "fare",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "seats",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "idUpload",
        type: "string",
      },
      {
        internalType: "string",
        name: "phoneNumber",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
