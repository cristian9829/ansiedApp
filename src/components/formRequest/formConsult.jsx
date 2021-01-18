import React, {Fragment, useState} from 'react';

const FormConsult = ({setChangeform, setDataReady, setformState}) => {

  const [formConsult, setformConsult]= useState({
    email: "",
    password:""
  });

  var {email, password} = formConsult;

  const setDataFormConsult = e =>{
    e.preventDefault();
    if(email === "" || password === ""){
      setformState({
        error: true
      })
      return;
    }
    var dataForm = {
      email,
      password
    }

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
            type="email" 
            id="email" 
            name="email"
            className="form-control" 
            placeholder="Correo"  
            onChange={getDataFormConsult}
            value={email}  
          />
          <label htmlFor="email">Correo</label>
        </div>
        <div className="form-label-group">
          <input 
            type="password" 
            id="password" 
            name="password"
            className="form-control" 
            placeholder="Contraseña"  
            onChange={getDataFormConsult}
            value={password}  
          />
          <label htmlFor="password">Contraseña</label>
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