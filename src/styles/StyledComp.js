import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize};
  *{
   box-sizing: border-box;
   scroll-behavior: smooth;
   margin: 0;
   padding: 0;
   font-family: 'Jost', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  };
`;

export const ProductCont = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
`;

export const ProductCard = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  h3 {
    margin: 10px 0;
  }
  button {
    border: none;
    background-color: black;
    width: 80%;
    height: 30px;
    color: white;
    margin-top: 10px;
  }
`;

export const FilterBar = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px 0;
`;
