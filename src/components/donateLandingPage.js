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
                <h2>Become a sponsor</h2>
            <div>
            <h3>Bronze - $1000</h3>
            <p>Our bronze tier sponsors will have their organization name and logo featured on the back of our official juneteenth 2022 t-shirts</p>
            </div>

            <div>
            <h3>Silver - $3000</h3>
            <p>Our silver donors receive recognition on the back of the official juneteenth 2022 t-shirts as well as special recognition on our website</p>
            </div>

            <div>
            <h3>Gold - $5000</h3>
            <p>Our silver donors receive recognition on the back of the official juneteenth 2022 t-shirts, special recognition on our website and have the opportunity to claim sponsorship for different activities/sections of the festival.</p>
            </div>

            <div>
            <h3>Platinum - $10000</h3>
            <p>Our 10k platinum sponsor gets the privilege of being the official partner of the first annual Juneteenth Freedom Celebration. Company Name and logo with be displayed on all major printed and digital marketing materials, including t-shirts, posters, website, the large entrance way banner at esther short park, and become the official sponsor of the main stage</p>
            </div>




            <ExternalButton path={'https://hdylverg.paperform.co'}>Become A Sponsor</ExternalButton>            
            <div className={styles.sponsoredBy}>
                <StaticImage src='../images/owiesWhiteLogo.svg' alt='Odyssey World International Logo' />
            </div>
        </div>
        </div>
        
        )
    }
    
    export default LandingPage