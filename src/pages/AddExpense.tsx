import React, {useState} from "react";
import "react-toastify/dist/ReactToastify.css";
import {VariableCard} from "../components/Base/VariableCard";
import CurrencyInput from 'react-currency-input';
import Select from "react-select";
import {apiRequest} from "../helper/ApiRequest";
import {toast} from "react-toastify";

export const AddExpense: React.FunctionComponent = (props) => {
    const [category, setCategory] = useState(1);
    const [amount, setAmount] = useState("");
    const [loading, setLoading] = useState(false);

    const onSubmit = async (e: any) => {
        if (amount === "") {
            return;
        }

        setLoading(true);
        toast.dismiss();

        try {
            let intAmount = parseInt(amount.substring(5, amount.length).replace(',','').replace('.', ''));
            let login: any = await apiRequest({
                url: "/expense/add",
                timeout: 5000,
                isPost: true,
                data: {category: category, amount: intAmount, currency: "EUR"}
            });
            if (!login.error) {
                toast.success('Added new Expense.');
                setLoading(false);
                return;
            } else {
                toast.error('This did not work');
            }
        } catch (error) {
            toast.error("Somethint went wrong.");
            setLoading(false);
        }
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

    return (
        <div id="page-top">
            <VariableCard
                body={
                    <div>
                            <div className={"form-group"}>
                                <Select
                                    defaultValue={{label: "Food", value: 1}}
                                    onChange={(option: any) => {
                                        setCategory(option.value)
                                    }}
                                    isSearchable={false}
                                    styles={customStyles}
                                    width={'100%'}
                                    options={[
                                        {value: 1, label: 'Food'},
                                        {value: 2, label: 'Groceries'},
                                        {value: 3, label: 'Tech'},
                                        {value: 4, label: 'Clothes'},
                                        {value: 5, label: 'Insurance'},
                                        {value: 6, label: 'Car'},
                                        {value: 7, label: 'Other'},
                                    ]}
                                />
                            </div>
                            <div className="form-group">
                                <CurrencyInput
                                    className={"form-control form-control-user"}
                                    prefix="EUR  "
                                    value={amount}
                                    onChangeEvent={(e: any) => setAmount(e.target.value)}
                                />
                            </div>
                            <button
                                onClick={onSubmit}
                                className={"form-control bg-primary text-white-50"}
                                disabled={loading}
                            >
                                Add
                            </button>
                    </div>
                }
                title={'Add Expense'}
            />
        </div>
    );
};
