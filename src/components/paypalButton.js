import React from "react"
import Paypal from "gatsby-plugin-paypal"
import { Link } from "gatsby"
import * as paypalStyles from "./paypalButton.module.scss"


const PaypalButton = () => (

    <Paypal 
      className={paypalStyles.main}
      style={{
        shape: 'rect',
        color: 'white',
        layout: 'vertical',
        label: 'paypal',
      }}
      amount={100.00}
      currency="USD"

  onApprove={function(data, actions) {
    // This function captures the funds from the transaction.
    return actions.order.capture().then(function(details) {
      // This function shows a transaction success message to your buyer.
      window.location.replace('http://localhost:8000/registrationV2');
    });
  }
}
    />
)

export default PaypalButton