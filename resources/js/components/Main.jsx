import React from "react";
import ReactDOM from "react-dom/client";
import '../../css/app.css'
import Navbar from "./Navbar/Navbar";
import { BrowserRouter} from "react-router-dom";
import Header from "./Header";
import Section from "./Navbar/Section";
import Footer from "./Footer/Footer";
import Carousel from "./Carosel/Carousel";
import Contenu from "./Contenu/Contenu";
import Fromation from "./Formation/Fromation";
import Objectif from "./Objectif/Objectif";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Evenement from "./Evenemnt/Evenement";
import HomePartenaire from "./Partenaire/HomePartenaire";




 export default function Main(){
  
    return (
     
      <BrowserRouter>
         <Header/>
         <Navbar/>
         <Section/>
         <Carousel/>
         <Contenu/>
         <Fromation/>
         <Objectif/>
         <Evenement/>
         <HomePartenaire/>
         <Footer/>
      </BrowserRouter>
  )
}

const element = document.getElementById('app');
const root = ReactDOM.createRoot(element);
root.render(<Main />);

