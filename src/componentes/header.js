import { Card } from "react-bootstrap";
export default function Cabecera() {
    // <img src={"/img/img-header.jpg"} className="App-logo" />
    //<div className="App-logo" style={{backgroundImage:"url(/img/img-header.jpg)",backgroundSize:"100% 100%"}} ></div>
    return (
        <div style={{ position: "relative" }}>
            <img src={"/img/img-header.jpg"} className="App-logo" />
            <div className="custom-shape-divider-bottom-1678910897">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>

            <div style={{ width: "100%", display: "flex", position: "absolute", zIndex: "3",marginTop:"10px" }}  >
                <label className='div-compartir' style={{ fontWeight: "bold", marginLeft: "auto", marginRight: "10px", backgroundColor: "#00aaff" }}>Health insurance</label>
                <label className='div-compartir' style={{ fontWeight: "bold", marginRight: "10px", backgroundColor: "#ffffff", color: "black" }}>Log in</label>
                <label className='div-compartir' style={{ fontWeight: "bold", marginRight: "10px", backgroundColor: "#fd5a5a" }}>Post a remote job</label>
            </div>


            <div className='div-targetas' style={{ width: "100%",height:"50vh", display: "flex", position: "absolute", zIndex: "3", justifyContent: "center", alignItems: "center"}} >
                <Card border="light" style={{ width: '80%', height: "80px", borderRadius: "20px", backgroundColor: "#FFFFFF",justifyContent:"center",alignItems:"center",alignSelf:"flex-end",boxShadow:"0px 1px 5px 0px rgba(200, 200, 200, 0.75)" }}>
                    <div className='divCentral' >
                        
                        <label style={{ color: "black", fontWeight: "bold", fontSize: "1em" }} >Hiring remotely? Reach 2,000,000 remote workers on the #1 Remote Job Board </label>
                        <label className='div-compartir' style={{ fontWeight: "bold", marginRight: "10px", backgroundColor: "#fd5a5a",marginLeft:"10px" }}>Post a remote job</label>
                        <label className='div-compartir' style={{ fontWeight: "bold", marginRight: "10px", backgroundColor: "#FFFFFF",border:"2px solid #fd5a5a",color:"#fd5a5a",marginLeft:"10px" }}>Hide this</label>
                    </div>


                </Card>

            </div>



        </div>
    )
}