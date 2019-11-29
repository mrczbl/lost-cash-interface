import React from 'react';
import moment from 'moment';
import {VariableCard} from "./VariableCard";
import {useDispatch} from 'react-redux';
import {requestExpenses} from "../../global/actions";

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

            return <tr role="row" key={c}>
                <td>{b['name']}</td>
                <td>{b['amount']}</td>
                <td>{b['currency']}</td>
                <td>{day.format('HH:mm')} Uhr</td>
            </tr>
        })}
        </tbody>
    });

    const setPagination = (page: number) => {
        console.log('SETTING', page);
        dispatch(requestExpenses({offset: ((page - 1) * props.selection.entries), limit: props.selection.entries}));
    };

    console.log('sel', props.selection);

    return (Object.keys(props.items).length > 0)
        ? (<VariableCard
            bootstrap={{
                xs: 12,
                lg: 12,
                xl: 12
            }}
            tooltip={<label
                className={"entries-selection"}
            >
                Show&nbsp;
                <select
                    name="dataTable_length"
                    aria-controls="dataTable"
                    className="custom-select custom-select-sm form-control form-control-sm"
                >
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                </select>
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
                                    onClick=    {() => setPagination((parseInt(props.selection.current) - 1))}
                                    className={"paginate_button page-item previous " + ((props.selection.current < 2) ? 'disabled' : '')}
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
                                    onClick={() => setPagination((parseInt(props.selection.current) + 1))}
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