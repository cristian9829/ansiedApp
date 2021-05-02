import React, { Fragment, useEffect, useState  } from 'react';
import {Redirect} from 'react-router-dom';
import clienteAxios from '../config/axios';
import tokenAuth from '../config/token';

const Test = ({preguntas}) => {
  const [initTest, setInitTest] = useState(false)
  const [showCuentaRegresiva, setShowCuentaRegresiva] = useState(false);
  const [cuentaRegresiva, setcuentaRegresiva] = useState(5)
  const [redirectResults, setredirectResults] = useState(false)
  const[dataForm, setDataForm] = useState([])
  const [dataUser, setDataUser] = useState(JSON.parse(localStorage.getItem("data-user")))

  

  const getDataForm = (e) =>{
    var pregunta = {
      numero: e.target.name,
      pregunta: e.target.id,
      respuesta: e.target.value,
      points: e.target.dataset.points
    }
    setDataForm([
      ...dataForm,
      pregunta
    ])
    if(dataForm != []){
      dataForm.map(data =>{
        if(data.numero == pregunta.numero){
          data.respuesta = pregunta.respuesta
          setDataForm(dataForm)
        }
      })
    }
  }


  const sendTest = (e) =>{
    e.preventDefault();

    let hoy = new Date(); 
    let test = {
      test: dataForm,
      creado: hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear()
    }
    
    var token = localStorage.getItem("token");
    if(token){
      tokenAuth(token)
    }

    clienteAxios.post('/api/test', test)
    .then((res) =>{
      console.log(res)
      setredirectResults(true)
    })
    .catch(err => console.log(err))
    
  }

  const cuentaRegresivaFunction = (e) =>{
    e.preventDefault();
    setShowCuentaRegresiva(true);
    var cuenta = 5;
    setInterval(function(){
      cuenta = cuenta -1;
      setcuentaRegresiva(cuenta)
      if(cuenta === 0){
        setInitTest(true)
      }
    }, 1000)
  }
  return (
    <Fragment>
      {initTest === false ?
          <div id="stars-container">
            <div style={{position: "fixed", top: "0px", left: "0px", height: "100%", width: "100%", flexDirection: "column", display: "flex", alignItems: "center", justifyContent: "center"}} >
              <h3 style={{fontSize: "45px", color: "white"}}>¿Preparado para el Test?</h3>
              <hr style={{border: "1px solid white", width: "60%"}}/>
              {showCuentaRegresiva ?
                <div className="caja">
                  <p style={{fontSize: "50px", fontWeight: "bold"}} className="text-white">{cuentaRegresiva}</p>
                </div>
                :
                <button className="btn btn-info" onClick={cuentaRegresivaFunction} >Hacer Test</button>
              }
            </div>
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
          </div>
        :
        <div className="section__test">
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>Hola {dataUser.name}</h1>
                <p>A continuacion encontraras 10 preguntas con opcion multiple, cada opcion tiene los siguientes puntos:</p>
                <ul>
                  <li>* Siempre: 3 puntos</li>
                  <li>* A veces: 2 puntos</li>
                  <li>* Nunca 1 punto</li>
                </ul>
                <hr/>
                <form onSubmit={sendTest}>
                  {preguntas.map((data, key) =>(
                    <div key={key} className="card p-5">
                      <p>{data.pregunta}</p>
                      <div className="container-opciones">
                        {data.opciones.map((op, index) => (
                          <Fragment key={index}>
                          <div className="form-check">
                            <label className="form-check-label" htmlFor={data.numero}>
                              <input 
                                required
                                onChange={getDataForm}
                                type="radio" 
                                className="form-check-input" 
                                id={data.pregunta}
                                data-points={op.puntos}
                                name={data.numero} 
                                value={op.opcion}  
                              />
                                {op.opcion}
                            </label>
                          </div>
                          </Fragment>
                        ))}
                      </div>
                    </div>
                  ))}
                  <br/>
                  <input type="submit" className="btn btn-info" value="Enviar Test" />
                </form>
                {redirectResults ? 
                  <Redirect to="/result-test"/>
                :
                  null
                }
              </div>
            </div>
          </div>
        </div>
      }
    </Fragment>
  );
}
 
export default Test;