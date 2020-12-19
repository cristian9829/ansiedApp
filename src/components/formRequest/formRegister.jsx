import React, {Fragment, useState} from 'react';

const FormRegister = ({setChangeform, setDataReady, setformState}) => {


  const [formRegister, setFormRegister] = useState({
    name: "",
    id: ""
  })

  const {name, id} = formRegister;

  const getDataFormRegister = (e) =>{
    setformState({
      error: false
    })
    setFormRegister({
      ...formRegister,
      [e.target.name]: e.target.value
    })
  }

  const getdataForm = (e) =>{
    e.preventDefault();
    if(name === "" || id === ""){
      setformState({
        error: true
      })
      return;
    }
    var dataForm = {
      id,
      name
    }
    setDataReady(dataForm)
  }
  return (
    <Fragment>
      <h5 className="card-title text-center">Hacer Test</h5>
      <form className="form-signin">
        <div className="form-label-group">
          <input 
            type="text" 
            id="name" 
            name="name"
            className="form-control" 
            placeholder="Nombre"  
            autoFocus 
            onChange={getDataFormRegister}
            value={name}  
          />
          <label htmlFor="name">Nombre</label>
        </div>

        <div className="form-label-group">
          <input 
            type="number" 
            id="id" 
            name="id"
            className="form-control" 
            placeholder="Cedula"  
            onChange={getDataFormRegister}
            value={id}  
          />
          <label htmlFor="id">Cedula</label>
        </div>

        <button onClick={getdataForm}  className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Hacer test</button>
        <hr className="my-4" />
        <p className="pt-2">¿Ya te hiciste el test?</p>
        <button onClick={ (e) => { setChangeform({ newTest: false }) }} className="btn btn-lg btn-facebook btn-block text-uppercase"><i className="fab fa-facebook-f mr-2"></i> Consultar resultado</button>
      </form>
    </Fragment>
  );
}
 
export default FormRegister;