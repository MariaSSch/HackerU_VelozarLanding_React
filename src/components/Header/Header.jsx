import React, {useState} from 'react'
import Button from '../../UI/Button'
import logo from "../../media/logo.png"
import s from "./Header.module.sass"


export default function Header() {

  let [menu, setMenu] = useState(false);

const closeMenu = () => setMenu(()=>menu ? menu = !menu : menu);
  return (
    <header>
      <div className={s.logo}><img src={logo} alt="logo" /></div>
      <div className ={(menu ? `${s.active}` : "") +" "+ `${s.nav}`}>
        <div onClick={closeMenu}>
          <a href='#'>О нас</a>
        </div>
        <div onClick = {closeMenu}><a href='#'>Услуги</a></div>
        <div onClick = {closeMenu}><a href='#'>Аренда</a></div>
      </div>
      <div onClick={() => setMenu(()=> menu = !menu)} className={s.nav_btn}>=</div>
      <Button>Связаться</Button>
    </header>
  )
}
