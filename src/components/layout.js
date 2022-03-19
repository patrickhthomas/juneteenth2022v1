import React from "react"
import * as layoutStyles from "./layout.module.scss"
import Header from "./header"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import Helmet from "react-helmet"



export default function Layout({ children }) {
    const { title, siteUrl } = useSiteMetadata()
    return (
        <>
        <Helmet
          title={title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
            { name: 'viewport', content: "width=device-width, initial-scale=0.86, maximum-scale=5.0, minimum-scale=0.86"}
          ]}
        >
        </Helmet>
        <Header />
        <div className={layoutStyles.main}>
            
            <div className={layoutStyles.container}>
                {children}
            </div>
        </div>
        </>
    )
}