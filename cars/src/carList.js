import SingleCar from './singleCar.js';

const CarList = (props) => {

    return (
        <div>
            { props.carData.map((item) => (
                < SingleCar make={item.make} year={item.year} model={item.model} vin={item.vin} color={item.color} value={props.value}
                    price={item.askingPrice} cost={item.dealerCost} dateListed={item.dateListed} lotName={item.lot.name} 
                    lotCity={item.lot.city}  lotCountry={item.lot.country}
                />
            )) 
            }
            
        </div>
    )

}
export default CarList;