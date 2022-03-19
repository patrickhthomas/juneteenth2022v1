import * as React from "react"
import Layout from "./layout"
import { navigate } from "gatsby"
import HeaderLogo from '../images/header-logo.svg'
import PrimaryButton from "./buttons/primaryButton"
import * as styles from "../components/donateLandingPage.module.scss"
import OwiesLogo from "../images/owiesWhiteLogo.svg"
import { StaticImage } from "gatsby-plugin-image"
import PaypalDonation from "./paypalDonation"
import { useState } from "react"



const LandingPage = () => {
    const [inputValue, setInputValue] = useState('10')
    const onChangeHandler = event => {
        setInputValue(event.target.value);
      }
    const donationPath='/business-registration'
    return (
        
        <div className={styles.container}>
            <div className={styles.vendorText}>
                <h2>Become a sponsor</h2>
                <p>The hard costs of this size event require
we reach out to the community for help. Currently we need to raise an additional $15,000 in
donations and/or sponsorships. Our suggested sponsorship levels are Platinum at $10,000,
$5,000-9,999 for Gold, $3,000-$4,999 for Silver and $1,000-$2,999 for Bronze. Sponsors'
names and logos will be on all event materials, Juneteenth t-shirts and any and all publicity.
Sponsors also will receive continuing acknowledgement as inaugural Juneteenth Sponsors.
Lastly, we hope you will join us for our Freedom Party! We guarantee an experience that will be
joyous, meaningful, educational and uniquely all American. For more information on becoming a
Sponsor, please call Karen Morrison, Executive Director of Odyssey World International
Education Services, at (360) 326-8565.</p>

            <PaypalDonation/>
            <div className={styles.sponsoredBy}>
                <StaticImage src='../images/owiesWhiteLogo.svg' alt='Odyssey World International Logo' />
            </div>
        </div>
        </div>
        
        )
    }
    
    export default LandingPage