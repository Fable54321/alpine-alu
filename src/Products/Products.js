
import React, { useEffect } from 'react'
import Styles from './Products.module.css'
import { useMediaQuery } from "react-responsive";
import picture1 from '../images/eurocap-standard.webp'
import picture2 from '../images/eurocap-classique.webp'
import picture3 from '../images/eurocap-elegant.webp'
import picture4 from '../images/eurocap-moderne-2.webp'
import picture5 from '../images/eurocap-euro.webp'
import picture6 from '../images/eurocap-rustique.webp'
import picture7 from '../images/contemporain.webp'
import picture8 from '../images/mont-royal.webp'
import Carousel from '../Carousel/Carousel';
import {  animateScroll as scroll } from 'react-scroll';






  


const Products = () => {


  const isPortrait = useMediaQuery({
    query: '(orientation: portrait)'
  })



  
   
    const value = isPortrait ? 110 : 200;

    const options = {
      delay: 1400,
      duration: 1200,
      smooth: true,
    };

   
    useEffect(() => {
      scroll.scrollTo(value, options);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },  []) 
    

     const images = [
      {
        src: picture1,
        title: "Le standard",
        descripiton:
          "Notre modèle Standard est proposé à un prix compétitif et convient à la plupart des installations de cheminée.",
      },
      {
        src: picture2,
        title: "Le classique",
        descripiton:
          "Le modèle Classique est un choix parfait pour ceux qui cherchent à ajouter du style et de l'élégance à leur cheminée, sans compromettre leur budget.",
      },
      {
        src: picture3,
        title: "L'élégant",
        descripiton:
          "Si vous cherchez à ajouter une touche de style et d'élégance à votre cheminée, le chapeau Élégant est un excellent choix.",
      },
      {
        src: picture4,
        title: "Le moderne",
        descripiton:
          "Cette cheminée a été spécialement conçue pour s'adapter aux styles de construction contemporains du 21ème siècle.",
      },
      {
        src: picture5,
        title: "L'euro",
        descripiton:
          "Le modèle Euro est un hommage à l'Europe traditionnelle, ajoutant une touche de charme à tous les styles de maison et de revêtements.",
      },
      {
        src: picture6,
        title: "Le rustique",
        descripiton:
          "Le style rustique revient en force ! Et pour retrouver l'apparence authentique d'un toit en tôle pincée d'antan, rien de mieux que le modèle Rustique.",
      },
      {
        src: picture7,
        title: "Le contemporain",
        descripiton:
          "Le design contemporain de ce modèle s'adapte parfaitement aux maisons d'architecture unique et moderne.",
      },
      {
        src: picture8,
        title: "Le Mont-royal",
        descripiton:
          "Un modèle spécialement conçu pour les cheminées de maçonnerie. Cependant, comme tous nos modèles, celui-ci peut être installé sur tout type de revêtement. ",
      },
    ]; 

    
    


  
      
   

    return (
      <div className={Styles["products-main"]}>

          
          <Carousel images={images} />
        </div>
      
    );
}

export default Products
