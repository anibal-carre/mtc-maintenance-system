const { Prisma } = require("@prisma/client");

const users = [
  {
    id: "410544b2-4001-4271-9855-fec4b6a6442a",
    name: "David Carreño",
    username: "adca2003",
    password: "adca2003@@",
    isAdmin: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "410554b2-4201-4271-9855-fec5b6a6842a",
    name: "Jonh Smith",
    username: "jonh123",
    password: "123456",
    isAdmin: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "410554b2-4203-4571-9855-fec5b7a6842a",
    name: "Tom Holland",
    username: "tom123",
    password: "1234567",
    isAdmin: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const keys = [
  {
    id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
    key: "Chave 118",
    door: "Porta 10",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3958dc9e-742f-4377-85e9-fec4b6a6442a",
    key: "Chave 207",
    door: "Porta 27",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3858dc9e-742f-4377-85e9-fec4b6a6742a",
    key: "Chave 91",
    door: "Porta 14",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3958dc9e-712f-4377-85e9-fgc4b6a6742a",
    key: "Chave 128",
    door: "Porta 11",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3958dc9e-742f-4377-85e9-fec4b6a6479a",
    key: "Chave 220",
    door: "Porta 22",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3858dc9e-742f-4377-85e9-fec4b5a6741a",
    key: "Chave 10",
    door: "Porta 12",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3858dc9e-742f-4377-85e9-fec5b4a6741a",
    key: "Chave 15",
    door: "Porta 18",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3467dc9e-742f-4377-85e9-fec5b4a6741a",
    key: "Chave 19",
    door: "Porta 127",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3467dc3e-742f-4377-75e8-fec6b4a6741a",
    key: "Chave 119",
    door: "Porta 129",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const products = [
  {
    id: "CC27C14A-0ACF-4F4A-A6C9-D45682C144B9",
    name: "Sacola",
    quantity: 10,
    buyQuantity: 5,
    stockQuantity: 5,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "13D07535-C59E-4157-A011-F8D2EF4E0CBB",
    name: "Sabão",
    quantity: 20,
    buyQuantity: 15,
    stockQuantity: 5,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "76d65c26-f784-44a2-ac19-586678f7c2f2",
    name: "Luvas",
    quantity: 15,
    buyQuantity: 5,
    stockQuantity: 10,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

module.exports = {
  users,
  keys,
  products,
};
