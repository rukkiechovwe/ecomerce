import React from "react";
import { XCircle } from "phosphor-react";
import * as S from "./styles";

import SummaryCard from "../../common/summaryCard";
import Button from "../../common/button";
import usePayment from "../../hooks/usePayment";

const PaymentModal = ({
  method,
  firstName,
  lastName,
  address,
  state,
  country,
  setPaymentModal,
}) => {
  const {
    SubTotal,
    cartItems,
    authErr,
    loading,
    componentProps,
    updateOrders,
  } = usePayment(firstName, lastName, address, state, country);
  return (
    <S.Wrapper>
      <S.Container>
        <Button
          background="transparent"
          color="#222"
          width="auto"
          position={true}
          onClick={() => {
            setPaymentModal(false);
          }}
        >
          <XCircle size={32} />
        </Button>
        <p className="err">{authErr}</p>
        <div>
          {cartItems.map((item) => (
            <SummaryCard cartItem={item} key={item.id} />
          ))}
          <S.Total>
            <span>Total:</span> <span>NGN{SubTotal}</span>
          </S.Total>
          <S.Total>
            <span>Delivery fee:</span>
            <span>NGN100</span>
          </S.Total>
          <S.Total>
            <span>Sub Total:</span> <span>NGN{SubTotal + 100}</span>
          </S.Total>
        </div>
        {method === "paystack" ? (
          <div>
            <S.Button {...componentProps} />
          </div>
        ) : (
          <div>
            <Button
              disabled={loading}
              onClick={(e) => {
                e.preventDefault();
                updateOrders();
              }}
            >
              {loading ? "please wait..." : " place order"}
            </Button>
          </div>
        )}
      </S.Container>
    </S.Wrapper>
  );
};

export default PaymentModal;
