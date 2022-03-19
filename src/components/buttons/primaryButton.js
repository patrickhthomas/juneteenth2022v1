import React from "react"
import { Link } from "gatsby"
import * as styles from "./primaryButton.module.scss"


export default function PrimaryButton ({path, children}) {

  return(
      <Link to={path}>
<button className={styles.button}>{children}</button>
</Link>

)}