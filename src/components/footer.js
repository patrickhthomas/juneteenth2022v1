import React from "react"
import { Link } from "gatsby"
import * as headerStyles from "./footer.module.scss"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import TowerLogoStar from '../images/TreeLogo.svg'



export default function Footer () {
const { menuLinks, siteTitle } = useSiteMetadata()
  return(
  <footer
    className={headerStyles.container}
  >
          <nav className={headerStyles.nav}>
              <Link to='/' className={headerStyles.headerLogo}>
                <img src={TowerLogoStar} />
              </Link>
            <ul className={headerStyles.links}>
              {menuLinks.map(link => (
                <li
                  key={link.name}
                  className={headerStyles.links}
                >
                  <Link style={{ color: `white` }} to={link.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
  </footer>

)}