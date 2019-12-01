import React from 'react';
import moment from 'moment';
import {VariableCard} from "./VariableCard";
import {useDispatch} from 'react-redux';
import {requestExpenses} from "../../global/actions";
import Select from "react-select";

interface TableProps {
    header: string,
    items: any,
    selection: any
}

export const Table: React.FunctionComponent<TableProps> = (props) => {
    const dispatch = useDispatch();

    const tableRows = Object.keys(props.items).map((a: any, d: any) => {
        const subheader = moment(a);
        return <tbody className={"special-tbody"} key={d}>
        <tr className="grouplabel">
            <th colSpan={3}>{subheader.format('dddd')} the {subheader.format('DD of MMMM')}</th>
        </tr>
        {props.items[a].map((b: any, c: any) => {
            let day = moment(b['date']);

            //todo add prop to define which keys should be shown
            return <tr role="row" key={c}>
                <td>{b['name']}</td>
                <td>{b['amount']}</td>
                <td>{b['currency']}</td>
                <td>{day.format('HH:mm')} Uhr</td>
            </tr>
        })}
        </tbody>
    });

    const setPagination = (page: number, allow: boolean = true) => {
        if (!allow) {
            return;
        }
        dispatch(requestExpenses({prevLimit: props.selection.entries, offset: page - 1, limit: props.selection.entries}));
    };

    const customStyles = {
        control: (_: any, {selectProps: {width}}: any) => ({
            ..._,
            width: width
        }),
        dropdownIndicator: () => ({
            display: 'none'
        }),
        indicatorsContainer: () => ({
            display: 'none'
        })
    };

    return (Object.keys(props.items).length > 0)
        ? (<VariableCard
            bootstrap={{
                xs: 12,
                lg: 12,
                xl: 12
            }}
            tooltip={
                <label
                    className={"entries-selection"}
                >
                    Show&nbsp;
                    <Select
                        defaultValue={{label: "20", value: 20}}
                        onChange={(option: any) => dispatch(requestExpenses({
                            prevLimit: props.selection.entries,
                            offset: props.selection.current - 1,
                            limit: option.value
                        }))}
                        isSearchable={false}
                        styles={customStyles}
                        width={'60px'}
                        options={[
                            {value: 10, label: '10'},
                            {value: 20, label: '20'},
                            {value: 30, label: '30'},
                            {value: 40, label: '40'},
                        ]}
                    />
                    &nbsp;entries
                </label>}
            body={<div className="dt-bootstrap4">
                <table
                    className="table"
                    role="grid"
                    style={{width: "100%"}}
                >
                    {tableRows}
                </table>

                <div className="row">
                    <div className="col-sm-12 col-md-5">
                        <div
                            className="dataTables_info"
                            role="status"
                            aria-live="polite"
                        >
                            Showing {props.selection.entries} entries
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-7">
                        <div className="paging_simple_numbers">
                            <ul className="pagination">
                                <li
                                    onClick={() => setPagination((parseInt(props.selection.current) - 1), (props.selection.current > 1))}
                                    className={"paginate_button page-item previous " + ((props.selection.current > 1) ? '' : 'disabled')}
                                >
                                    <div
                                        className="page-link"
                                    >
                                        Previous
                                    </div>
                                </li>

                                {Object.keys(Array.from(Array(Math.ceil(props.selection.total / props.selection.entries)).keys())).map((a, b) => {
                                    return (
                                        <li
                                            className={"paginate_button page-item " + ((props.selection.current === (parseInt(a) + 1)) ? 'active' : '')}
                                            key={b}
                                        >
                                            <div
                                                onClick={() => setPagination(parseInt(a) + 1)}
                                                className="page-link"
                                            >
                                                {parseInt(a) + 1}
                                            </div>
                                        </li>)
                                })}

                                <li
                                    className={"paginate_button page-item next " + ((props.selection.current < props.selection.pages) ? "" : "disabled")}
                                    onClick={() => setPagination((parseInt(props.selection.current) + 1), (props.selection.current < props.selection.pages))}
                                >
                                    <div
                                        className="page-link"
                                    >
                                        Next
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>}
            title={"Expenses"}
        />)
        : (<VariableCard
            bootstrap={{
                xs: 12,
                lg: 12,
                xl: 12,
            }}
            body={<div>No Expenses found</div>}
            title={"Expenses"}
        />);
};