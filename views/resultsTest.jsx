import React, {Fragment, useState, useEffect} from 'react';
import clienteAxios from '../config/axios';
import tokenAuth from '../config/token';

const ResultTest = (props) => {
  

  const [puntos, setPuntos] = useState([])
  const [resultadoTest, setResultadoTest] = useState(false)
  const [usuario, setUsuario] = useState({})
  
  const puntajeCal = respuestas =>{
    var puntosData = [];
      console.log(respuestas)
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
  }

  useEffect(() => {

    var token = localStorage.getItem("token");
    if(token){
      tokenAuth(token)
    }
    clienteAxios.get('/api/test')
    .then((res) =>{
      puntajeCal(res.data.dataResponse.dataTest[0].test)
      console.log(res.data.dataResponse)
      setUsuario(res.data.dataResponse.dataUsuario)
    })
    .catch(err => console.log(err))

  }, []);

  return (
    <Fragment>
      <div className="hero" style={{backgroundColor: "#e8e8e8"}}> 
        <div style={{border: "solid 1px #c4c6cb"}} className="cube"></div>
        <div style={{border: "solid 1px #c4c6cb"}} className="cube"></div>
        <div style={{border: "solid 1px #c4c6cb"}} className="cube"></div>
        <div style={{border: "solid 1px #c4c6cb"}} className="cube"></div>
        <div style={{border: "solid 1px #c4c6cb"}} className="cube"></div>
        <div style={{border: "solid 1px #c4c6cb"}} className="cube"></div>
        <div className="container-result">
          <div className="card">
            <h1>Resultados Test</h1>
            <hr/>
            <p><b>Nombre: </b> {usuario.name}</p>
            <p><b>Email:</b> {usuario.email}</p>
            <p><b>Registro del test:</b> {usuario.registro}</p>
            <p><b>Suma de los puntos Valoracion:</b> {resultadoTest}</p>
            {resultadoTest >= 0 && resultadoTest <= 16 ? 
              <div>
                <h3>Descripcion:</h3>
                <span>A pesar de que en algunas ocasiones te encuentres más nervioso de lo habitual tu respuesta ante situaciones ansiosas es adecuada y dentro de lo esperable</span>
              </div>
              :
              null
            }

            {resultadoTest >= 17 && resultadoTest <= 22 ? 
              <div>
                <h3>Descripcion:</h3>
                <span>Tus niveles de ansiedad se sitúan dentro del límite de normalidad. Pero ten cuidado, no te sobrecargues demasiado e intenta gestionar tu ansiedad cuando sientas que sus niveles empiezan a ser elevados. Recuerda que puedes contar con nuestra ayuda.</span>
              </div>
              :
              null
            }

            {resultadoTest > 22 && resultadoTest <= 30 ? 
              <div>
                <h3>Descripcion:</h3>
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