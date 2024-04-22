import React from "react";
import Button from "../../common/button";
import { useNavigate } from "react-router-dom";
import AppIllustration from "../../common/appIllustration";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="no_cart">
        <AppIllustration />

        <h3 >Thank you for shopping with us!</h3>
        <Button width="300px" onClick={() => navigate("/")}>
          Continue Shopping
        </Button>
      </div>
    </div>
  );
};

export default ThankYou;
