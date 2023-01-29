import { IProduct } from "./Product";

export interface IDrawerCart {
  isOpen: boolean;
  handleCloseCart: () => void;
}

export interface ICartItem extends IProduct {
  cartQuantity: number;
}

export interface ICartState {
  cartItems: ICartItem[];
  cartTotalQuantity: number;
  cartTotalAmont: number;
}
