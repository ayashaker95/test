import React, {Component} from 'react';
import './App.scss';
import Header from "../../components/header/header";
import SideMenu from "../../components/sideMenu/sideMenu";
import TrelloList from "../../components/list/TrelloList";
import {DragDropContext} from "react-beautiful-dnd";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


class App extends Component {
     plants1 = [
        {CardId:'1', PlantNumber: '81', PlantTitle: '#Purple Plant'},
        {CardId:'2',PlantNumber: '87', PlantTitle: '#Green Crack'},
        {CardId:'3',PlantNumber: '91', PlantTitle: '#Gorilla Glue'}
    ];

     plants2 = [
         {CardId:'4',PlantNumber: '67', PlantTitle: '#Green Gle'},
         {CardId:'3',PlantNumber: '77', PlantTitle: '#Gorilla Plant'}
        ];

    zones1 = [
        {ListId: '1', NumberOfDays: '15 Days', Title: 'Zone 01', dataList: this.plants1},
        {ListId: '2', NumberOfDays: '40 Days', Title: 'Zone 02', dataList:this.plants2},
        {ListId: '3', NumberOfDays: '60 Days', Title: 'Zone 03'},


    ];
    zones2 =[
        {ListId: '4', NumberOfDays: '70 Days', Title: 'Zone 04',dataList:this.plants2},
        {ListId: '5', NumberOfDays: '12 Days', Title: 'Zone 05',dataList: this.plants1},
    ];
    Columns = [
        {
            name: "Clones",
            zones: this.zones1
        },
        {
            name: "Vetetative",
            zones: this.zones2
        },

    ];

    OnDragEnd = () => {

    };

    generateColumns() {
        return this.Columns.map(column => (
            <div>
                {column.name}
                <TrelloList className ={"Zones"} zones={column.zones}/>
            </div>
        ));
    }

    render() {
        return (
            <Router>
                <div>
                    <div>
                        <Header/>{/* new zone  ++ zones in header */}
                        <SideMenu/>
                        <DragDropContext onDragEnd={this.OnDragEnd}>
                            <div className={"Board"}>
                                <div className={"Columns"}>{this.generateColumns()}
                                </div>
                            </div>
                        </DragDropContext>
                    </div>
                </div>
            </Router>
        );
    }
}






export default App;
