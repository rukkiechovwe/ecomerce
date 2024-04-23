import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

import { CartContext } from "../../context/cartContext";
import CartCard from "../../common/cartCard";
import Button from "../../common/button";
import WebisteLayout from "../../components/layout/home";

function CartPage() {
  const navigate = useNavigate();
  const { cartItems, cartTotal, SubTotal } = useContext(CartContext);

  return (
    <WebisteLayout>
      <S.Wrapper>
        {cartTotal > 0 ? (
          <>
            <S.Container>
              <S.TotalText>
                <p>{cartTotal} Items</p>
                <p>Total: NGN{SubTotal}</p>
              </S.TotalText>
              {cartItems.map((item) => (
                <CartCard cartItem={item} key={item.id} />
              ))}
              <Button onClick={() => navigate("/checkout")}>Checkout</Button>
            </S.Container>
          </>
        ) : (
          <div className="no_cart">
            <p>No Item In Cart</p>
            <Button width="300px" onClick={() => navigate("/")}>
              Continue Shopping
            </Button>
          </div>
        )}
      </S.Wrapper>
    </WebisteLayout>
  );
}

export default CartPage;
