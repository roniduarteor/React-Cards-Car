import "./Cards.css"

const Card = ({imageCar, title, text, textButton, color}) => {
    return(
        <>
    <div className="Card" style={{backgroundColor: color}}>
        <div className="informations">
            <img src={imageCar} alt="" />
            <h1>{title}</h1>
            <p>{text}</p>
        </div>

        <div>
            <button style={{color: color}}>{textButton}</button>
        </div>
    </div>
        </>
    )
}

export default Card