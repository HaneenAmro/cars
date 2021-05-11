const SingleCar = (props) => {
    return (
        <div className="singleCar">
            <div> Year: {props.year} </div>            
            <div> Make: {props.make} </div>
            <div> Model: {props.model} </div> 
            <div> Price: {props.price}</div>
            <div> color: {props.color} </div>
            <div> vin: {props.vin} </div>
            <div>Dealer cost: {props.coast}</div>
            <div> Lot :
                <span> Name: {props.lotName}</span>
                <span> /City: {props.lotCity}</span>
                <span> /Country: {props.lotCountry}</span>
            </div>
        </div>
    )
}

export default SingleCar;