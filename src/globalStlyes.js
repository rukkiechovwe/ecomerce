import { createGlobalStyle } from "styled-components";
import Mabry from "./assets/font/MabryPro.otf";
import MabryLight from "./assets/font/MabryProLight.otf";
import MabryBold from "./assets/font/MabryProBold.otf";
// color codes
// #084C61(midnight green),hsla(184,50%,45%,1)(forest green),#AB81CD(lavendar floral),#FEC0AA(melon)

const Styles = createGlobalStyle`
    @font-face {
      font-family: 'Mabry Pro';
      src: url(${Mabry});
   }
   @font-face {
      font-family: 'Mabry Pro Light';
      src: url(${MabryLight});
   }
   @font-face {
      font-family: 'Mabry Pro Bold';
      src: url(${MabryBold});
   }

   *{
      margin:0;
      padding:0;
      box-sizing: border-box;
     :focus {
      outline: none;
   }
   body {
      font-family: 'Mabry Pro Light',-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif;
      border: 0;
      outline: 0;
      background: #f9f9f9;
      overflow-x: hidden;
   }
   a {
      text-decoration: none;
      outline: none;
      color: #333;
      transition: color 0.2s ease-in;
      font-family: 'Mabry Pro';
      :hover {
         color: hsla(163.1, 53%, 45.9%, 0.17);
      }
   }
   h1,
   h2,
   h3,
   h4,
   h5,
   h6 {
      font-family: 'Mabry Pro', sans-serif ;
      color: hsl(163.1, 53%, 46%);
      font-size: 2.575rem;
      line-height: 3.0625rem;
      font-weight: 600;
      
      @media only screen and (max-width: 414px) {
        font-size: 1.625rem;
      }
   }
   h3 {
      font-size: 1.95rem;
   }
   p {
      color: #222;
      font-size: 0.956rem;
      line-height:1.525rem
      font-family:'Mabry Pro Light'
   }
   span {
      color: #222;
      font-size: 0.8rem;
      line-height:1.4rem
      font-family:'Mabry Pro Light'
   }
   img {
      width: 100%;

      @media only screen and (max-width: 768px) {
         width: 100%!important;
      }
   }
   input, button {
      font-family: inherit;
      font-size: inherit;
      outline: none;
      background: transparent;
      border: 2px solid transparent;
      transition: 0.2s ease-in;
   }
   button {
      cursor:pointer;
      :disabled{
         background: #aaa;
         font-size: 0.9rem;
         text-transform: lowercase;
         cursor: not-allowed;
      }
   }

   .container {
      position: relative;
      width: 100%;
      margin: 0 auto;
      padding: 0 20px;

      @media only screen and (min-width: 600px) {
         max-width: 600px;
         padding: 0;
      }
      @media only screen and (min-width: 768px) {
         max-width: 768px;
      }
      @media only screen and (min-width: 1024px) {
         max-width: 960px;
      }
      @media only screen and (min-width: 1200px) {
         max-width: 1140px;
      }
      @media only screen and (min-width: 1400px) {
         max-width: 1216px;
      }
   }
 
   .icons{
      width:1.5rem;
   }

   .no_cart{
      min-height: 100vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 3rem 0;
      gap: 1rem;

      h3{
         color: #222;
      }
   }
   .span{
     margin-left: 10px;
     color: inherit;
     font-size: inherit;
  }
  .err{
     color: #ff2424;
     text-align: center;
  }
`;

export default Styles;
