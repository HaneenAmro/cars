import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

const SingleCar = (props) => {
    return (
        <div className="singleCar">
            <Accordion>
                <AccordionSummary>
                    <Typography>
                        <div> Year: {props.year} </div>            
                        <div> Make: {props.make} </div>
                        <div> Model: {props.model} </div> 
                        <div> Price: {props.price}</div>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div> color: {props.color} </div>
                        <div> vin: {props.vin} </div>
                        <div>Dealer cost: {props.coast}</div>
                        <div> Lot :
                            <span> Name: {props.lotName}</span>
                            <span> /City: {props.lotCity}</span>
                            <span> /Country: {props.lotCountry}</span>
                        </div>

                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default SingleCar;
