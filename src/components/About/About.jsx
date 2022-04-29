import React from 'react'
import s from "./About.module.sass"
import image from "../../media/image.png"


export default function About() {
  return (
    <div className={s.about}>
      <div className={s.info}>
        <div className="info_text">
          <h2>Что мы предлагаем</h2>
          <p>В нашей мастерской можно выполнить комплексное 
            техническое обслуживание велосипеда, ремонт и 
            настройку всех его узлов, шиномонтажные работы. 
            Вовремя проведенное ТО велосипеда помогает избежать 
            многих проблем и дорогого ремонта.  Все работы 
            выполняем качественно и с душой. </p>
        </div>
      </div>
      <div className="red_bike" style={{backgroundImage:`url(${image})`, 
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover"
                                      }} ></div>
    </div>
  )
}
