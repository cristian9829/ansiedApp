import React, {Fragment, useState, useEffect} from 'react';

const ResultTest = () => {
  
  const [respuestas, setRespuestas] = useState(JSON.parse(localStorage.getItem("preguntas")))

  const [puntos, setPuntos] = useState([])
  const [resultadoTest, setResultadoTest] = useState(false)
  

  useEffect(() => {
    var puntosData = [];
    respuestas.map((data, index) =>{
      if(index < respuestas.length){
        puntosData.push(respuestas[index].points);
      }
    })
    setPuntos(puntosData)

    //Sumando los puntos
    var resultado = 0;
    puntosData.map(data =>{
      resultado = resultado += Number(data);
    })
    setResultadoTest(resultado)
  }, respuestas);

  

  
  
  return (
    <Fragment>
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Resultados Test</h1>
          <p>Suma de los puntos Valoracion: {resultadoTest}</p>
          {resultadoTest == 0 && resultadoTest <= 16 ? 
            <div>
              <h3>Tus resultados son:</h3>
              <span>A pesar de que en algunas ocasiones te encuentres más nervioso de lo habitual tu respuesta ante situaciones ansiosas es adecuada y dentro de lo esperable</span>
            </div>
            :
            null
          }

          {resultadoTest > 17 && resultadoTest <= 22 ? 
            <div>
              <h3>Tus resultados son:</h3>
              <span>Tus niveles de ansiedad se sitúan dentro del límite de normalidad. Pero ten cuidado, no te sobrecargues demasiado e intenta gestionar tu ansiedad cuando sientas que sus niveles empiezan a ser elevados. Recuerda que puedes contar con nuestra ayuda.</span>
            </div>
            :
            null
          }

          {resultadoTest > 22 && resultadoTest <= 30 ? 
            <div>
              <h3>Tus resultados son:</h3>
              <span>Sufres unos niveles de ansiedad demasiados altos. Es importante que aprendas a gestionarlos, ya que éstos pueden dar lugar a problemas emocionales y de salud importantes. Comienza tomándote la vida de forma más relajada y, además nosotros te brindamos ayuda especializada.</span>
            </div>
            :
            null
          }
        </div>
      </div>
    </div>
    </Fragment>
  );
}
 
export default ResultTest;