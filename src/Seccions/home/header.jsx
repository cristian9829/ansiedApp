import React, {useState} from 'react';
import FormRequest from '../../components/formRequest/form';

const Header = () => {
  const [backgroundRegister, setbackgroundRegister] = useState("");

  const changeBackground = (data) =>{
    setbackgroundRegister(data.newTest)
  }

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
                      <h2 className="animate__animated animate__fadeIn">CON ANSIEDAPP</h2>
                      <span>Preocupación y miedo intensos, excesivos y continuos ante situaciones cotidianas?. No se quede con la duda, 
                      registrate y haste el test</span>
                    </div>
                  </div>

                  <div className="col-md-5">
                    <FormRequest
                      changeBackground={changeBackground}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {backgroundRegister ? 
        <div className="area">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div >
        :
          <div className="hero"> 
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
          </div>
        }
    </header>
  );
}
 
export default Header;