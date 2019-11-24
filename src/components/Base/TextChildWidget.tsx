import React from "react";

interface TextChildWidgetProps {
    child: object,
    icon: string
    title: string,
    type: string,
}

export const TextChildWidget: React.FunctionComponent<TextChildWidgetProps> = (props) => {
    return (
        <div className="col-xl-3 col-md-6 mb-4">
            <div className={"card border-left-" + props.type + " shadow h-100 py-2"} >
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={"text-xs font-weight-bold text-" + props.type + " text-uppercase mb-1"}>
                                {props.title}
                            </div>
                            <div>
                                {props.child}
                            </div>
                        </div>
                        <div className="col-auto">
                            <i className={"fas fa-2x text-gray-300 " + props.icon}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};