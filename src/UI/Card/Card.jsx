import React from 'react'
import Button from '../Button'
import s from "./Card.module.sass"

export default function Card({text, style}) {
  return (
    <div className={s.card} style={style}>
      <p>{text}</p>
      <Button/>
    </div>
  )
}
