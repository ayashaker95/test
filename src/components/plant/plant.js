import React from 'react';
import './plant.scss';

const MotherPlant  =[
    {MotherPlant: 'Purple Plant', Plant:'#M10', Plant2:'#M12'},
    {MotherPlant: 'White Plant', Plant:'#M20', Plant2:'#M22'},
    {MotherPlant: 'Blue Dream', Plant:'#M13', Plant2:'#M17'}
];

const Plants = props =>
    <div ClassName={'Plant'}>
        <h4>{props.MotherPlant}</h4>
        <p>{props.Plant}</p>
        <p>{props.Plant2}</p>
    </div>;

class Plant extends React.Component {

    render() {
        return (
            /*<div className={"Plant"}>
                { MotherPlant.map(info =>
                /!*<Plants {...info}/>*!/
                )}
            </div>*/
            <p>hello</p>
        );
    }
}
export default Plant;
