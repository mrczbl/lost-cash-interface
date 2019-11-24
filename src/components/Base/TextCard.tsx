import React from "react";

interface TextCardProps {
    title: string,
    image: any,
    text: object,
}

export const TextCard: React.FunctionComponent<TextCardProps> = (props) => {
    return (
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                    {props.title}
                </h6>
            </div>
            <div className="card-body">
                {props.text}
            </div>
        </div>
    )
};