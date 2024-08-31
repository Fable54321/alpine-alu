import React, { useState } from 'react'
import Styles from './NavBar.module.css'
import logo from '../images/logo_only.png'
import letters from '../images/letters only.png'
import dropDown from '../images/dropdown.png'
import close from '../images/close.png'
import { Link, useNavigate } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

const NavBar = () => {

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive ? true : false) 
    console.log(isActive);
  }

  const navigate = useNavigate()

  const isPortrait = useMediaQuery({
    query: '(orientation: portrait)'
  })

  const homePage = () => {
navigate("/");
  }

  return (
    <div className={Styles["NavBar-Container"]}>
      <div className={Styles.Left}>
        <img
          onClick={homePage}
          className={Styles.logoOnly}
          src={logo}
          alt="Le logo de l'entreprise"
        />
      </div>
      <img
        className={Styles.lettersOnly}
        src={letters}
        alt="le nom de l'entreprise"
      />

      <div className={Styles.flexTest}>
        {isPortrait ? (
          <div
            className={`${isActive ? Styles.show : Styles["hide-dropDown"]}`}
          >
            <img
              className={Styles.hideIcon}
              onClick={handleClick}
              src={dropDown}
              alt="a dropdown list icon"
            />
            <img
              className={Styles.closeIcon}
              onClick={handleClick}
              src={close}
              alt="a close button"
            />
          <div className={Styles.links}>
            <Link onClick={handleClick} to="/">Accueil</Link>
            <Link onClick={handleClick} to="/">À propos</Link>
            <Link onClick={handleClick} to="/produits">Nos produits</Link>
            <Link onClick={handleClick} to="/">Soumission</Link>
            <Link onClick={handleClick} to="/">Contact</Link>
          </div> 
          </div>
        ) : (
          <>
            <Link to="/home">Accueil</Link>
            <Link to="/">À propos</Link>
            <Link onClick={handleClick} to="/produits">Nos produits</Link>
            <Link to="/">Soumission</Link>
            <Link to="/">Contact</Link>
          </>
        )}
      </div>
    </div>
  );
}

export default NavBar
