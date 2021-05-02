import React, {Fragment, useState} from 'react';
import './style.scss';
import FormConsult from './formConsult';
import FormRegister from './formRegister';
import Error from '../../components/ErrorForm/Error';
import {Redirect} from 'react-router';
import clienteAxios from '../../config/axios';

const FormRequest = ({changeBackground}) => {

  const [formState, setformState]= useState({
    error: false,
    redirectTest: false,
    redirectResult: false
  });

  const [Changeform, setChangeform]= useState({
    newTest: true
  });

  
  const { error,  redirectTest, redirectResult} = formState;
  const {newTest} = Changeform;

  changeBackground(Changeform)

  

  const setDataFormConsult = data =>{
    console.log(data)
    clienteAxios.post('/api/auth', data)
    .then((res) =>{
      console.log(res)
      var dataForm = JSON.stringify(data);
      localStorage.setItem("token", res.data.token);
      setformState({
        redirectResult: true
      })  
    })
    .catch(err => console.log(err))
  }

  const setDataFormRegister = data =>{
    console.log(data)
    localStorage.setItem("data-user", JSON.stringify(data));
    clienteAxios.post('/api/usuarios', data)
    .then((res) =>{
      console.log(res)
      localStorage.setItem("token", res.data.token);
      setformState({
        redirectTest: true
      })  
    })
    .catch(err => console.log(err))
  }

  return (  
    <div>
      <div className="container">
        <div className="row">
          <div className="col mx-auto">
            <div className="card card-signin my-5">
              {error ? 
                <Error 
                  message="Llene correctamente el formulario"
                />
                :
                null
              }
              <div className="card-body">
                {newTest ? 
                  <FormRegister
                    setformState={setformState}
                    setChangeform={setChangeform}
                    setDataReady={setDataFormRegister}
                  />
                  :
                  <FormConsult
                    setformState={setformState}
                    setChangeform={setChangeform}
                    setDataReady={setDataFormConsult}
                  />
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      {redirectResult ? <Redirect to="/result-test" /> : null}
      {redirectTest ? <Redirect to="/test" /> : null}
    </div>
  );
}
 
export default FormRequest;