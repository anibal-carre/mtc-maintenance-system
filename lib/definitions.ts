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
