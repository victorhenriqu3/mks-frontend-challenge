import Image from "next/image";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardCartItem, CartContainer } from "./styles";
import { ICartItem, IDrawerCart } from "@/@types/Cart";
import { addToCart, decreaseCart, subTotals } from "@/store/CartSlice";
import { RootState } from "@/store/store";

const Cart = ({ isOpen, handleCloseCart }: IDrawerCart) => {
  const { cartItems, cartTotalAmont } = useSelector(
    (state: RootState) => state.cart
  );
  const dispatch = useDispatch();

  const handleIncreaseCart = (Items: ICartItem) => {
    dispatch(addToCart(Items));
  };

  const handleDecreaseCart = (Items: ICartItem) => {
    dispatch(decreaseCart(Items));
  };

  useEffect(() => {
    dispatch(subTotals());
  }, [cartItems, dispatch]);

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

      {cartItems.length === 0 ? (
        <div>
          <p>{`O seu Carrinho está vazio`}</p>
        </div>
      ) : (
        <>
          <CardCartItem
            className={`${cartItems.length > 4 && "scroll-element"}`}
          >
            {cartItems.map((product) => {
              const subTotalItem = Number(product.price) * product.cartQuantity;

              return (
                <li key={product.id}>
                  <picture>
                    <img src={product.photo} alt={product.name} />
                  </picture>

                  <p>
                    <span>{product.brand} </span>
                    {product.name}
                  </p>

                  <section>
                    <p>Qtd:</p>
                    <div>
                      <button
                        type="button"
                        role="decrement-product"
                        disabled={product.cartQuantity <= 1}
                        onClick={() => handleDecreaseCart(product)}
                      >
                        {`-`}
                      </button>
                      <p role="product-amount">{product.cartQuantity}</p>
                      <button
                        type="button"
                        role="increment-product"
                        onClick={() => handleIncreaseCart(product)}
                      >
                        {`+`}
                      </button>
                    </div>
                  </section>

                  <span>R${subTotalItem.toLocaleString("pt-BR")}</span>

                  <Image
                    className="deleteItem"
                    width={35}
                    height={35}
                    src="/images/Close_cart.svg"
                    alt="Close Drawer"
                  />
                </li>
              );
            })}
          </CardCartItem>
        </>
      )}

      <p>
        <span>Total:</span>
        <span>R$ {cartTotalAmont.toLocaleString("pt-BR")}</span>
      </p>

      <button type="button">Finalizar Compra</button>
    </CartContainer>
  );
};

export default Cart;
