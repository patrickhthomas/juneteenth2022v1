import * as React from "react"
import Layout from "../components/layout"
import PaypalFoodTruck from "../components/business/paypalBusiness"

const FoodTruckPaymentPage = () => {
  return (

<Layout>
    <h1>Pay Registration Fees</h1>

    <PaypalFoodTruck />
</Layout>

  )
}

export default FoodTruckPaymentPage