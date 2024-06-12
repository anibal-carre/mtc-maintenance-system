export type Key = {
  id: string;
  key: string;
  door: string;
  createdAt: Date;
  updatedAt: Date;
};

export type KeyForm = {
  id: string;
  key: string;
  door: string;
  createdAt: Date;
  updatedAt: Date | null;
};

export type User = {
  id: string;
  name: string;
  username: string;
  password: string;
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type Product = {
  id: string;
  name: string;
  quantity: number;
  buyQuantity: number;
  stockQuantity: number;
  createdAt: Date;
  updatedAt: Date;
};
