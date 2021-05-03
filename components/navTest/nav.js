import React from 'react';
import './style.scss';

const NavTest = ({porcentaje}) => {
  porcentaje = porcentaje ? porcentaje : 0;
  var colors = {
    100: "#0046fe",
    90: "#0092d1",
    80: "#1bb319",
    70: "#c6ea01",
    60: "#fefe02",
    50: "#febd00",
    40: "#fe5201",
    30: "#ff2107",
    20: "#c3124b",
    10: "#9e01b4"
  }
  var bg = colors[porcentaje];
  return (
    <nav id="nav-test" class="fixed-top navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="container-nav">
              <p className="mr-1 text-white">{porcentaje}%</p>
              <div className="container-banner">
                <div style={{background: bg,transition: "width 2s",width: porcentaje + "%"}} className="banner banner-animate"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
 
export default NavTest;