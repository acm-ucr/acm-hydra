import React from 'react'
import Faq from "../../components/Join-Us/Faq"
import {Row, Col} from 'react-bootstrap'
import Mailinglist from "../../components/Join-Us/Mailinglist"
import ClubroomInfo from "../../components/Join-Us/ClubroomInfo"
import Links from "../../components/Join-Us/Links"
// import "Style.css"

const Join_Us = () => {
  return (
    <div className="join-us title wrapper">    <Mailinglist />

      <ClubroomInfo />
      <Links />
      <Faq />
    </div>
  )
}

export default Join_Us