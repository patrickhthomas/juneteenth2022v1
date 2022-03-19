import React from "react"
import { Link } from "gatsby"
import * as styles from "./primaryButton.module.scss"


export default function ExternalButton ({path, children}) {

  return(
      <a href={path} target='_blank'>
<button className={styles.button}>{children}</button>
</a>

)}