import React from 'react'
import s from "./Jumbotron.module.sass"

export default function Jumbotron() {
  return (
    <div className={s.jumbo}>
      <p>Приехав к нам однажды, многие наши клиенты становятся постоянными, 
        а часть из них даже друзьями. А также в нашей мастерской можно 
        отремонтировать электросамокат и электровелосипед.</p>
    </div>
  )
}
