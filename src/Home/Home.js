import React from "react";
import Styles from "./Home.module.css";
import fullLogo from "../images/alpine logo.jpg";
import { useMediaQuery } from "react-responsive";



function Home() {

  const isPortrait = useMediaQuery({
    query: '(orientation: portrait)'
  })

  return (
    <div className={Styles.homeContainer}>
      {isPortrait ? 
      <div className={Styles.homeTextBox}>
        <h1>Accueil</h1>
      </div> 
        : null}
      <div className={Styles.showCase}>
        <div className={Styles.text}>
          <div className={Styles.textBack}>
            <h1>Garantie à vie </h1>
            <p>Nos produits sont fabriqués à partir d'aluminium soudé sans jointure grâce à notre procédé d'usinage breveté de haute précision, offrant une qualité supérieure et une durabilité exceptionnelle.</p>
          </div>
        </div>
        <img
          className={Styles.fullLogo}
          src={fullLogo}
          alt="le Logo complet officiel de la compagnie"
        />
        <div className={Styles.number}>
          <div className={Styles.numberBack}>
            <p id={Styles.numberID}>450-668-6657</p>
            <p>
              Chez Alpine Aluminium, nous nous engageons également à protéger
              l'environnement en utilisant un procédé électrostatique qui
              dépasse toutes les normes environnementales.
            </p>
            <div />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
