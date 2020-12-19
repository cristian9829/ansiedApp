import React, {Fragment, useState} from 'react';
import './style.scss';
import FormConsult from './formConsult';
import FormRegister from './formRegister';
import Error from '../../components/ErrorForm/Error';
import {Redirect} from 'react-router';

const FormRequest = () => {

  const [formState, setformState]= useState({
    error: false,
    redirectTest: false
  });

  const [Changeform, setChangeform]= useState({
    newTest: true
  });

  
  const { error,  redirectTest} = formState;
  const {newTest} = Changeform;

  

  

  const setDataFormConsult = data =>{
    console.log(data)
    var dataForm = JSON.stringify(data);
    sessionStorage.setItem("ansiedApp", dataForm);
    setformState({
      redirectTest: true
    })
  }

  const setDataFormRegister = data =>{
    console.log(data)

    var dataForm = JSON.stringify(data);
    sessionStorage.setItem("ansiedApp", dataForm);
    setformState({
      redirectTest: true
    })
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
      {redirectTest ? <Redirect to="/test" /> : null}
    </div>
  );
}
 
export default FormRequest;