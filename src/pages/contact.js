import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Navbar from "../components/navbar"
import Container from "../components/container"

export default function Contact() {
  return (
    <Container>
      <div style={{ color: `teal` }}>
        <Navbar></Navbar>
        <Header headerText="Contact" />
        <p>Send us a message!</p>
      </div>
    </Container>
  )
}