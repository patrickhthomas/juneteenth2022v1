import * as React from "react"
import * as styles from "../components/donateLandingPage.module.scss"
import ExternalButton from "./buttons/externalButton"



const LandingPage = () => {


    return (
        
        <div className={styles.container}>

        <div>
            <h2>Make a donation to the 2022 Juneteenth Freedom Celebration Fund</h2>
            <p>We're accepting contributions in any dollar amount from the community, so that every individual can help make Vancouver's Juneteenth Freedom Celebration a success for years to come!</p>
            <ExternalButton path={'https://www.paypal.com/donate/?hosted_button_id=BWXSXXWJA5NY6'}>Donate Now</ExternalButton>
        </div>
        </div>
        
        )
    }
    
    export default LandingPage