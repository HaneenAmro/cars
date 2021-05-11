import SingleCar from './singleCar.js';

const CarList = (props) => {

    return (
        <div>
            { 
                props.value === "" ? 
            
                    props.carData.map((item) => (
                        < SingleCar make={item.make} year={item.year} model={item.model} vin={item.vin} color={item.color} value={props.value}
                            price={item.askingPrice} cost={item.dealerCost} dateListed={item.dateListed} lotName={item.lot.name} 
                            lotCity={item.lot.city}  lotCountry={item.lot.country}
                        />
                    )) 
                :
                    props.carData.filter((item) => {
                        let upperValue = props.value.charAt(0).toUpperCase()+ props.value.slice(1);
                        return Object.values(item).includes(upperValue) || Object.values(item.lot).includes(upperValue)
                    }).map((item) => (
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