import * as React from "react"
import Layout from "./layout"
import { navigate } from "gatsby"
import HeaderLogo from '../images/header-logo.svg'
import PrimaryButton from "./buttons/primaryButton"
import * as styles from "../components/vendorLandingPage.module.scss"
import OwiesLogo from "../images/owiesWhiteLogo.svg"
import { StaticImage } from "gatsby-plugin-image"
import ExternalButton from './buttons/externalButton'



const LandingPage = () => {
    const businessPath='https://nuu47cce.paperform.co'
    const foodTruckPath='https://62gyy0ml.paperform.co'
    return (
        
        <div className={styles.container}>
            <h1>Vendor Application</h1>
            <div className={styles.block}>
            <p>Applications are currently open for vendor spaces at our 2022 Juneteenth Freedom Celebration. This is a wonderful opportunity to sell your products, get exposure for your brand, and engage with the community. Space is limited, so don't hesitate! This event will take place on June 17th from 1pm to 7pm, with vendor setup beginning at 10am. Click the appropriate link below to find out more and fill out an application.</p>
            <StaticImage className={styles.image} src="../images/foodTruck.jpeg" alt="A woman in a white t shirt picking up an iced coffee from an outdoor coffee vendor" />
            </div>
            <div className={styles.vendorText}>
                <ExternalButton path={businessPath}>Vendor Application</ExternalButton>
            </div>
            <div className={styles.vendorText}>
                <ExternalButton path={foodTruckPath}>Food Truck Registration</ExternalButton>
            </div>
        </div>
        
        
        )
    }
    
    export default LandingPage