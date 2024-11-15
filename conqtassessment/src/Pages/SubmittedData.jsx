import React from 'react'
import DataTable from 'react-data-table-component'

function SubmittedData() {

    const columns = [
        {
            name: 'Supplier',
            selector: row => row.title,
        },
        {
            name: 'Item Name',
            selector: row => row.itemName,
        },
        {
            name: 'Quantity',
            selector: row => row.quantity,
        },
        {
            name: 'City',
            selector: row => row.unitPrice,
        },
        {
            name: 'Country',
            selector: row => row.year,
        },
        {
            name: 'Email',
            selector: row => row.year,
        },
        {
            name: 'Phone No',
            selector: row => row.year,
        },
    ];
  return (
    <>
        <DataTable
			columns={columns}
			// data={data}
		/>
    </>
  )
}

export default SubmittedData
