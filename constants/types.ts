export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export interface Category {
  id: number;
  name: string;
  count: number;
}