
export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}
