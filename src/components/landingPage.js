import * as React from "react"
import Layout from "../components/layout"
import { navigate } from "gatsby"
import DJ from '../images/Dj.svg'
import Band from '../images/LiveBand.svg'
import Vendor from '../images/vendor.svg'
import PrimaryButton from "./buttons/primaryButton"
import * as styles from "../components/landingPage.module.scss"
import Banner from "../images/banner1.jpg"
import { StaticImage } from "gatsby-plugin-image"



const LandingPage = () => {
    const newPath='/vendors'
    const donatePath='/donate'
    return (
        
        <div className={styles.container}>
            <div className={styles.heroOne}>
                <h1 className={styles.subtitle}>Join us for a day of Music, Art, Fun, and Games at the first annual Juneteenth Freedom Celebration.</h1>
            </div>
            <StaticImage className={styles.image1} src="../images/africanDrum1.jpeg" alt="downtown vancouver, wasthington" />
            <p className={styles.blurb}>Juneteenth is a day of joyous celebration, marking the end of slavery in the United States. Although only recognized as a federal holiday in 2021, communities have been coming together since 1865 to commemorate the occasion. Join us in the park on June 17th for a day of live music, delicious food, local artists and vendors, and much more. All community members are welcome and encouraged to participate, there will be something for everyone to enjoy!</p>
            <div className={styles.SVGs}>
                <img className={styles.svg} src={DJ} alt="A woman in a white t shirt picking up an iced coffee from an outdoor coffee vendor" />
                <img className={styles.svg} src={Band} alt="A woman in a white t shirt picking up an iced coffee from an outdoor coffee vendor" />
                <img className={styles.svg} src={Vendor} alt="A woman in a white t shirt picking up an iced coffee from an outdoor coffee vendor" />
                </div>
            <div className={styles.vendorText}>
                <h2>Interested in Being a Vendor?</h2>
                <p>For vendors, this is a one of a kind opportunity to reach a broad demographic of potential customers and show your support and respect for the African American community. Whether you have a business, arts practice, operate a food truck or serve at a nonprofit, we want you to be part of our Inaugural Juneteenth Celebration of Freedom!</p>
                <PrimaryButton path={newPath}>Vendor Registration</PrimaryButton>
            </div>
            <StaticImage className={styles.image} src="../images/foodTruck.jpeg" alt="A woman in a white t shirt picking up an iced coffee from an outdoor coffee vendor" />
            <div className={styles.donationText}>
                <h2>Make a donation, become a sponsor.</h2>
                <p>Make a contribution to our inaugural Juneteenth Celebration Fund, and help us ensure that this event is a success for years to come.</p>
                <PrimaryButton path={donatePath}>Learn More</PrimaryButton>
            </div>
        </div>
        
        
        )
    }
    
    export default LandingPage