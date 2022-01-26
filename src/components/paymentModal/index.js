import { useContext } from "react";
import { useHistory } from "react-router";

import { fieldValue, firestore } from "../../firebase";
import { CartContext } from "../../context/cartContext";
import { UserContext } from "../../context/userContext";

import * as S from "./styles";

import SummaryCard from "../../common/summaryCard";
import Button from "../../common/button";

const PaymentModal = ({
  method,
  firstName,
  lastName,
  address,
  state,
  country,
}) => {
  const history = useHistory();
  const { SubTotal, cartItems, cartDispatch } = useContext(CartContext);
  const { userData } = useContext(UserContext);

  const publicKey = "pk_test_6c4989c4eefebff720660dd216bba1b061eabd38";
  const amount = 100 * (SubTotal + 100);
  const name = userData.name;
  const email = userData.email;
  const componentProps = {
    email,
    amount,
    publicKey,
    metadata: {
      name,
    },
    text: "Pay to place order",
    onSuccess: () => {
      alert("Thanks for doing business with us! Come back soon!!");
      updateOrders();
    },

    onClose: () => alert("Wait! You need this item, don't go!!!!"),
  };
  const updateOrders = () => {
    const user_id = localStorage.getItem("user_id");

    return firestore
      .collection("users")
      .doc(user_id)
      .update({
        orders: fieldValue.arrayUnion({
          billingDetails: {
            firstName: firstName,
            lastName: lastName,
            address: address,
            state: state,
            country: country,
          },
          items: cartItems,
          time: Date.now(),
        }),
      })
      .then(() => {
        console.log("Orders successfully updated!");
        cartDispatch({
          type: "clear",
        });
        history.push("/thank-you");
        
      })
      .catch((error) => {
        console.error("Error updating orders: ", error);
      });
  };
  return (
    <S.Wrapper>
      <S.Container>
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
              onClick={(e) => {
                e.preventDefault();
                updateOrders();
              }}
            >
              Place Order
            </Button>
          </div>
        )}
      </S.Container>
    </S.Wrapper>
  );
};

export default PaymentModal;
