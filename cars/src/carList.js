import SingleCar from './singleCar.js';

const CarList = (props) => {

    return (
        <div>
            { 
                props.value === "" ? 

                    props.carData.map((item) => (
                        < SingleCar make={item.make} year={item.year} model={item.model} vin={item.vin} color={item.color} value={props.value}
                            price={item.askingPrice} cost={item.dealerCost} dateListed={item.dateListed} lotName={item.name} 
                            lotCity={item.city}  lotCountry={item.country}
                        />
                    )) 
                :
                    props.carData.filter((item) => {
                       // debugger;
                        let result = false;
                            if (item.index.includes(props.value.toUpperCase())) {
                                result = true;
                            } 
                            return result;            
                    }).map((item) => (
                        < SingleCar make={item.make} year={item.year} model={item.model} vin={item.vin} color={item.color} value={props.value}
                            price={item.askingPrice} cost={item.dealerCost} dateListed={item.dateListed} lotName={item.name} 
                            lotCity={item.city}  lotCountry={item.country}
                        />
                    )) 
            }     
        </div>
    )

}
export default CarList;