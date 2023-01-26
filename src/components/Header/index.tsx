import Image from "next/image";
import { useState } from "react";
import Cart from "../Cart";
import { HeaderContainer } from "./styles";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <HeaderContainer>
        <div>
          <strong>MKS</strong>
          <span>Sistemas</span>
        </div>

        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          <Image width={24} height={24} src="/images/cart.svg" alt="cart" />
          <span>{`0`}</span>
        </button>
      </HeaderContainer>
      <Cart isOpen={isOpen} handleCloseCart={() => setIsOpen(!isOpen)} />
    </>
  );
};

export default Header;
