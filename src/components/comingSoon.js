import * as React from "react"
import Layout from "../components/layout"
import { navigate } from "gatsby"
import HeroLogo from '../images/header-logo.svg'
import PrimaryButton from "./buttons/primaryButton"
import * as styles from "../components/comingSoon.module.scss"
import OwiesLogo from "../images/owiesWhiteLogo.svg"
import { StaticImage } from "gatsby-plugin-image"



const ComingSoon = () => {
    const newPath='/vendor-landing'
    const donatePath='/donate'
    return (
        
        <div className={styles.container}>
            <div className={styles.heroOne}>
                <h1 className={styles.title}><img alt="Juneteenth Freedom Celebration" src={HeroLogo}></img></h1>
                <h1 className={styles.subtitle}>Web Page under construction</h1>
                <h3>Stay tuned for more details!</h3>
            </div>
        </div>
        
        
        )
    }
    
    export default ComingSoon