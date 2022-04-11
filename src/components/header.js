import React from "react"
import { Link } from "gatsby"
import * as headerStyles from "./header.module.scss"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import LogoStar from '../images/starLogo.svg'
import { useState } from "react"
import { useEffect } from "react"



const Header = ({ collapsed }) => {
const [isCollapsed, setIsCollapsed] = useState(true);
const { menuLinks, siteTitle } = useSiteMetadata()

  return(
  <header
    className={headerStyles.container}
  >
          <nav className={headerStyles.nav}>
            <ul className={headerStyles.links}>
              {menuLinks.map(link => (
                <li
                  key={link.name}
                  className={headerStyles.link}
                >
                  <Link to={link.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className={headerStyles.link}>
              <a href="https://cwd4q7wo.paperform.co/" target="_blank">Volunteer</a>
              </li>
            </ul>
            <button onClick={() => setIsCollapsed(!isCollapsed)} className={headerStyles.menuButton}>
            <h2>Menu</h2>
            </button>
          
          </nav>
          <ul aria-expanded='isCollapsed' className={`${isCollapsed ? headerStyles.smallLinksCollapsed : headerStyles.smallLinksExpanded}`}>
              {menuLinks.map(link => (
                <li
                  key={link.name}
                  className={headerStyles.smallLink}
                >
                  <Link style={{ color: `white` }} to={link.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className={headerStyles.smallLink}>
              <a style={{ color: `white` }} href="https://cwd4q7wo.paperform.co/" target="_blank">Volunteer</a>
              </li>
            </ul>
  </header>

)}

export default Header