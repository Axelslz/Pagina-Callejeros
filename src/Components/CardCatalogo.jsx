import '../assets/Styles/Catalogo.css'


function CardCatalogo(props) {
    return (
        
            <div className="card">
                <img src={props.img} alt="" />
                <h1 className="name">{props.name}</h1>
                <h1 className="price">{props.price}</h1>
            </div>
    );
}


export default CardCatalogo;