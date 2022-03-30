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
    const foodTruckPath='https://btl8ipvy.paperform.co'
    return (
        
        <div className={styles.container}>
            <p>Applications for vendors and food trucks are currently being accepted. </p>
            <div className={styles.vendorText}>
                <h2>Vendor Application</h2>
                <ExternalButton path={businessPath}>Business Registration</ExternalButton>
            </div>
            <div className={styles.vendorText}>
                <h2>Food Trucks Application</h2>
                <ExternalButton path={foodTruckPath}>Food Truck Registration</ExternalButton>
            </div>
        </div>
        
        
        )
    }
    
    export default LandingPage