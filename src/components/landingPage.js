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
                <h1 className={styles.subtitle}>2022 Juneteenth Freedom Celebration.</h1>
            </div>
            <StaticImage className={styles.image1} src="../images/africanDrum1.jpeg" alt="downtown vancouver, wasthington" />
            <p className={styles.blurb}>Juneteenth is the holiday that marks when  American soldiers, by order of President Lincoln,  went to Texas to free the last African American slaves in June of 1865. It signifies America fulfilling its commitment to liberty. Although our backgrounds may differ, our histories are intertwined.  So let us take this day to stand united.</p>
            <div className={styles.SVGs}>
<p>Join with us to commemorate the abolishment of slavery,  recognize the contributions of local African Americans,  and celebrate the freedoms that strengthen our community.</p>
                </div>
            <div className={styles.newSection}>
            <div>
                <h2>Freedom in Expression</h2>
                <p>Black Visual and Performing Artists</p>
            </div>
            <div>
                <h2>Freedom to Access Health Resources</h2>
                <p>Mobile Vaccine Clinic, Resource Tables from Black Health care providers, Health Education Resources for conditions that disproportionately impact the Black community</p>
            </div>
            <div>
                <h2>Freedom to Access Financial Opportunities</h2>
                <p>Representation from Black-owned businesses, black owned food trucks, educational resources for financial literacy, vendor tables about employment opportunities</p>
            </div>
            <div>
                <h2>Freedom to Access Higher Education</h2>
                <p>Representation by Black University students (clubs, fraternity groups, Resources about Scholarships, Information Tables about Educational Opportunities</p>
            </div>
            <div>
                <h2>Freedom to Celebrate our Heritage</h2>
                <p>Black history display</p>
            </div>
            <div>
                <h2>Freedom to Particpate in Civic Engagement</h2>
                <p>Voting Registration booths, presence of  political action groups, Community organizations, etc </p>
            </div>
            <h3>Here’s to life, liberty, and the pursuit of happiness for all</h3>
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