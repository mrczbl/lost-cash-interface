import React from 'react';

interface TableSectionProps {
    sectionHeader: string,
    fields: any,
    columns: any
}

export const TableSection: React.FunctionComponent<TableSectionProps> = (props) => {
    const TableRow = (id: any) => <tr>{Object.keys(props.columns[id]).map((a: any, b: any) => {
        return (props.fields.includes(a) ? <td className={"sorting"}>{ props.columns[id][a] }</td> : null);
    })}</tr>;

    const TableRows = Object.keys(props.columns).map((a: any, b: any) => {
        return TableRow(b);
    });

    return (<tbody>
        {props.sectionHeader}
        {TableRows}
        </tbody>
    )
};