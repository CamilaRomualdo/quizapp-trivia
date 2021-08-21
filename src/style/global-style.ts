import styled, { createGlobalStyle } from "styled-components"
import BGImage from '../assets/images/question-mark-pattern.jpg'

export const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
  }
  
  body {
    background-image: url(${BGImage});
    background-size: cover;
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
  }
  
  * {
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
  }
`

export const Wrapper = styled.div`
  @font-face {
    font-family: 'Catamaran';
    font-weight: 500;
    src: url('../assets/fonts/Catamaran-VariableFont_wght.ttf') format("truetype");;
  }

  @font-face {
    font-family: 'Fascinate';
    font-weight: 500;
    src: url('../assets/fonts/FascinateInline-Regular.ttf') format("truetype");;
  }
  
  align-items: center;
  display: flex;
  flex-direction: column;
  
  > p {
    color: aliceblue;
  }
  
  .score {
    color: aliceblue;
    font-size: 2rem;
    margin: 0;
  }
  
  h1 {
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    background-clip: text;
    filter: drop-shadow(2px 2px #0085a3);
    font-family: Fascinate Inline, sans-serif;
    font-size: 70px;
    font-weight: 400;
    text-align: center;
    margin: 20px;
    --webkit-background-clip: text;
    --webkit-text-fill-color: tranparent;
    --moz-background-clip: text;
    --moz-text-fill-color: tranparent;
  }

  .start {
    max-width: 200px;
  }
  
  .start, .next {
    cursor: pointer;
    background: linear-gradient(180deg, #ffffff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
  
`