import React from 'react'
import CardFromList from '../CardFromList';
import s from "./Offer.module.sass"

export default function Offer() {
  const offerList =[
    {
      id: 1,
      note: "Годовое ТО",
      bgcolor: "#22356F"
    },
    {
      id: 2,
      note: "Выравнивание колес",
      bgcolor: "#0052C1"
    },
    {
      id: 3,
      note: "Настройка переключателей",
      bgcolor: "#76B58B"
    }
  ];
  return (
    <div className={s.offer}>
      {offerList.map(t => <CardFromList key = {t.id} {...t} />)}
    </div>
  )
}
