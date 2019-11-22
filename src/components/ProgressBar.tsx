import React from "react";

interface ProgressBarProps {
    current: number,
    min: number,
    max: number,
    message: string,
    title: string,
}

export const ProgressBar: React.FunctionComponent<ProgressBarProps> = (props) => {
    let type = "success";
    let remain = 100 - props.current;
    if(remain < 80){ type = "primary"; }
    if(remain < 60){ type = "info"; }
    if(remain < 40){ type = "warning"; }
    if(remain < 20){ type = "danger"; }

    return (
        <React.Fragment>
            <h4 className="small font-weight-bold">
                {props.title}
                <span className="float-right">{props.message}</span>
            </h4>
            <div className="progress mb-4">
                <div
                    className={"progress-bar bg-" + type}
                    role="progressbar"
                    style={{ width: Math.min(props.current, 100) + "%" }}
                    aria-valuenow={props.current}
                    aria-valuemin={props.min}
                    aria-valuemax={props.max}
                />
            </div>
        </React.Fragment>
    )
}