import React from "react"
import * as layoutStyles from "./layout.module.scss"
import Header from "./header"
import Footer from "./footer"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import Helmet from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"



export default function Layout({ children }) {
    const { title, siteUrl } = useSiteMetadata()
    return (
        <>
        <Helmet
          htmlAttributes={{
            lang: 'en',
          }}
          title={title}
          meta={[
            { name: 'description', content: 'Juneteenth Freedom Celebration 2022. Esther Short Park in Vancouver, WA. 1pm thru 7pm on June 17th.' },
            { name: 'keywords', content: 'juneteenth, freedom, celebration, vancouver, washington, esther short park, festival' },
            { name: 'viewport', content: "width=device-width, initial-scale=0.86, maximum-scale=5.0, minimum-scale=0.86"}
          ]}
        >
        </Helmet>

        <div className={layoutStyles.main}>
                  <div aria-hidden="true" className={layoutStyles.bannerContainerLG}><StaticImage className={layoutStyles.bannerLG} src='../images/bannerLG.svg' alt="Juneteenth Freedom Celebration" /></div>
                  <div aria-hidden="true" className={layoutStyles.bannerContainerMD}><StaticImage className={layoutStyles.bannerMD} src='../images/bannerMD.svg' alt="Juneteenth Freedom Celebration" /></div>
                  <div aria-hidden="true" className={layoutStyles.bannerContainerSM}><StaticImage className={layoutStyles.bannerSM} src='../images/bannerSM.svg' alt="Juneteenth Freedom Celebration" /></div>
        <Header />
            
            <div className={layoutStyles.container}>
                {children}
            </div>
         <Footer />
        </div>

        </>
    )
}