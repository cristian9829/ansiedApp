import React, {Fragment} from 'react';
import Header from '../Seccions/home/header';
import Plans from '../Seccions/home/plans';
import About from '../Seccions/home/about';
import AskFreq from '../Seccions/home/askFrequently';

const Home = () => {
  return (
    <Fragment>
      <a className="whatsapp-contact" href="https://wa.me/573143191729?text=Hola%20necesito%20asesoria%20de%20un%20abogado" target="_blank"><img alt="Contactanos" src="https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-2-1.png" /></a>
      <Header/>
    </Fragment>
  );
}
 
export default Home;

