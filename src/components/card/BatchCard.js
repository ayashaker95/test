import React from 'react';
import "./TrelloCard.scss"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import {Draggable} from "react-beautiful-dnd";

const data = [
    {CardId: '1', PlantNumber: '81', PlantTitle: '#Purple Plant'},
    {CardId: '2', PlantNumber: '87', PlantTitle: '#Green Crack'},
    {CardId: '3', PlantNumber: '91', PlantTitle: '#Gorilla Glue'}
];

const TrelloCards = props =>
    <div>
        <Card className={"Card"}
              CardId={props.CardId}>
            <CardTitle className={"CardTitle"}>
                <div className={"Plant__Number"}>
                    {props.PlantNumber}
                </div>
                <div className={"Plant__Title"}>
                    {props.PlantTitle}
                </div>
            </CardTitle>
        </Card>
    </div>
;

const BatchCard = (props, CardId, index) => {

    return (
        <Draggable draggableId={String(CardId)}
                   index={index}
        >
            {
                provided => (
                    <div ref={provided.innerRef}
                         {...provided.draggableProps}
                         {...provided.dragHandleProps}>
                        <div>
                            {
                                props.plants && props.plants.map(info =>
                                    <TrelloCards {...info}/>
                                )
                            }
                        </div>
                    </div>
                )
            }
        </Draggable>
    );
};
export default BatchCard;
