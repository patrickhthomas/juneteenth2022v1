import React from "react"
import * as layoutStyles from "./layout.module.scss"


export default function Layout({ children }) {
  return (
    <div className={layoutStyles.main}>
      {children}
    </div>
  )
}