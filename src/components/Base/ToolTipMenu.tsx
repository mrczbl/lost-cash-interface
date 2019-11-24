import React from "react";

interface ToolTipMenuProps {
    title: string,
    items: any,
    closeToolTip: any,
}

export const ToolTipMenu = (props: ToolTipMenuProps) => {
    let list = Object.keys(props.items).map((a: any, b: any) => {
        //todo implement dropDownDevider in menu
        // const dropDownDivider = <div className="dropdown-divider"></div>;

        return <li
            key={b}
            onClick={() => {
                props.items[a].action();
                props.closeToolTip();
            }}
            className={"dropdown-item " + (props.items[a].active ? 'bg-primary sidebar-brand' : '')}
        >
            {props.items[a].label}
        </li>;
    });

    return (<div className={'tool-tip-menu shadow'}>
        <div className={"dropdown-header"}>
            {props.title}
        </div>
        <ul>
            {list}
        </ul>
    </div>)
};