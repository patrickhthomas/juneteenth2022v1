import * as React from "react"
import Layout from "../components/layout"
import PaypalButton from "../components/paypalButton"
import NonProfitRegstrationForm from "../components/nonProfitRegistrationForm"

const RegistrationPage = () => {
  return (

<Layout>
    <NonProfitRegstrationForm />
    <PaypalButton />
</Layout>

  )
}

export default RegistrationPage