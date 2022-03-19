import * as React from "react"
import Layout from "../layout"
import { navigate } from "gatsby"
import PrimaryButton from "../buttons/primaryButton"
import * as styles from "../nonProfit/nonProfitRegistrationForm.module.scss"




const NonProfitRegistrationForm = () => {

      const handleSubmit = (event) => {
    // Prevent the default onSubmit behavior
    event.preventDefault();
    // POST the encoded form with the content-type header that's required for a text submission
    // Note that the header will be different for POSTing a file
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      // On success, redirect to the custom success page using Gatsby's `navigate` helper function
      .then(() => navigate("/non-profit-payment"))
      // On error, show the error in an alert
      .catch(error => alert(error));
  };
    return (
        
        <>
        <h1>Non-Profit Registration</h1>
        <form className={styles.form} name="non-profit-vendor-registration" method="POST" data-netlify="true" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="non-profit-vendor-registration" />
            <section className={styles.formSection}>
            <h2>Contact Info</h2>
            <div className={styles.input__short}>
                <label for="First-Name">First Name</label>
                <input type="name" name="First-Name" />
            </div>
            <div className={styles.input__short}>
                <label for='Last-Name'>Last Name</label>
                <input type="name" name="Last-Name" />
            </div>
            <div className={styles.input__short}>
                <label for="Email">Email</label>
                <input type="email" name="Email"/>
            </div>
            <div className={styles.input__short}>
                <label for="Phone-Number">Phone Number</label>
                <input type="phone" name="Phone-Number"/>
            </div>
            </section>
            <section className={styles.formSection}>
            <h2>Business Info</h2>
            <div className={styles.input__short}>
                <label for="Non-Profit-Name">Business or Organization Name</label>
                <input type="text" name="Non-Profit-Name"/>
            </div>
            <div className={styles.input__long}>
                <label for="description">What kind of products/materials will you be selling or handing out?</label>
                <textarea name="description"/>
            </div>
            <div className={styles.input__short}>
                <label for="power-outlet">Do you require a power outlet?</label>
                <select required={true} name="power-outlet" id="power-outlet">
                    <option value="" disabled selected>Select an option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
            </section>
            <section className={styles.formSection}>
            <h2>Disclaimers</h2>
            <div className={styles.input__checkbox}>
                <p>You are responsible for supplying your own tent, table, or any other equipment needed for your vendor set-up, we will not have any extra tables or equipment available. Is that possible?</p>
                <div className={styles.checkBoxGroup}>
                <input required={true} type="checkbox" name="Bring-Own-Table"/>
                <label for="Bring-Own-Table">Yes, I will bring my own table and equipment.</label>
                </div>
            </div>
            <div className={styles.input__checkbox}>
                <div className={styles.checkBoxGroup}>
                <input required={true} type="checkbox" name="Refund"/>
                <label for="Refund">I acknowledge that the registration fee is non-refundable.</label>
                </div>
            </div>
            </section>
            
            <PrimaryButton type="submit">Proceed To Payment</PrimaryButton>
        </form>
        </>
        
        )
    }
    
    export default NonProfitRegistrationForm