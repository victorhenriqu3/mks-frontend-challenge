import styled from "styled-components";

export const FooterContainer = styled.footer`
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 34px;
  background-color: var(--BGFooter);

  section {
    max-width: 80vw;
    margin: 0 auto;
    padding: 0 2rem;
    padding-top: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    font-weight: 400;
  }

  @media (max-width: 1200px) {
    section {
      max-width: 100vw;
      font-size: 0.8rem;
    }
  }
`;
