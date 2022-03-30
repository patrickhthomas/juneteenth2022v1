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
import ExternalButton from "./buttons/externalButton"



const LandingPage = () => {
    const [inputValue, setInputValue] = useState('10')
    const onChangeHandler = event => {
        setInputValue(event.target.value);
      }
    const donationPath='/business-registration'
    return (
        
        <div className={styles.container}>
            <div className={styles.vendorText}>
                <h1>Become a sponsor</h1>
                <p>The entire community is invited to celebrate with us and enjoy African American music, art,
performances, family-friendly fun and an absolutely amazing array of traditional Juneteenth
foods! We expect Juneteenth to become a destination event and draw people from across
Southwest Washington and Northwest Oregon. Sharing this beautiful experience will contribute
to greater community understanding, help form new friendships and build on the inclusive and
welcoming atmosphere that continues to develop as Southwest Washington’s population grows.</p>


                <StaticImage className={styles.tshirt} src="../images/TShirtAd.jpg" alt="A woman in a white t shirt picking up an iced coffee from an outdoor coffee vendor" />
            <div>
            <h3>Bronze - $1000</h3>
            <p>Our Bronze donors will have their organization name and featured on the back of our official Juneteenth 2022 t-shirts.</p>
            </div>

            <div>
            <h3>Silver - $3000</h3>
            <p>Our Silver donors receive recognition on the back of the official Juneteenth 2022 t-shirts and all printed advertisements and receive special recognition on our website.</p>
            </div>

            <div>
            <h3>Gold - $5000</h3>
            <p>Our Gold donors receive recognition on the back of the official Juneteenth 2022 t-shirts and all printed advertisements, special recognition on our website and have the opportunity to claim sponsorship for different activities/sections of the festival.</p>
            </div>

            <div>
            <h3>Platinum - $10000</h3>
            <p>Our Platinum donor gets the privilege of being the official partner of the first annual Juneteenth Freedom Celebration. Brand name and logo will be displayed on all major printed and digital marketing materials, including t-shirts, posters, website, and the large entrance way banner. Your company will also become the official sponsor of the main stage, where the bands and DJ will be performing all day.</p>
            </div>




            <ExternalButton path={'https://hdylverg.paperform.co'}>Become A Sponsor</ExternalButton>            
        </div>
        <div>
            <h2>Want to chip in, but not up to being a sponsor?</h2>
            <p>We're also taking contributions in any dollar amount from the community, so that every individual can help make Vancouver's Juneteenth Freedom Celebration a success for years to come!</p>
            <ExternalButton path={'https://www.paypal.com/donate/?hosted_button_id=BWXSXXWJA5NY6'}>Make a Donation</ExternalButton>
        </div>
        </div>
        
        )
    }
    
    export default LandingPage