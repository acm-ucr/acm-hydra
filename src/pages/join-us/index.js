import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ClubroomInfo from "../../components/Join-Us/ClubroomInfo"
import Links from "../../components/Join-Us/Links"
// import "Style.css"

const Join_Us = () => {
  return (
    <div className="join-us title wrapper">
      <ClubroomInfo />
      <Links />
    </div>

  )
}

export default Join_Us