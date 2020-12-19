import React, {Fragment, useState} from 'react';

const FormConsult = ({setChangeform, setDataReady, setformState}) => {

  const [formConsult, setformConsult]= useState({
    id: ""
  });

  var {id} = formConsult;

  const setDataFormConsult = e =>{
    e.preventDefault();
    if(id === ""){
      setformState({
        error: true
      })
      return;
    }
    var dataForm = {id}

    setDataReady(dataForm)
  }

  const getDataFormConsult = (e) =>{
    setformState({
      error: false
    })
    setformConsult({
      ...formConsult,
      [e.target.name]: e.target.value
    })
  }
  return (
    <Fragment>
      <h5 className="card-title text-center">Consultar Resultados</h5>
      <form onSubmit={setDataFormConsult} className="form-signin">
        <div className="form-label-group">
          <input 
            type="number" 
            id="id" 
            name="id"
            className="form-control" 
            placeholder="Cedula"  
            onChange={getDataFormConsult}
            value={id}  
          />
          <label htmlFor="id">Cedula</label>
        </div>
        <input value="Consultar resultado" className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"/>
        <hr className="my-4" />
        <p className="pt-2">¿Eres nuevo?</p>
        <button onClick={ (e) => { setChangeform({ newTest: true }) }} className="btn btn-lg btn-primary btn-block text-uppercase">Hacer Test</button>
      </form>
    </Fragment>
  );
}
 
export default FormConsult;