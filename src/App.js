import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Image } from 'react-bootstrap';

import Cabecera from './componentes/header';
import Tarjetas from './componentes/cards';
import Filtrador from './componentes/filtrador';
import Sponsors from './componentes/sponsors';

import datosJson from "./datos.json"



function App() {

  let datosTarget = datosJson;


  return (
    <div className="App">
      
      <div className="App-header">
        <Cabecera />

      </div>

      <div className='Container'>
        <div className='div-sponsors'> 
        <Sponsors/> 
        </div>
        <div className='div-filtrado'>
          <Filtrador/>
          <br/>
        </div>
        <div className='div-targetas'>
          <Card border="light" style={{width: '100%', height: "auto", borderRadius: "20px", marginTop: "10px", backgroundColor: "#0984ff"}}>
            <div className='card-grid-container'>
              <div className='divCentral' >
                <Image roundedCircle={true} src={"pluma.png"} width={60} />
              </div>
              <div className='card-grid-informacion'>
                <label style={{ color: "#fefafa", fontWeight: "bold", fontSize: "1.2em" }} >Normad Health by SafetyWing</label>
                <label style={{ color: "#fefafa", fontWeight: "inherit", fontSize: "1em" }} >Global health insurance for remote workers and nomads </label>
                <div></div>
              </div>
              
              <div></div>
              <div></div>
              <div className='card-tiempo'>
                <button className='btn-efect-span' >Sing me up</button>
              </div>

            </div>
          </Card>
          <Tarjetas datos={datosTarget} />
        </div>

      </div>
      <br/>



    </div>
  );
}

export default App;
