import React from 'react';
import ImgAbout from '../../img/about/about.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <div className="section__home-about">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={ImgAbout} />
          </div>
          <div className="col-md-6">
            <div className="container-about">
              <h1>¿Quienes somos?</h1>
              <br/>
              <p>Somos la plataforma en donde puedes hacer tus consultas legales y serán respondidas en tiempo real por 
              uno de nuestros abogados. Sin esperas, sin agendamientos y sin reservas.</p>

              <ul>
                <li><FontAwesomeIcon icon={ faCircle} />  Loans with quick approval.</li>
                <li><FontAwesomeIcon icon={ faCircle} />  Customize a loan based on the amount.</li>
                <li><FontAwesomeIcon icon={ faCircle} />  Good credit profile and you have built your loan.</li>
                <li><FontAwesomeIcon icon={ faCircle} />  We provide online instant cash loans.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

 
export default About;
