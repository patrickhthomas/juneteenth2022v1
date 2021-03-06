import React from "react"
import { Link } from "gatsby"
import * as footerStyles from "./footer.module.scss"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { StaticImage } from "gatsby-plugin-image"



export default function Footer () {
const { menuLinks, siteTitle } = useSiteMetadata()
  return(
  <footer className={footerStyles.container}>
    <div className={footerStyles.divider1}></div>
    <div className={footerStyles.divider2}></div>
    <div className={footerStyles.divider3}></div>
          <nav className={footerStyles.nav}>
            <ul className={footerStyles.links}>
              {menuLinks.map(link => (
                <li
                  key={link.name}
                  className={footerStyles.link}
                >
                  <Link style={{ color: `white` }} to={link.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className={footerStyles.owies}>
              <p>Organized by Odyssey World International Education Services in partnership with the City of Vancouver and the Parks and Rec Dept.</p>
              <div className={footerStyles.icons}>
              <StaticImage objectFit="contain" className={footerStyles.footerIcon} alt="Odyssey World International Logo" src='../images/owies.png' />
              <StaticImage objectFit="contain" className={footerStyles.footerIcon} alt="City of Vancouver Logo" src='../images/vancity.png' />
              </div>
            </div>
          </nav>
  </footer>

)}