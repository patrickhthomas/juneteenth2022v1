import * as React from "react"
import Layout from "../components/layout"
import { navigate } from "gatsby"
import PrimaryButton from "./buttons/primaryButton"
import * as styles from "../components/landingPage.module.scss"
import { StaticImage } from "gatsby-plugin-image"



const LandingPage = () => {
    const newPath='/vendors'
    const donatePath='/donate'
    return (
        
        <div className={styles.container}>
            <div className={styles.heroOne}>
                <h1 className={styles.subtitle}>About Juneteenth</h1>
                <p className={styles.blurb}>Juneteenth is the holiday that marks when  American soldiers, by order of President Lincoln,  went to Texas to free the last African American slaves in June of 1865. It signifies America fulfilling its commitment to liberty. Although our backgrounds may differ, our histories are intertwined.  So let us take this day to stand united.</p>
            </div>
        
            
           <h2>Join with us to celebrate the freedoms that strengthen our community.</h2>

            <div className={styles.newSection}>
            <div className={styles.bandSection}>
                <h3>Freedom in Expression</h3>
                <p>Don’t miss out on Jujuba and Overnight Success! We will also be featuring Christian hip hop artist Meezilini Tha Messenger.</p>
                <div className={styles.band}>
                <StaticImage className={styles.bandImage} src="../images/jujuba.jpg" alt="A band member from Jujuba playing a hand drum"/>
                <div className={styles.bandInfo}>
                    <p>Ridiculously danceable Afrobeat and Juju music from Portland, Oregon.</p>
                    <a href="https://jujuba.org/home">Learn More about Jujuba</a>
                </div>
                </div>
                <div className={styles.band}>
                <StaticImage className={styles.bandImage} src="../images/meezilini.jpg" alt="An album cover by Meezilini Tha Messenger titled Straight Outta Darkness"/>
                <div className={styles.bandInfo}>
                    <p>Christian Rapper who found Jesus in a prison cell.</p>
                    <a href="https://linktr.ee/meezilini_tha_messenger">Learn More about Meezilini Tha Messenger</a>
                </div>
                </div>
            </div>
            <div>
                <h3>Freedom to Access Health Resources</h3>
                <p>Mobile Vaccine Clinic, Resource Tables from Black Health care providers, Health Education Resources for conditions that disproportionately impact the Black community</p>
                <StaticImage src="../images/health.jpg" alt="A young black woman wearing dark blue scrubs standing in front of a medical clinic with a stethescope around her neck."/>
            </div>
            <div>
                <h3>Freedom to Access Financial Opportunities</h3>
                <p>Representation from Black-owned businesses, black owned food trucks, educational resources for financial literacy, vendor tables about employment opportunities</p>
                <StaticImage src="../images/financial.jpg" alt="A white paper sign with black text taped to a business' front door. It reads 'black owned business'"/>
            </div>
            <div>
                <h3>Freedom to Access Higher Education</h3>
                <p>Representation by Black University students (clubs, fraternity groups, Resources about Scholarships, Information Tables about Educational Opportunities</p>
                <StaticImage src="../images/education.jpg" alt="A young man stands in front of a whiteboard, teaching a room of college students."/>
            </div>
            <div>
                <h3>Freedom to Celebrate our Heritage</h3>
                <p>Black history display</p>
                <StaticImage src="../images/heritage.jpg" alt="A collection of old photographs stacked on top of one another."/>
            </div>
            <div>
                <h3>Freedom to Particpate in Civic Engagement</h3>
                <p>Voting Registration booths, presence of  political action groups, Community organizations, etc </p>
                <StaticImage src="../images/civic.jpg" alt="A young person is seen depositing a white envelope into a voting ballot box."/>
            </div>
            <h3>Here’s to life, liberty, and the pursuit of happiness for all</h3>
            </div>


            <div className={styles.vendorText}>
                <h2>Interested in Being a Vendor?</h2>
                <p>For vendors, this is a one of a kind opportunity to reach a broad demographic of potential customers and show your support and respect for the African American community. Whether you have a business, arts practice, operate a food truck or serve at a nonprofit, we want you to be part of our Inaugural Juneteenth Celebration of Freedom!</p>
                <PrimaryButton path={newPath}>Vendor Registration</PrimaryButton>
            </div>
    
            <div className={styles.donationText}>
                <h2>Make a donation, become a sponsor.</h2>
                <p>Make a contribution to our inaugural Juneteenth Celebration Fund, and help us ensure that this event is a success for years to come.</p>
                <PrimaryButton path={donatePath}>Learn More</PrimaryButton>
            </div>
        </div>
        
        
        )
    }
    
    export default LandingPage