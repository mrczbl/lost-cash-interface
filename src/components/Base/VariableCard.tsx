import React from "react";

interface BootstrapOptions {
    xs: number,
    sm?: number,
    md?: number,
    lg?: number,
    xl?: number,
}

interface VariableCardProps {
    bootstrap?: BootstrapOptions,
    title: string,
    tooltip?: any,
    body: any
}

export const VariableCard: React.FunctionComponent<VariableCardProps> = props => {
    let mainClass = "";
    let bootstrap: any = props.bootstrap;
    Object.keys(bootstrap).forEach((a: string) => {
        mainClass +=  "col-" + a + "-" + bootstrap[a] + " ";
    });

    return (
        <div className={mainClass}>
            <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">{props.title}</h6>
                    {props.tooltip}
                </div>
                <div className="card-body">
                    {props.body}
                </div>
            </div>
        </div>
    );
};

VariableCard.defaultProps = {
    bootstrap: {
        xs: 12,
        lg: 7,
        xl: 8,
    }
};