import { Image, Form , Button } from 'react-bootstrap'
import { useState, useEffect } from 'react';

export default function Filtrador() {

    const crearSelector =(nombre,optiones)=> {
        return (
            <Form.Select className='div-compartir' aria-label={nombre} style={{width:"15%",fontWeight:"bold",borderRadius:"15px",marginLeft:"15px"}} >
              <option > {nombre} </option>
              <option value="1">Option One</option>
              <option value="2">Option Two</option>
              <option value="3">Option Three</option>
            </Form.Select>
          );
    }

    //el style desde aca necesario para poder personalizar los componenetes de react-bosttrap
    return (

        <div className='div-filtrado-child'>
            <div className='divCentral' >
                <Image roundedCircle={true} src={"/icons/icon-3.jpg"} width={30} />
            </div>
            {crearSelector("Search",[])}
            {crearSelector("Location",[])}
            {crearSelector("Salary",[])}
            {crearSelector("Benefits",[])}
            <div style={{width:"100%",display:"flex"}}  >
                <label className='div-compartir' style={{fontWeight:"bold",borderRadius:"15px",width:"20%",marginLeft:"auto"}}>Sort by</label>
            </div>
        </div>
    )

}