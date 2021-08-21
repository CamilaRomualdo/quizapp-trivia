import styled, { createGlobalStyle } from "styled-components"
import BGImage from '../assets/images/quiz-background-pattern.jpg'

export const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
    ::-webkit-scrollbar {
      width: 1px;
    }
    ::-webkit-scrollbar-track {
      background: #0085a3;
    }
    ::-webkit-scrollbar-thumb {
      background: #f1f1f1;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
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
  
  :root {
    --shadow: #75B1BC; /* Pink */
  }
  
`

export const Wrapper = styled.div`
  @font-face {
    font-family: 'Catamaran';
    font-style: normal;
    font-weight: 400;
    src: url('../assets/fonts/catamaran/catamaran-v8-latin-500.eot'); /* IE9 Compat Modes */
    src: local(''),
    url('../assets/fonts/catamaran/catamaran-v8-latin-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('../assets/fonts/catamaran/catamaran-v8-latin-500.woff2') format('woff2'), /* Super Modern Browsers */
    url('../assets/fonts/catamaran/catamaran-v8-latin-500.woff') format('woff'), /* Modern Browsers */
    url('../assets/fonts/catamaran/catamaran-v8-latin-500.ttf') format('truetype'), /* Safari, Android, iOS */
    url('../assets/fonts/catamaran/catamaran-v8-latin-500.svg#Catamaran') format('svg'); /* Legacy iOS */
  }

  @font-face {
    font-family: 'Fascinate Inline';
    font-style: normal;
    font-weight: 400;
    src: url('../assets/fonts/fascinate/fascinate-inline-v12-latin-regular.eot'); /* IE9 Compat Modes */
    src: local(''),
    url('../assets/fonts/fascinate/fascinate-inline-v12-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('../assets/fonts/fascinate/fascinate-inline-v12-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
    url('../assets/fonts/fascinate/fascinate-inline-v12-latin-regular.woff') format('woff'), /* Modern Browsers */
    url('../assets/fonts/fascinate/fascinate-inline-v12-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
    url('../assets/fonts/fascinate/fascinate-inline-v12-latin-regular.svg#FascinateInline') format('svg'); /* Legacy iOS */
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
    margin: 15px;
  }
  
  h1 {
    background-size: 100%;
    color: gainsboro;
    filter: drop-shadow(2px 2px gainsboro);
    font-family: "Archivo Black", "Archivo", sans-serif;
    font-size: 70px;
    font-weight: 500;
    max-width: 80vw;
    min-height: 90px;
    text-align: center;
    text-shadow:
            6px 6px        var(--shadow),
            5.75px 5.75px  var(--shadow),
            5.5px 5.5px    var(--shadow),
            5.25px 5.25px  var(--shadow),
            5px 5px        var(--shadow),
            4.75px 4.75px  var(--shadow),
            4.5px 4.5px    var(--shadow),
            4.25px 4.25px  var(--shadow),
            4px 4px        var(--shadow),
            3.75px 3.75px  var(--shadow),
            3.5px 3.5px    var(--shadow),
            3.25px 3.25px  var(--shadow),
            3px 3px        var(--shadow),
            2.75px 2.75px  var(--shadow),
            2.5px 2.5px    var(--shadow),
            2.25px 2.25px  var(--shadow),
            2px 2px        var(--shadow),
            1.75px 1.75px  var(--shadow),
            1.5px 1.5px    var(--shadow),
            1.25px 1.25px  var(--shadow),
            1px 1px        var(--shadow),
            0.75px 0.75px  var(--shadow),
            0.5px 0.5px    var(--shadow),
            0.25px 0.25px  var(--shadow);
    text-transform: uppercase;
    margin: 25px;
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
    background: linear-gradient(180deg, #ece9e6, #ffffff);
    border: 2px solid #0085a3;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
  
`
