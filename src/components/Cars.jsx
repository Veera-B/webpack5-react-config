import {useState} from 'react'
const cars ={
    volvo:2,
    benz:4,
    aadi:4
};
const extendedcars = {
    ...cars,
    kia:6,
    suzuki: 5,
    tesla:4
}



function Cars() {
    const [carObj,setCars] = useState({}); 
    return (
        <div>
            <h4>Current Cars</h4>
            <button onClick = {() =>setCars(cars)}>Cars</button>
            <button onClick = {()=>setCars(extendedcars)}>Extended Cars</button>
            <ul>
                {Object.keys(carObj).map((car,index)=><li key = {index}>{car}:{cars[car]}</li>)}
            </ul>
            
        </div>
    )
}

export default Cars
