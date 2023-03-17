import { Image } from 'react-bootstrap'
export default function CollapseButtonJob(props) {
    return (
        <div className='compartir-postulacion'>
            <Image style={{ border: "1px solid #000000" }} roundedCircle={true} src={'/icons/' + props.icono} width={"30%"} />
            <h2 style={{ color: "black", fontWeight: "bold", marginTop: "10px" }} >{props.entidad} </h2>
            <label><a style={{ color: "black", fontWeight: "bold", fontSize: "1.2em" }} href="/#" >{props.enlace}</a></label>
            <button className='btn-efect-visible' >Aplicar al Trabajo</button>
            <div className='flex-grupo-1'>
                <Image src={'ojos.png'} width={"8%"} />
                <label style={{ fontSize: "1.2em" }}>3,300 views</label>
            </div>
            <div className='flex-grupo-1'>
                <Image src={'check.png'} width={"8%"} />
                <label style={{ fontSize: "1.2em" }} >150 aplicados (6%)</label>
            </div>
            <label style={{ fontSize: "1.2em", fontWeight: "bold", marginTop: "10px" }} >Compartir este trabajo:</label>
            <div className='div-compartir'>
                <label style={{ fontSize: "1.1em" }} >https://www.gooogle.com</label>
            </div>
            <label style={{ fontSize: "1em", marginTop: "10px" }} >Get <a style={{ color: "black", fontWeight: "bold" }} href="/#" >rok.co</a> shortLink </label>
            <br />
            <div style={{ borderStyle: "solid", border: "1px solid #000000", width: "100%" }} />
            <br />
            <label style={{ fontSize: "1.2em", marginBottom: "10px" }} >Also hiring:</label>
            <label style={{ fontSize: "1.3em", fontWeight: "bold", width: "80%", textAlign: "center" }} ><a style={{ color: "black", fontWeight: "bold" }} href="/#" >People Operations Generalist</a></label>
            <br />
        </div>
    )

}