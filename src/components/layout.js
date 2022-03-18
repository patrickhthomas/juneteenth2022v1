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