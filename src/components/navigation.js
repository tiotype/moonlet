import React from "react"

import { Link } from "gatsby"
import Menu from "./menu"

const Navigation = () => (
  <nav id="nav">
    <div className="navigation-large d-none d-md-flex justify-content-between fixed-top">
      <div className="d-flex justify-content-between name">
        <Link to="/">Moonlet</Link>
      </div>
      <div className="d-flex justify-content-between section-nav">
        <Link to="/type" className="type-nav">
          Type
        </Link>
        <Link to="/info" className="info-nav">
          Info
        </Link>
      </div>
    </div>
    <div className="navigation-small d-flex justify-content-between d-md-none fixed-top">
      <div className="d-flex justify-content-between name">
        <Link to="/">Moonlet</Link>
      </div>
      <div>
        <Menu />
      </div>
    </div>
  </nav>
)

export default Navigation
