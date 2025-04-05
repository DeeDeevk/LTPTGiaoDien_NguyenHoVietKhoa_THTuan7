import DataTable from 'react-data-table-component'
import './TableDT.css'
import styled from 'styled-components';
import create from '../assets/create.png'
function TableDT({db}) {

    const columns = [
        {
            name: 'CUSTOMER NAME',
            selector: row => row.customerName,
            sortable: true,
            style:{
                fontWeight: 'bold'
            },
        },
        {
            name: 'COMPANY',
            selector: row => row.company,
            sortable: true,
        },
        {
            name: 'ORDER VALUE',
            selector: row => row.orderValue,
            sortable: true,
            format: row => `$${row.orderValue}`,
        },
        {
            name: 'ORDER DATE',
            selector: row => row.orderDay,
            cell: row => {
                const orderDay = new Date(row.orderDay);
                return orderDay.toLocaleDateString('us-GB');
            },
            sortable: true,
            style:{
                color: '#babbbf'
            },
        },
        {
            name: 'STATUS',
            selector: row => row.status,
            sortable: true,
            cell: row => {
                let style = {};
                if(row.status === 'New'){
                    style = {
                        backgroundColor: '#f2f7fa', 
                        color : '#8ec0e5', 
                        borderRadius: '10px',
                        minWidth:'10px',
                        padding: '5px 10px 5px 10px'
                    };
                }
                if(row.status === 'In-progress'){
                    style = {
                        backgroundColor: '#fdf9ee', 
                        color : '#aea06c', 
                        borderRadius: '10px',
                        minWidth:'10px',
                        padding: '5px 10px 5px 10px'
                    };
                }
                if(row.status === 'Completed'){
                    style = {
                        backgroundColor: '#ecfcf2', 
                        color : '#9ebdaa', 
                        borderRadius: '10px',
                        minWidth:'10px',
                        padding: '5px 10px 5px 10px'
                    };
                }

                return <div style={style}>{row.status}</div>
            },
        },
        {
            name: '',
            cell: () => <img src={create} alt="Create"/>,
            button: "true",
            style:{
                cursor: 'pointer'
            }
        },
    ];

    const customStyles = {
        headCells:{
            style:{
                fontWeight:'bold',
                fontFamily: 'sans-serif'
            },
        },
        cells:{
            style:{
                fontFamily: 'sans-serif'
            }
        },
    };
    
    return ( 
        <div className='om'>
            <DataTable
                columns={columns}
                data={db}
                pagination
                paginationPerPage={6}
                paginationRowsPerPageOptions={[6,12,18]}
                highlightOnHover
                selectableRows
                customStyles={customStyles}
                fixedHeader
                fixedHeaderScrollHeight="350px"
            />
        </div>
     );
}
export default TableDT;