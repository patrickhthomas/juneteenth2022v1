import * as React from "react"
import Layout from "./layout"
import { navigate } from "gatsby"
import HeaderLogo from '../images/header-logo.svg'
import PrimaryButton from "./buttons/primaryButton"
import * as styles from "../components/vendorLandingPage.module.scss"
import OwiesLogo from "../images/owiesWhiteLogo.svg"
import { StaticImage } from "gatsby-plugin-image"



const LandingPage = () => {
    const businessPath='/business-registration'
    const nonProfitPath='/non-profit-registration'
    const foodTruckPath='/food-truck-registration'
    return (
        
        <div className={styles.container}>
            <div className={styles.vendorText}>
                <h2>For Businesses and Artists</h2>
                <h3>Registration Fee: $100</h3>
                <PrimaryButton path={businessPath}>Business Registration</PrimaryButton>
            </div>
            <div className={styles.vendorText}>
                <h2>For Non-Profits</h2>
                <h3>Registration Fee: $50</h3>
                <PrimaryButton path={nonProfitPath}>Non-Profit Registration</PrimaryButton>
            </div>
            <div className={styles.vendorText}>
                <h2>For Food Trucks</h2>
                <h3>Registration Fee: $100</h3>
                <PrimaryButton path={foodTruckPath}>Food Truck Registration</PrimaryButton>
            </div>
            <div className={styles.sponsoredBy}>
                <StaticImage src='../images/owiesWhiteLogo.svg' alt='Odyssey World International Logo' />
            </div>
        </div>
        
        
        )
    }
    
    export default LandingPage