import styled from "styled-components";

export const ProductsList = styled.div`
  padding-top: 50px;
  padding-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    width: 1200px;
    height: 100%;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 20px;
    list-style: none;
  }

  li {
    position: relative;
    display: flex;
    flex-direction: column;
    background: var(--BGCard);
    border-radius: 4px;
    padding: 20px;
    box-shadow: 0px 2px 8px var(--BorderColor);
    border-radius: 8px;
    padding-bottom: 3rem;

    > picture {
      align-self: center;
      width: 148px;
      height: 148px;

      img {
        width: 100%;
      }
    }

    > p {
      &:nth-child(2) {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 1rem;

        > strong {
          display: inline-block;
          width: 60%;
          font-weight: 400;
          font-size: 1rem;
          color: var(--TextColor);
        }

        > span {
          display: inline-block;
          font-size: 1rem;
          font-weight: 700;
          border-radius: 5px;
          padding: 0.5rem;
          color: var(--BGCard);
          background: var(--BGPriceColor);
        }
      }

      &:nth-child(3) {
        color: var(--TextColor);
        overflow: hidden;
        margin-top: 0.5rem;
        max-height: 2rem;
        font-size: 0.8rem;
      }
    }

    button {
      width: 100%;
      min-height: 2.5rem;
      color: var(--BGCard);
      padding: 0.5rem 0;
      border: 0;
      overflow: hidden;
      border-radius: 0px 0px 8px 8px;
      position: absolute;
      bottom: 0;
      left: 0;
      display: flex;
      gap: 1rem;
      justify-content: center;
      align-items: center;
      transition: all 0.2s;
      background: var(--MainColor);

      &:hover {
        filter: brightness(1.1);
      }

      &:active {
        > span {
          font-size: 1rem;
        }
      }

      span {
        text-align: center;
        font-weight: 600;
        text-transform: uppercase;
      }
    }
  }

  @media (max-width: 1200px) {
    margin: 1rem;
    padding: 0 1rem;
  }
`;
