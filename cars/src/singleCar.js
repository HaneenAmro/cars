import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

const SingleCar = (props) => {
    return (
        <div className="singleCar">
            <Accordion>
                <AccordionSummary>
                    <Typography className="typograghy">
                        <div className="container">           
                            <div> <strong>Make: </strong> {props.make} </div>
                            <div> <strong>Year: </strong> {props.year} </div> 
                            <div> <strong>Model: </strong> {props.model} </div> 
                            <div> <strong>Price: </strong> {props.price} </div>
                        </div>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="typograghy">
                        <div> <strong>color: </strong> {props.color} </div>
                        <div> <strong>vin: </strong> {props.vin} </div>
                        <div> <strong>Dealer cost: </strong> {props.cost}</div>
                        <div > <strong>Lot :: </strong>
                                <span> Name: {props.lotName}</span>
                                <span> City: {props.lotCity}</span>
                                <span> Country: {props.lotCountry} </span>
                        </div>

                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default SingleCar;
