import React, {Fragment, useEffect} from 'react';
import Header from '../Seccions/home/header';
import img1 from '../assets/images/1.jpg';
import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpg';

const Home = () => {
  return (
    <Fragment>
      <a className="whatsapp-contact" href="https://wa.me/573143191729?text=Hola%20necesito%20asesoria%20de%20un%20abogado" target="_blank"><img alt="Contactanos" src="https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-2-1.png" /></a>
      <Header/>
    </Fragment>
  );
}
 
export default Home;

