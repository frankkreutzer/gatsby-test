import React from "react"
import { Link } from "gatsby"
import Container from "../components/container"
import Header from "../components/header"
import Navbar from "../components/navbar"

export default function Home() {
  return (
    <Container>
      <div style={{ color: `purple` }}>
        <Navbar></Navbar>

        <Header headerText="Hello Gatsby!" />
        <p>What a world.</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
          
      </div>
    </Container>
  )
}
