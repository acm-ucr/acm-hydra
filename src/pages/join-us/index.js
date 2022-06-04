import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Faq from "../../components/Join-Us/Faq"
import Mailinglist from "../../components/Join-Us/Mailinglist"
import ClubroomInfo from "../../components/Join-Us/ClubroomInfo"
import Links from "../../components/Join-Us/Links"
// import "Style.css"

const Join_Us = () => {
  return (

    <div className="join-us title wrapper">
      <Mailinglist />
      <div className="join-us title wrapper">
        <ClubroomInfo />
        <Links />
        <Faq />
        <Mailinglist />
      </div>
    </div>
  )
}

export default Join_Us