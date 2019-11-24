import React, {useState} from "react";
import {Select, ToolTipController} from 'react-tooltip-controller'
import "../../styles/tooltip.css";
import {ToolTipMenu} from "./ToolTipMenu";

interface ToolTipProps {
    offsetY?: any,
    offsetX?: any,
    id: string,
    icon?: any,
    menu: any
}

export const ToolTip: React.FunctionComponent<ToolTipProps> = (props) => {
    let [toolTipOpen, setToolTipOpen] = useState(false);
    let [toolTipTriggerClose, setToolTipTriggerClose] = useState(false);

    const closeToolTip = () => {
        setTimeout(() => setToolTipTriggerClose(toolTipOpen), 150);
        setToolTipOpen(false);
    };

    const toolTipState = (data: boolean) => {
        setToolTipOpen(data);
        if(!data && toolTipTriggerClose){
            setToolTipTriggerClose(false);
        }
    };

    return (
        <ToolTipController
            id={props.id}
            offsetX={props.offsetX}
            closeOnClick={false}
            offsetY={props.offsetY}
            triggerClose={toolTipTriggerClose}
            returnState={(data: boolean) => toolTipState(data)}
        >
            <Select>
                <div style={{cursor: 'pointer'}}>{props.icon}</div>
            </Select>

            <ToolTipMenu title={props.menu.title} items={props.menu.items} closeToolTip={closeToolTip}/>
        </ToolTipController>
    )
};

ToolTip.defaultProps = {
    icon: <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"/>,
    offsetX: 'center',
    offsetY: 0,
};