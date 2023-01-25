import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;
  width: 100vw;
  height: 100px;
  background: var(--MainColor);

  div {
    strong {
      color: var(--BGCard);
      font-weight: 700;
      font-size: 2.5rem;
      margin-right: 0.5rem;
    }

    span {
      color: var(--BGCard);
      font-weight: 500;
      font-size: 1.2rem;
    }
  }

  button {
    display: flex;
    align-items: center;
    padding: 1rem 1.5rem;
    border: none;
    border-radius: 8px;

    span {
      font-size: 1rem;
      font-weight: 800;
      margin-left: 1rem;
    }
  }

  @media (max-width: 1280px) {
    padding: 0 1rem;

    div {
      strong {
        font-size: 2rem;
      }

      span {
        font-size: 1rem;
      }
    }
  }
`;
