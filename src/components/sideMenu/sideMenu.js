import React, {useState} from 'react';
import './sideMenu.scss';
import {Collapse} from 'reactstrap';
import 'font-awesome/css/font-awesome.min.css';

const SideMenu = (props) => {

    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => setIsOpen(!isOpen);

    const MotherPlants = [
        {MotherPlant: 'Purple haze'},
        {MotherPlant: 'Sour Diesel'},
        {MotherPlant: 'White Window'},
        {MotherPlant: 'OG Kush'},
        {MotherPlant: 'Blue Dream'}
    ];

    const Plants = [
        {Plant: '#M10'},
        {Plant: '#M12'},
        {Plant: '#M20'}
    ];

    return (

        <div
            className="SideBar"
        >
            <p
                className={"SideBar__Header"}>
                Mother Plants
            </p>
            <p
                className={"SideBar__SubTitle"}>
                Strains & Plants
            </p>
            <div
                className={"MotherPlants"}
            >
                {MotherPlants.map(motherPlant =>
                    <div>
                        <a
                            className={"MotherPlants__Title"}
                            color="primary"
                            onClick={toggle}
                            style={{marginBottom: '1rem'}}
                        >
                            <i
                                className="fa fa-caret-down">

                            </i>
                            {motherPlant.MotherPlant}
                        </a>
                        <Collapse isOpen={isOpen}>
                            <ul>
                                {Plants.map(plant =>
                                    <li className={"Children"}>
                                        {plant.Plant}
                                    </li>
                                )}
                            </ul>
                        </Collapse>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SideMenu;
