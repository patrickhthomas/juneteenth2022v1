import React from "react"
import Paypal from "gatsby-plugin-paypal"
import { Link } from "gatsby"
import ExternalButton from "./buttons/externalButton"
import * as paypalStyles from "../components/paypalDonation.module.scss"


const PaypalDonation = () => (

    <ExternalButton path="https://www.paypal.com/donate/?hosted_button_id=73HGRKBFNKYT6">
      Make a donation
    </ExternalButton>
)

export default PaypalDonation