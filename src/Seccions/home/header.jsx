import React from 'react';
import FormRequest from '../../components/formRequest/form';

const Header = () => {
  return ( 
    <header className="section__home-hero">
      <div className="overlay">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="container-header">
                <div className="row">
                  <div className="col-md-7">
                    <div className="container-text">
                      <h2 className="animate__animated animate__fadeIn">CON IURISCLOUD SIEMPRE ESTARÁS CON TU ABOGADO</h2>
                      <span>Somos la plataforma en donde puedes hacer tus consultas legales y serán respondidas en tiempo real por 
                      uno de nuestros abogados. Sin esperas, sin agendamientos y sin reservas.</span>
                    </div>
                  </div>

                  <div className="col-md-5">
                    <FormRequest/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
 
export default Header;