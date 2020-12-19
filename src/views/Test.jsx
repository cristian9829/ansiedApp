import React, { Fragment, useState  } from 'react';
import {Redirect} from 'react-router-dom';

const Test = ({preguntas}) => {
  const [redirectResults, setredirectResults] = useState(false)
  const[dataForm, setDataForm] = useState([])

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
    localStorage.setItem("preguntas",JSON.stringify(dataForm));
    setredirectResults(true)
  }
  return (
    <div className="section__test">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Hola al test</h1>
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
  );
}
 
export default Test;