import React from 'react'
import Card from '../../UI/Card'
import s from "./Offer.module.sass"

export default function Offer() {
  return (
    <div className={s.offer}>
      <Card style={{backgroundColor: "#22356F"}} text={"Годовое ТО"}/>
      <Card style={{backgroundColor: "#0052C1"}} text={"Выравнивание колес"}/>
      <Card style={{backgroundColor: "#76B58B"}} text={"Настройка переключателей"}/>
    </div>
  )
}
