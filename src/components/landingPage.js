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
            <div className={styles.eventInfo}>
                <h1>Juneteenth Freedom Celebration</h1>
                <p>June 17th from 1pm to 7pm at Esther Short Park in Downtown Vancouver, WA.</p>
            </div>
            <div className={styles.heroOne}>
                <div>
                <h2 className={styles.about}>About Juneteenth</h2>
                <p className={styles.blurb}>Juneteenth is the holiday that marks when  American soldiers, by order of President Lincoln,  went to Texas to free the last African American slaves in June of 1865. It signifies America fulfilling its commitment to liberty. Although our backgrounds may differ, our histories are intertwined.  So let us take this day to stand united.</p>
                </div>
            <div className={styles.owies}>
            
              <div className={styles.icons}>
              <StaticImage objectFit="contain" className={styles.footerIcon} alt="Odyssey World International Logo" src='../images/owies.svg' />
              <StaticImage objectFit="contain" className={styles.footerIcon} alt="City of Vancouver Logo" src='../images/vancity.png' />
              </div>
              <p>This free-to-the-public event is organized by <a href="https://www.odysseyworld.org/" target="_blank">Odyssey World International Education Services</a>, with support from the City of Vancouver and the Vancouver Parks and Rec.</p>
            </div>
            </div>
        
            
           <h2 className={styles.subtitle}>Join with us to celebrate the freedoms that strengthen our community.</h2>

            <div className={styles.newSection}>


            <div className={styles.freedomContainer}>
            <h3>Freedom in Expression</h3>
            <div className={styles.freedom}>
                <div className={styles.freedomThin}>
                <StaticImage objectFit='cover' className={styles.freedomImage} src="../images/jujuba.jpg" alt="A band member from Jujuba playing a hand drum"/>
                </div>
                <div className={styles.freedomThick}>
                <div>
                <p className={styles.freedomText}>Don’t miss out on <a href="https://jujuba.org/home" target="_blank">Jujuba</a> and <a href="https://www.facebook.com/overnitesuccessband" target="_blank">OverNite Success</a>! We'll also be featuring Christian hip hop artist <a href="https://linktr.ee/meezilini_tha_messenger" target="_blank">Meezilini Tha Messenger</a>, among other dancers, DJs, and performers.</p>
                </div>
                <div className={styles.thickImage}>
                <StaticImage objectFit='contain' className={styles.freedomImage2} src="../images/meezilini.jpg" alt="An album cover by Meezilini Tha Messenger titled Straight Outta Darkness"/>
                <StaticImage objectFit='contain' className={styles.freedomImage3} src="../images/overNite.png" alt="The logo for Overnite Success"/>
                </div>
                </div>
            </div>
            </div>

            <div className={styles.freedomContainer}>
            <h3>Freedom to Access Health Resources</h3>
            <div className={styles.freedom}>
                <div className={styles.freedomThin}>
                <StaticImage className={styles.freedomImage} src="../images/health.jpg" alt="A young black woman wearing dark blue scrubs standing in front of a medical clinic with a stethescope around her neck."/>
                </div>
                <div className={styles.freedomThick}>
                <p className={styles.freedomText}>Mobile Vaccine Clinic, Resource Tables from Black Health care providers, Health Education Resources for conditions that disproportionately impact the Black community</p>
                <div className={styles.thickImage}>
                <StaticImage objectFit='contain' className={styles.freedomImage2} src="../images/swach.png" alt="A young black woman wearing dark blue scrubs standing in front of a medical clinic with a stethescope around her neck."/>
                <StaticImage objectFit='contain' className={styles.freedomImage3} src="../images/swec.png" alt="A young black woman wearing dark blue scrubs standing in front of a medical clinic with a stethescope around her neck."/>
                </div>
                </div>
            </div>
            </div>

            <div className={styles.freedomContainer}>
            <h3>Freedom to Access Financial Opportunities</h3>
            <div className={styles.freedom}>
                <div className={styles.freedomThin}>
                <StaticImage className={styles.freedomImage} src="../images/financial.jpg" alt="A white paper sign with black text taped to a business' front door. It reads 'black owned business'"/>
                </div>
                <div className={styles.freedomThick}>
                <p className={styles.freedomText}>Vendors will provide information on services that are related to building credit, accessing food, and homeownership, as well as other resources needed to progress towards financial success.</p>
                <div className={styles.thickImage}>
                <StaticImage className={styles.freedomImage} src="../images/councilForHomeless.png" alt="A white paper sign with black text taped to a business' front door. It reads 'black owned business'"/>
                <StaticImage className={styles.freedomImage} src="../images/lulac.jpg" alt="A white paper sign with black text taped to a business' front door. It reads 'black owned business'"/>
                </div>
                </div>
            </div>
            </div>

            <div className={styles.freedomContainer}>
            <h3>Freedom to Access Higher Education</h3>
            <div className={styles.freedom}>
                <div className={styles.freedomThin}>
                <StaticImage className={styles.freedomImage} src="../images/education.jpg" alt="A young man stands in front of a whiteboard, teaching a room of college students."/>
                </div>
                <div className={styles.freedomThick}>
                <p className={styles.freedomText}>Representation by Black University students (clubs, fraternity groups, Resources about Scholarships, Information Tables about Educational Opportunities.</p>
                <div className={styles.thickImage}>
                <StaticImage objectFit='contain' className={styles.freedomImage} src="../images/actso.webp" alt="A young man stands in front of a whiteboard, teaching a room of college students."/>
                <StaticImage className={styles.freedomImage} src="../images/clarkCollege.jpg" alt="A young man stands in front of a whiteboard, teaching a room of college students."/>
                </div>
                </div>
            </div>
            </div>

            <div className={styles.freedomContainer}>
            <h3>Freedom to Celebrate our Heritage</h3>
            <div className={styles.freedom}>
                
                <div className={styles.freedomThin}>
                
                <StaticImage className={styles.freedomImage} src="../images/heritage.jpg" alt="A collection of old photographs stacked on top of one another."/>
                </div>
                <div className={styles.freedomThick}>
                <p className={styles.freedomText}>In the stunning artistic display, called 400 years of inequality, Holly Williams and Annette Taylor will work with the young people from the Boys and Girls club to recreate a timeline that showcases the history, ingenuity, oppression and resilience of black and indigenous people in America</p>
                <div className={styles.thickImage}>
                <StaticImage className={styles.freedomImage} src="../images/columbiaPlay.svg" alt="A collection of old photographs stacked on top of one another."/>
                <StaticImage className={styles.freedomImage} objectFit="contain" src="../images/boysAndGirls.jpg" alt="A collection of old photographs stacked on top of one another."/>
                </div>
                </div>
            </div>
            </div>

            <div className={styles.freedomContainer}>
            <h3>Freedom to Particpate in Civic Engagement</h3>
            <div className={styles.freedom}>
                <div className={styles.freedomThin}>
                <StaticImage className={styles.freedomImage} src="../images/civic.jpg" alt="A young person is seen depositing a white envelope into a voting ballot box."/>
                </div>
                <div className={styles.freedomThick}>
                <p className={styles.freedomText}>Voting Registration booths, presence of  political action groups, Community organizations, etc.</p>
                <div className={styles.thickImage}>
                
                </div>
                </div>
            </div>
            </div>


            <h3>Here’s to life, liberty, and the pursuit of happiness for all</h3>
            </div>

            <div className={styles.CTA}>
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
        </div>
        
        
        )
    }
    
    export default LandingPage