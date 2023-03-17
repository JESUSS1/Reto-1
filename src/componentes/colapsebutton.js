import CollapseButtonJob from "./colapsebutton-job"
export default function CollapseButton(props) {

    return (
        <div className="Container-collapsebutton">
            <div className="collapsebutton-1">
                <h2 style={{ fontWeight: "inherit", marginTop: "10px" }} >{props.datos.entidad} esta buscando a:</h2>
                <h2 style={{ fontWeight: "bold" }} >Remote {props.datos.titulo} </h2>
                <h5 style={{ fontWeight: "bold" }} >Descripción </h5>
                <p className="parrafo" ><a style={{ color: "black", fontWeight: "bold" }} href="/#" >{props.datos.entidad}</a> Mollit Lorem ut tempor aliquip ullamco Lorem eiusmod culpa aute aliqua incididunt laborum aute sunt. Eu quis laborum ea mollit nostrud minim velit sit mollit fugiat anim adipisicing. Proident anim aliqua qui ullamco. Laboris ex anim nostrud veniam non ex amet commodo culpa. Laboris quis aliqua ex proident velit. Duis eiusmod proident cupidatat non cillum. Reprehenderit ut ipsum est do sunt anim exercitation.
                </p><br />

                <h5 style={{ fontWeight: "bold" }} >Sobre el Rol </h5>
                <p className="parrafo" ><a style={{ color: "black", fontWeight: "bold" }} href="/#" >{props.datos.entidad}</a> Mollit Lorem ut tempor aliquip ullamco Lorem eiusmod culpa aute aliqua incididunt laborum aute sunt. Eu quis laborum ea mollit nostrud minim velit sit mollit fugiat anim adipisicing. Proident anim aliqua qui ullamco. Laboris ex anim nostrud veniam non ex amet commodo culpa. Laboris quis aliqua ex proident velit. Duis eiusmod proident cupidatat non cillum. Reprehenderit ut ipsum est do sunt anim exercitation.
                </p><br />

            </div>
            <div className="collapsebutton-2">
                <CollapseButtonJob icono={props.datos.icono} entidad={props.datos.entidad} enlace={props.datos.enlace} />
            </div>
            <div className="collapsebutton-3">
            <h5 style={{ fontWeight: "bold" }} >Tus Responsabilidades </h5>
                <ul className="parrafo">
                    <li>Eu quis laborum ea mollit nostrud minim velit sit mollit fugiat anim adipisicing. Proident anim aliqua qui ullamco. Laboris ex anim nostrud veniam non ex amet commodo culpa.</li>
                    <li>Mollit Lorem ut tempor aliquip ullamco Lorem eiusmod culpa aute aliqua incididunt laborum aute sunt. </li>
                    <li>Laboris quis aliqua ex proident velit. Duis eiusmod proident cupidatat non cillum</li>
                </ul>
                <br />

                <h5 style={{ fontWeight: "bold" }} >Sobre ti </h5>
                <ul className="parrafo">
                    <li>Eu quis laborum ea mollit nostrud minim velit sit mollit fugiat anim adipisicing. Proident anim aliqua qui ullamco. Laboris ex anim nostrud veniam non ex amet commodo culpa.</li>
                    <li>Mollit Lorem ut tempor aliquip ullamco Lorem eiusmod culpa aute aliqua incididunt laborum aute sunt. </li>
                    <li>Laboris quis aliqua ex proident velit. Duis eiusmod proident cupidatat non cillum</li>
                    <li>Mollit Lorem ut tempor aliquip ullamco Lorem eiusmod culpa aute aliqua incididunt laborum aute sunt. </li>
                </ul>
                <br />
            </div>
        </div>
    )

}