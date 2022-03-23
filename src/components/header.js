import React from "react"
import { Link } from "gatsby"
import * as headerStyles from "./header.module.scss"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import TowerLogo from '../images/tower.svg'



export default function Header () {
const { menuLinks, siteTitle } = useSiteMetadata()
  return(
  <header
    className={headerStyles.container}
  >
          <nav className={headerStyles.nav}>
              <Link to='/' className={headerStyles.headerLogo}>
                <img src={TowerLogo} />
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
  </header>

)}