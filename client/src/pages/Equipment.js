import React, { Component } from 'react';
import InventoryTable from '../components/InventoryTable';

import axios from 'axios';

class Equipment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columnDefs: [{
                headerName: "Make", field: "brand", sortable: true, filter: true, editable: true,
            }, {
                headerName: "Model", field: "model", sortable: true, filter: true, editable: true
            }, {
                headerName: "Serial Number", field: "serialNumber", sortable: true, filter: true, editable: true
            }, {
                headerName: "Expense Number", field: "expenseNumber", sortable: true, filter: true, editable: true
            }, {
                headerName: "Warranty Expiration", field: "warrantyExpiration", sortable: true, filter: true, editable: true
            }, {
                headerName: "Category", field: "category", sortable: true, filter: true, editable: true
            }],
            rowDate: [],

            inputNames: [
                {
                    displayName: "Make",
                    dbName: "make"
                },
                {
                    displayName: "Model",
                    dbName: "model"
                },
                {
                    displayName: "Serial Number",
                    dbName: "serialNumber"
                },
                {
                    displayName: "Expense Number",
                    dbName: "expenseNumber"
                },
                {
                    displayName: "Warranty Expiration",
                    dbName: "warrantyExpiration"
                },
                {
                    displayName: "Category",
                    dbName: "category"
                }
            ]
        }
    }

    componentDidMount() {
        axios.get("http://localhost:3001/api/equipment").then(response => {
            console.log(response.data)
            response.data.forEach(item => {
                // item.category = item.Category.name
            })
            this.setState({ rowData: response.data })
        });
    }

    render() {
        return (
            <div className="container">
                <InventoryTable rowData={this.state.rowData} columnDefs={this.state.columnDefs} />
            </div>
        )
    }
}

export default Equipment;