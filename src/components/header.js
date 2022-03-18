import React from "react"
import { Link } from "gatsby"
import * as headerStyles from "./header.module.scss"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import HeaderLogo from '../images/header-logo.svg'



export default function Header () {
const { menuLinks, siteTitle } = useSiteMetadata()
  return(
  <header
    className={headerStyles.container}
  >
          <nav className={headerStyles.nav}>
              <img className={headerStyles.headerLogo} src={HeaderLogo} />
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
  </header>

)}