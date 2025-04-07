import { useEffect, useRef, useState } from 'react';
import { createCustomerAPI } from '../components/service/ContactService.js'
import ReactDOM from 'react-dom'
import './ModalAdd.css';


const styles = {
    overlay:{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999
    },
    modal:{
        backgroundColor: '#fff',
        padding:'20px',
        borderRadius: '8px',
        minWidth: '300px'
    }
} 


function ModalAdd({isOpen, onClose, setReload}) {
    const [newCustomer, setNewCustomer] = useState({
        customerName: '',
        company: '',
        orderValue: '',
        orderDay: '',
        profit: '',
        status: 'New'
    })
    const cusNameAdd = useRef();
    
    useEffect(() => {
        if(isOpen && cusNameAdd.current){
            cusNameAdd.current.focus();
        }
    }, [isOpen])

    if(!isOpen) return null;

    const handleAdd = async() =>{
        const orderDay = new Date();
        const profit = parseFloat(newCustomer.orderValue * 0.01);
        const customer = {...newCustomer,
            orderDay: orderDay,
            profit: profit
        };
        await createCustomerAPI(customer);
        setReload(prev => !prev);
        onClose();
    }


    return ReactDOM.createPortal ( 
        <div style={styles.overlay}>
            <div style={styles.modal} className='modalAdd'>
                <h1 className='ac'>Add customer</h1>
                <div className='formAdd'>
                    <div className='lblAdd'>
                        <label htmlFor="addCusName">Customer name: </label>
                        <label htmlFor="addCompany">Company: </label>
                        <label htmlFor="addValue">Order value: </label>
                    </div>
                    <div className='inpAdd'>
                        <input type="text" id='addCusName' ref={cusNameAdd} onChange={(e) => setNewCustomer({...newCustomer, customerName: e.target.value})}/>
                        <input type="text" id='addCompany' onChange={(e) => setNewCustomer({...newCustomer, company: e.target.value})} />
                        <input type="text" id='addValue' onChange={(e) => setNewCustomer({...newCustomer, orderValue: e.target.value})}/>
                    </div>
                </div>
                <div className='btnAllOfModalAdd'>
                        <button className='btnAddModal' onClick={handleAdd}>Add</button>
                        <button className='btnCloseAdd' onClick={onClose}>Close</button>
                </div>
            </div>
        </div>,
        document.body
     );
}

export default ModalAdd;