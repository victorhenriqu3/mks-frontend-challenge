import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --MainColor: #0F52BA;
    --BGColor: #f9f9f9;
    --BGCard: #ffffff;
    --CloseColor: #000000 ;
    --BorderColor: rgba(0, 0, 0, 0.14);
    --BorderInput: #BFBFBF;
    --BGPriceColor: #373737;
    --TextColor: #2C2C2C;
    --BGFooter: #EEEEEE;
  } 

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  main{
    background-color: var(--BGColor);
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  #root {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  button {
    cursor: pointer;
  }
`;
