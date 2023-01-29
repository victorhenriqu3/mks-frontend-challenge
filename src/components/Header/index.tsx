import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";
import Cart from "../Cart";
import { HeaderContainer } from "./styles";
import { RootState } from "@/store/store";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { cartTotalQuantity } = useSelector((state: RootState) => state.cart);
  return (
    <>
      <HeaderContainer>
        <div>
          <strong>MKS</strong>
          <span>Sistemas</span>
        </div>

        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          <Image width={24} height={24} src="/images/cart.svg" alt="cart" />
          <span>{cartTotalQuantity}</span>
        </button>
      </HeaderContainer>
      <Cart isOpen={isOpen} handleCloseCart={() => setIsOpen(!isOpen)} />
    </>
  );
};

export default Header;
