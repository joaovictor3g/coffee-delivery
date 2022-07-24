export interface Coffee {
  id: number;
  name: string;
  value: number;
  description: string;
  img: string;
  types: string[];
}

export interface Cart extends Coffee {
  amount: number;
}
