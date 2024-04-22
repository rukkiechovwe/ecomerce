import React, { useEffect } from "react";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";

import Nav from "../../components/nav";
import SummaryDetails from "../../components/summaryDetails";
import BillingInformation from "../../components/billingInformation";

function Checkout() {
  const navigate = useNavigate();
  const user_id = localStorage.getItem("user_id");

  useEffect(() => {
    if (!user_id) {
      navigate("/sign-in");
    }
  }, [user_id]);

  return (
    <>
      <Nav />
      <S.GenContainer>
        <S.Container>
          <S.HeadingText>Checkout</S.HeadingText>
          <S.Wrapper>
            <BillingInformation></BillingInformation>
            <SummaryDetails></SummaryDetails>
          </S.Wrapper>
        </S.Container>
      </S.GenContainer>
    </>
  );
}

export default Checkout;
