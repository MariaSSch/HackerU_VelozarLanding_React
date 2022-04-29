import React from 'react'
import s from "./Main.module.sass"
import Header from "../Header/Header"
import About from "../About/About"
import Jumbotron from "../Jumbotron/Jumbotron"
import Offer from "../Offer/Offer"

export default function Main() {
  return (
    <div className={s.main}>
      <Header />
      <About />
      <Jumbotron />
      <Offer />
    </div>
  )
}
