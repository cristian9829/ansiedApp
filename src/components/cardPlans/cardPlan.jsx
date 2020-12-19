import React from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck, faCheck, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const CardPlan = ({plan, icon, list, price, days}) => {
  return (
    <div className="card-prices">
      <FontAwesomeIcon icon={icon === "user" ? faUserCheck : faBriefcase} />
      <h2 className="title-plan">{plan}</h2>
      <div className="container-price">
        <div className="price">
          <span className="dolar">$</span>
          <span className="numb">{price}</span>
        </div>
        <div className="description">
          <p>suscribcion por {days} dias</p>
        </div>
      </div>
      
      
      <div className="plan-list">
        <hr/>
        <ul>
          {list.map((data, index)=>(
            <li key={index}>
              <FontAwesomeIcon icon={faCheck} />
              <span>{data}</span>
            </li>
          ))}
        </ul>
      </div>

      <button className="btn">Suscribirme al {plan}</button>
    </div>
  );
}
 
export default CardPlan;