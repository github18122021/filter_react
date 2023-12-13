import React from 'react';
import './Car.css';

function car(props) {
  let {id, brand, model, year, color, price} = props.car;
  let initiateWith = props.initiateWith;
  // let stillDefault = initiateWith  === "undefined" ? true : false;


  return (
    <div className='container'>

      {
        initiateWith === "undefined" ? <><p>{brand}</p></> : <>{
          brand.startsWith(initiateWith) ? <p>{brand}</p> : <></>
        }</>
      }

      
      {/* <p>{id}</p>
      <p>{brand}</p>
      <p>{model}</p>
      <p>{year}</p>
      <p>{color}</p>
      <p>{price}</p> */}
    </div>
  )
}

export default car;
