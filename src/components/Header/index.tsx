import Image from "next/image";
import { HeaderContainer } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <strong>MKS</strong>
        <span>Sistemas</span>
      </div>

      <button type="button">
        <Image width={24} height={24} src="/images/cart.svg" alt="cart" />
        <span>{`0`}</span>
      </button>
      </HeaderContainer>
  )
};

export default Header;
