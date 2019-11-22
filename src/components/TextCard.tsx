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
                <h6 className="m-0 font-weight-bold text-primary">{props.title}</h6>
            </div>
            <div className="card-body">
                <div className="text-center">
                    {/*<img */}
                    {/*    className="img-fluid px-3 px-sm-4 mt-3 mb-4"*/}
                    {/*    style={{width: "25rem"}}*/}
                    {/*    src="{props.image}" */}
                    {/*    alt=""*/}
                    {/*/>*/}
                </div>
                {props.text}
            </div>
        </div>
    )
};