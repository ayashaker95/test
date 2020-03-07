import React, {Component} from "react";
import "./TrelloList.scss";
import BatchCard from "../card/BatchCard";
import {Droppable} from "react-beautiful-dnd";

class TrelloList extends Component {

    constructor(props) {
        super(props);
        console.log(props)
    }

    render() {
        const ListId = 0;
        return (
            <Droppable droppableId={String(ListId)}>
                {(provided) => (
                    <div {...provided.droppableProps}
                         ref={provided.innerRef}
                         className={"List__Wrapper"}
                    >
                        {this.props.zones.map(zone =>
                        <div className={'List'}>
                            <h6>
                                {zone.Title}
                            </h6>
                            <BatchCard
                                plants={zone.dataList}
                            />
                        </div>
                        )}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        );
    }
};

export default TrelloList;
