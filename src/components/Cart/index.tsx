import Image from "next/image";
import { CartContainer } from "./styles";
import { IDrawerCart } from "@/@types/Cart";

const Cart = ({ isOpen, handleCloseCart }: IDrawerCart) => {
  return (
    <CartContainer className={`${isOpen && "isOpen"}`}>
      <div className="TopDrawer">
        <h2>
          Carrinho <br /> de compras
        </h2>

        <Image
          onClick={() => handleCloseCart()}
          width={24}
          height={24}
          src="/images/Close_cart.svg"
          alt="Close Drawer"
        />
      </div>

      <p>
        <span>Total:</span>
        <span>R$ 0</span>
      </p>

      <button type="button">Finalizar Compra</button>
    </CartContainer>
  );
};

export default Cart;
