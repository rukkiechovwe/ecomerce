import GlobalStyles from "./globalStlyes";
import ProductContextProvider from "./context/productContext";
import UserContext from "./context/userContext";
import CartContextProvider from "./context/cartContext";
import AppRouter from "./router";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <UserContext>
        <ProductContextProvider>
          <CartContextProvider>
            <GlobalStyles />

            <AppRouter />
          </CartContextProvider>
        </ProductContextProvider>
      </UserContext>
    </BrowserRouter>
  );
}

export default App;
