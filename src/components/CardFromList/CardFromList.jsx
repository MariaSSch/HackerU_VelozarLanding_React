import React from 'react'
import Button from '../../UI/Button'
import s from "./CardFromList.module.sass"

export default function CardFromList({id, note, bgcolor}) {

  return (
    <div className={s.card} style={{backgroundColor: `${bgcolor}`}}>
      <p>{note}</p>
      <Button />
    </div>
  )
}
