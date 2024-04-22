import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateDoc, doc, arrayUnion } from "firebase/firestore";

import { CartContext } from "../context/cartContext";
import { UserContext } from "../context/userContext";
import { firestore } from "../firebase";

export default function usePayment(
  firstName,
  lastName,
  address,
  state,
  country
) {
  const navigate = useNavigate();
  const { SubTotal, cartItems, cartDispatch } = useContext(CartContext);
  const { userData } = useContext(UserContext);
  const [authErr, setAuthErr] = useState("");
  const [loading, setLoading] = useState(false);

  //   paystack details
  const publicKey = process.env.REACT_APP_PAYSTACK_PUBLIC_KEY;
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

  const updateOrders = async () => {
    setAuthErr("");
    setLoading(true);
    const user_id = localStorage.getItem("user_id");

    const userRef = doc(firestore, "users", user_id);

    await updateDoc(userRef, {
      orders: arrayUnion({
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
        setLoading(false);
        cartDispatch({
          type: "clear",
        });
        navigate("/thank-you");
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error updating orders: ", error);
        setAuthErr(error.message);
      });
  };
  return {
    SubTotal,
    cartItems,
    authErr,
    loading,
    componentProps,
    updateOrders,
  };
}
