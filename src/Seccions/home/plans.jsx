import React from 'react';
import CardPlan from '../../components/cardPlans/cardPlan';


const Prices = () => {
  return (
    <div className="section__home-prices">
      <div className="container">
        <div className="row text-center">
          <div className="col">
            <h1>Planes de suscribción</h1>
            <hr/>
            <br/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <CardPlan
              plan="Personal"
              icon="user"
              description="Sabemos que en ocasiones suelen surgir dudas legales de cómo proceder en diversos escenarios; pero con nuestro plan personal puedes relajarte. Puedes estar en permanente comunicación con tu abogado de confianza desde $25.000 mensuales."
              price={25}
              days={15}
              list={[
                "Borrow - $350 over 3 months",
                "Borrow - $350 over 3 months"
              ]}
            />
          </div>
          <div className="col-md-6">
            <CardPlan
              plan="Empresarial"
              icon="business"
              description="Sabemos que tener una empresa o negocio genera muchas inquietudes en temas legales, ¡pero tranquilo! Con Iuriscloud las resuelves al instante. Puedes estar en permanente comunicación con tu abogado de confianza desde $35.000 mensuales."
              price={35}
              days={30}
              list={[
                "Borrow - $350 over 3 months",
                "Borrow - $350 over 3 months",
                "Borrow - $350 over 3 months",
                "Borrow - $350 over 3 months"
              ]}
            />
          </div>  
        </div>
      </div>
    </div>
  );
}
 
export default Prices;