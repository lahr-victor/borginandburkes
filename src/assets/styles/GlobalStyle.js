import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@1&family=Lora:wght@400;600&display=swap');
  * {
    box-sizing: border-box;
  }
  form {
      display: flex;
      flex-direction: column;
      gap:10px;
    }
  input {
    outline:none;
    height:45px;
    background-color: #F9F9F9;
    border: 1px solid #D4D4D4;
    font-family: 'Lora';
    font-size:19px;
    font-weight:400;
    padding:10px;
    :focus {
            border: 1px solid #3A3A3A;
        }
  }
  button {
    outline:none;
    border:none;
    height:45px;
    background-color: #3A3A3A;
    color: #F9F9F9;
    font-family: 'Lora';
    font-size:20px;
    font-weight:400;
  }
  a {
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: #676767;
        text-decoration: none;
        padding-top: 30px;
    }
`;

export default GlobalStyle;
