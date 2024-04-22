import React, { useState, useContext } from "react";
import { CartContext } from "../../context/cartContext";
// import { UserContext } from "../../context/userContext";
import ProductImage from "../appImages";
import * as S from "./styles";
import { X } from "phosphor-react";

const CartCard = ({ cartItem }) => {
  const [item, setItem] = useState(cartItem);
  const { cartDispatch } = useContext(CartContext);

  return (
    <S.CartCard>
      <S.Container>
        <S.ImageDiv height="70px" width="70px">
          <ProductImage src={item.image} />
        </S.ImageDiv>
        <S.Name>{item.title}</S.Name>
        <S.Flex>
          <S.Price>NGN{parseInt(item.price)}</S.Price>
          <S.QuantityContainer>
            <S.Button
              onClick={() => {
                if (item.quantity > 1) {
                  let q = item.quantity;
                  const updated = { ...item, quantity: --q };
                  setItem(updated);
                  cartDispatch({
                    type: "update_quantity",
                    item: updated,
                  });
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icons"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 12H6"
                />
              </svg>
            </S.Button>
            <S.Quantity>{item.quantity}</S.Quantity>

            <S.Button
              onClick={() => {
                let q = item.quantity;
                const updated = { ...item, quantity: ++q };
                setItem(updated);
                cartDispatch({
                  type: "update_quantity",
                  item: updated,
                });
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icons"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </S.Button>
          </S.QuantityContainer>
        </S.Flex>
        <S.Delete
          width="30px"
          height="30px"
          onClick={() => {
            cartDispatch({
              type: "remove",
              item: item,
            });
          }}
        >
          <X />
        </S.Delete>
      </S.Container>
    </S.CartCard>
  );
};

export default CartCard;
