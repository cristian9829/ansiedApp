import React from 'react';


const Error = ({message}) => {
  return (
    <span className="alert alert-danger">{message}</span>
  );
}
 
export default Error;