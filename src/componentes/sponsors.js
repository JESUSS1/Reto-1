export default function Sponsors() {

    const añadirSponsor = (sponsor) => {
        return (
            <div style={{ margin: "0px 10px 0px 10px" }} >
                <img className='filtro-imagen' src={"/sponsor/" + sponsor} width={110} />
            </div>
        );
    }
    //el style desde aca necesario para poder personalizar los componenetes de react-bosttrap
    return (

        <div className='div-sponsor'>
            <label className='filtro-imagen'style={{fontSize:".8em"}} >trusted by</label>
            {añadirSponsor("amazon.png")}
            {añadirSponsor("github.jpg")}
            {añadirSponsor("stripe.png")}
            {añadirSponsor("shopyfy.png")}
            {añadirSponsor("upwork.png")}
            {añadirSponsor("indeed.png")}
            {añadirSponsor("angellist.png")}
        </div>
    )

}