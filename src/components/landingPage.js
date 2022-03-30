import * as React from "react"
import Layout from "../components/layout"
import { navigate } from "gatsby"
import HeroLogo from '../images/towerStar.svg'
import PrimaryButton from "./buttons/primaryButton"
import * as styles from "../components/landingPage.module.scss"
import Banner from "../images/banner1.jpg"
import { StaticImage } from "gatsby-plugin-image"



const LandingPage = () => {
    const newPath='/vendor-landing'
    const donatePath='/donate'
    return (
        
        <div className={styles.container}>
            <div className={styles.heroOne}>
                <h1 className={styles.subtitle}>Join us for a day of Music, Art, Fun, and Games at the first annual Juneteenth Freedom Celebration.</h1>
                <h2 className={styles.subtitle}>Friday June 17th from 1pm to 7pm at Esther Short Park</h2>
            </div>
            <StaticImage className={styles.image1} src="../images/africanDrum1.jpeg" alt="downtown vancouver, wasthington" />
            <p className={styles.blurb}>From 1pm to 7pm, Esther Short Park will be filled with African American art, music, culture, history, games and fabulous cuisine. This event will be a family-friendly, alcohol-free and fun free event. For vendors, it is a one of a kind opportunity to reach a broad demographic of potential customers and show your support and respect for the African American community. Whether you have a business, arts practice, operate a food truck or serve at a nonprofit, we want you to be part of our Inaugural Juneteenth Celebration of Freedom!</p>
            <StaticImage className={styles.blurb} src="../images/foodTruck.jpeg" alt="Six women in a carriage decorated with flowers. Old sepia toned photograph from 1913" />
            <div className={styles.vendorText}>
                <h2>Interested in Being a Vendor?</h2>
                <p>For vendors, this is a one of a kind opportunity to reach a broad demographic of potential customers and show your support and respect for the African American community. Whether you have a business, arts practice, operate a food truck or serve at a nonprofit, we want you to be part of our Inaugural Juneteenth Celebration of Freedom!</p>
                <PrimaryButton path={newPath}>Vendor Registration</PrimaryButton>
            </div>
            <StaticImage className={styles.image} src="../images/foodTruck.jpeg" alt="A woman in a white t shirt picking up an iced coffee from an outdoor coffee vendor" />
            <StaticImage className={styles.image__karen} src="../images/guitar1.jpeg" alt="Karen Morrisson Of Odyssey World Internation Education Services speaking at a fundraising event in Camas, Washington" />
            <div className={styles.donationText}>
                <h2>Make a donation, become a sponsor.</h2>
                <p>Make a contribution to our inaugural Juneteenth Celebration Fund, and help us ensure that this event is a success for years to come.</p>
                <PrimaryButton path={donatePath}>Learn More</PrimaryButton>
            </div>
            <div className={styles.sponsoredBy}>
                <StaticImage src='../images/owiesWhiteLogo.svg' alt='Odyssey World International Logo' />
            </div>
        </div>
        
        
        )
    }
    
    export default LandingPage