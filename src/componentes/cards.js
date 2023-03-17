import { Collapse, Card, Image, Badge, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react';

import CollapseButton from './colapsebutton'


let estados = [];
let colores_mantener = [];

export default function Tarjetas(props) {

    const [open, setOpen] = useState(false);
    let contadorCard = 0;

    let colores = [
        '#EEFF5F',
        '#FCF3CF',
        '#FAE5D3',
        '#E8DAEF',
        '#F4D03F',
        '#58D68D',
        '#3498DB',
        '#E74C3C'
    ];

    useEffect(() => {
        estados = [false, false, false];
    }, [])

    const cambiarEstado = (id) => {
        estados[id - 1] = !estados[id - 1];
        setOpen(!open);
    }

    const elegirColorRandom = () => {
        let colorRandom = colores[Math.floor(Math.random() * colores.length)]
        colores_mantener.push(colorRandom)
        return colorRandom
    }


    //el style desde aca necesario para poder personalizar los componenetes de react-bosttrap
    return (
        <>
            <style type="text/css">
                {`
                .btn-efect {
                    color: #ffffff00;background-color: #ffffff00;width: 80%;border-radius: 15px;font-size: 1.2em;fontWeight: "bold";padding: 5px ;
                }
                .btn-efect:hover {
                    color: #ffffff;background-color: #ff7a7a;
                }  
                `}
            </style>

            {
                props.datos.map(datos => {
                    contadorCard++;
                    return (
                        <Card border="light" style={{
                            width: '100%', height: "auto", borderRadius: "20px",
                            marginTop: "10px", backgroundColor: colores_mantener[contadorCard - 1] ? colores_mantener[contadorCard - 1] : elegirColorRandom()
                        }}>
                            <div className='card-grid-container'>
                                <div className='divCentral' >
                                    <Image roundedCircle={true} src={'/icons/' + datos.icono} width={60} />
                                </div>

                                <div className='card-grid-informacion'>
                                    <label style={{ color: "#000000", fontWeight: "bold", fontSize: "1.2em" }} >{datos.titulo}</label>
                                    <label style={{ color: "#000000", fontWeight: "inherit", fontSize: "1em" }} >{datos.entidad} </label>
                                    <div className='grupo-badge'>
                                        {
                                            datos.sub_info.map(sub_i =>
                                                <Badge pill bg="light" text="dark">
                                                    {sub_i}
                                                </Badge>)
                                        }

                                    </div>
                                </div>

                                <div className='card-tags'>
                                    {
                                        datos.tags.map(tag =>
                                            <div className='badge-card'>
                                                {tag}
                                            </div>)
                                    }

                                </div>
                                <div className='card-tiempo'>
                                    <Image roundedCircle={true} src='/acortar.png' width={20} />
                                    <label style={{ color: "#000000", fontWeight: "normal", fontSize: "1em" }} >{datos.tiempo} </label>
                                </div>
                                <div className='card-tiempo'>
                                    <Button variant='efect'
                                        onClick={() => cambiarEstado(datos.id)}
                                        aria-controls={"collapse-text_" + datos.id}
                                        aria-expanded={estados[datos.id - 1]}  >Aplicar</Button>

                                </div>
                            </div>

                            <Collapse in={estados[datos.id - 1]}>
                                <div id={"collapse-text_" + datos.id}>
                                    <CollapseButton datos={datos} />
                                </div>
                            </Collapse>

                        </Card>
                    )
                }



                )
            }



        </>
    )

}