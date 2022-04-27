import * as React from "react"
import Layout from "../components/layout"
import { navigate } from "gatsby"
import PrimaryButton from "./buttons/primaryButton"
import * as styles from "../components/specialThanksPage.module.scss"
import { StaticImage } from "gatsby-plugin-image"



const SpecialThanksPage = () => {
    const newPath='/vendors'
    const donatePath='/donate'
    return (
        
        <div className={styles.container}>
        
        
<h1>A very special thanks to:</h1>
<h2 className={styles.subtitle}>Our 2022 vendors</h2>
            <div className={styles.vendorSection}>
            <div className={styles.vendor}>
                 
                <StaticImage className={styles.vendorImage} src="../images/CCVLP.jpg" alt="A band member from Jujuba playing a hand drum"/>
              
                <a href="https://ccvlp.org" target="_blank"><h3>Clark County Volunteer Lawyers Program</h3></a>
            </div>

            <div className={styles.vendor}>
                 
                <StaticImage className={styles.vendorImage} src="../images/bloomingCandles.jpg" alt="A band member from Jujuba playing a hand drum"/>
             
                <a href="https://www.thebloomingcandles.com/" target="_blank"><h3>Blooming Candles</h3></a>
            </div>

            <div className={styles.vendor}>
                 
                <StaticImage className={styles.vendorImage} src="https://i.etsystatic.com/23007745/r/il/e7c7a1/3414811161/il_1588xN.3414811161_9vx9.jpg" alt="A band member from Jujuba playing a hand drum"/>
               
                <a href="https://www.etsy.com/shop/essenceofagoddessllc" target="_blank"><h3>Essence Of A Goddess</h3></a>
            </div>

            <div className={styles.vendor}>
                 
                <StaticImage className={styles.vendorImage} src="https://s3.amazonaws.com/pf-user-files-01/u-199999/uploads/2022-03-31/cy23oww/Screen%20Shot%202022-03-12%20at%206.31.43%20AM.png" alt="A band member from Jujuba playing a hand drum"/>
            
                <a href="https://swwalulac.org/" target="_blank"><h3>Southwest Washington LULAC Foundation</h3></a>
            </div>

            <div className={styles.vendor}>
                 
                <StaticImage className={styles.vendorImage} src="https://images.squarespace-cdn.com/content/v1/625bae831ce3b123166ad369/ce18ab69-3b9c-4fb9-9b5c-43b7090aff7b/IGV+logo+very+small+%28header+use%29.jpg?format=1500w" alt="A band member from Jujuba playing a hand drum"/>
                <a href="https://www.indivisiblegreatervancouver.org/" target="_blank"><h3>Indivisible Greater Vancouver</h3></a>
            </div>

            <div className={styles.vendor}>
                <StaticImage className={styles.vendorImage} src="https://s3.amazonaws.com/pf-user-files-01/u-199999/uploads/2022-04-20/5k23pbq/Logo%20BlueYellow1.png" alt="A band member from Jujuba playing a hand drum"/>
                <a href="https://fairvotewa.org/" target="_blank"><h3>FairVote Washington</h3></a>
            </div>

            <div className={styles.vendor}>
                <StaticImage className={styles.vendorImage} src="../images/swec.jpg" alt="A band member from Jujuba playing a hand drum"/>
                <a href="https://swecwa.org/" target="_blank"><h3>Youth & Family Link</h3></a>
            </div>
            <div className={styles.vendor}>
                <StaticImage className={styles.vendorImage} src="https://s3.amazonaws.com/pf-user-files-01/u-199999/uploads/2022-04-11/5y03peh/RAP-L%5B69%5D%5B44%5D.png" alt="A band member from Jujuba playing a hand drum"/>
                <h3>Washington Low Income Housing Alliance/Resident Action Project</h3>
            </div>
            

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
        <h2>Our 2022 Food Trucks</h2>
        </div>
        
        
        )
    }
    
    export default SpecialThanksPage