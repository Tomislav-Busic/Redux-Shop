import React from "react";
import StripeCheckout from "react-stripe-checkout";
import logo from "../../logo/LogoMakr-1306Is.png";
import { cartActions } from "../../store/slice/cart-slice";
import { stripeActions } from "../../store/slice/stripe-slice";
import { useDispatch } from "react-redux";

export const StripeBtn = ({ price }) => {
  const dispatch = useDispatch();
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51MTs0BIsaj45LKDdLvPij3v76cUM352icFCDpDMQhUh4zvvgiKU9alwiGfR4TnapKveGnMT4U1rmePXm7CFlxVPj003drPcg3Q";

  const onToken = (token) => {
    console.log(token);
    dispatch(cartActions.clearCartItems());
    dispatch(stripeActions.handleStripe(token));
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="TBWeb"
      billingAddress
      shippingAddress
      image="https://github.com/Tomislav-Busic/Redux-Shop/blob/main/public/LogoMakr-1306Is.png"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
