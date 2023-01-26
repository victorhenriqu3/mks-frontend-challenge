import styled from "styled-components";

export const CartContainer = styled.section`
  z-index: 1;
  position: fixed;
  top: 0;
  right: -30%;
  width: 30%;
  height: 100vh;
  background: var(--MainColor);
  color: var(--BGCard);
  padding: 0 2.5rem;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  transition: right ease-in 0.5s;

  &.isOpen {
    right: 0;
  }

  > div {
    position: relative;
    margin-top: 2rem;

    h2 {
      font-size: 1.7rem;
      font-weight: 600;
    }

    > svg {
      width: 38px;
      height: 38px;
      position: absolute;
      top: 0;
      right: -1rem;
      font-size: 1rem;
      padding: 0.4rem;
      border-radius: 50%;
      background: var(--MainColor);
      color: var(--BGCard);
      cursor: pointer;
    }
  }

  > button {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 95px;
    border: none;
    font-size: 1.8rem;
    font-weight: 700;
    background: var(--CloseColor);
    color: var(--BGCard);
    transition: filter 0.2s;
    border-style: none;

    &:hover {
      filter: brightness(0.8);
    }
  }

  > p {
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 1.8rem;
    font-weight: 700;
    padding: 0 3rem;
    position: absolute;
    bottom: 95px;
    right: 0;
    margin-bottom: 2rem;
  }

  .TopDrawer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 1080px) {
    right: -100%;
    width: 90%;
    padding: 0 1.5rem;

    > div {
      margin-top: 1rem;

      h2 {
        font-size: 1.4rem;
      }
    }

    > p {
      font-size: 1.2rem;
      bottom: 3rem;
    }

    > button {
      height: 4rem;
      font-size: 1.2rem;
    }
  }
`;
