import * as React from "react"
import Layout from "../components/layout"

const RegistrationPage = () => {
  return (

<Layout>
    <h1>Contact</h1>

    <form name="Contact Form" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="Contact Form" />
      <div>
        <label>Your Email:</label>
        <input type="email" name="email" />
      </div>
      <div>
        <label>Message:</label>
        <textarea name="message" />
      </div>
      <div>
        <label>Vendor Type</label>
          <input type="radio" id="html" name="fav_language" value="HTML" />
  <label for="Vendor Type">Business</label>
  <input type="radio" id="css" name="fav_language" value="CSS" />
  <label for="Vendor Type">Artist</label>
      </div>
      <div>
          <input type="file" multiple={true} accept="image/*" name="file" />
      </div>
      <button type="submit">Send</button>
    </form>
</Layout>

  )
}

export default RegistrationPage