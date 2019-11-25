import React, {useState, useEffect} from "react";
import {Select, ToolTipController} from 'react-tooltip-controller'
import "../../styles/tooltip.css";

interface ToolTipProps {
    offsetY?: any,
    offsetX?: any,
    id: string,
    icon?: any,
    menu: any,
}

export const ToolTip: React.FunctionComponent<ToolTipProps> = (props) => {
    let [trigger, setTrigger] = useState(false);

    useEffect(() => {
        return () => {
            setTrigger(true);
        }
    }, []);

    let list = Object.keys(props.menu.items).map((a: any, b: any) => {
        //todo implement dropDownDevider in menu
        // const dropDownDivider = <div className="dropdown-divider"></div>;

        return <li
            key={b}
            onClick={() => { props.menu.items[a].action() }}
            className={"dropdown-item " + ((!!props.menu.items[a].active && props.menu.items[a].active) ? 'bg-primary sidebar-brand' : '')}
        >
            {props.menu.items[a].label}
        </li>;
    });

    const ToolTipMenu = () => <div className={'tool-tip-menu shadow'}>
        <div className={"dropdown-header"}>
            {props.menu.title}
        </div>
        <ul>
            {list}
        </ul>
    </div>;

    return (
        <ToolTipController
            id={props.id}
            offsetX={props.offsetX}
            closeOnClick={false}
            offsetY={props.offsetY}
            triggerClose={trigger}
        >
            <Select>
                <div style={{cursor: 'pointer'}}>{props.icon}</div>
            </Select>

            <ToolTipMenu />
        </ToolTipController>
    )
};

ToolTip.defaultProps = {
    icon: <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"/>,
    offsetX: 'center',
    offsetY: 0,
};