import { useEffect, useRef, useState } from 'react';
import { updateCustomerAPI } from '../components/service/ContactService.js'
import ReactDom from 'react-dom'
import './ModalUpdate.css'

const styles = {
    overlay:{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom:0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999
    },
    modal:{
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        minWidth: '300px'
    }
}

function ModalUpdate({isOpen, onClose, selectRow, setReload  }) {
    const [newData, setNewData] = useState({
        customerName: '',
        company: '',
        orderValue: '',
        orderDay: '',
        profit: '',
        status: 'New'
    })
    const cusNameRef = useRef();

    useEffect(() => {
        if(isOpen && selectRow){
            setNewData(selectRow);
            if(cusNameRef.current){
                cusNameRef.current.focus();
            }
        }
    }, [isOpen, selectRow])

    const handleUpdate = async() => {
        console.log("Id của dòng được chọn là: " + selectRow.id);
        await updateCustomerAPI(selectRow, newData);
        setReload(prev => !prev);
        onClose();
    }

    if(!isOpen) return null;

    return ReactDom.createPortal ( 
        <div style={styles.overlay}>
            <div style={styles.modal} className='modal'>
                <h1 className='ec'>Edit customer</h1>
                <div className='formUpdate'>
                    <div className='lbl'>
                        <label htmlFor="cusName">Customer name: </label>
                        <label htmlFor="company">Company: </label>
                        <label htmlFor="oValue">Order value: </label>
                        <label htmlFor="">Order date: </label>
                        <label htmlFor="">Status: </label>
                    </div>
                    <div className='inp'>
                        <input type="text" id='cusName' ref={cusNameRef} onChange={(e) => setNewData({...newData, customerName: e.target.value})}/>
                        <input type="text" id='company' onChange={(e) => setNewData({...newData, company: e.target.value})}/>
                        <input type="text" id='oValue' onChange={(e) => setNewData({...newData, orderValue: e.target.value})} />
                        <input type="date" onChange={(e) => setNewData({...newData, orderDay: e.target.value})} />
                        <select name="stt" id="stt" onChange={(e) => setNewData({...newData, status: e.target.value})}>
                            <option value="New">New</option>
                            <option value="In-progress">In-progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>
                </div>
                <div className='btnAllOfModal'>
                        <button className='btnUpdate' onClick={handleUpdate}>Update</button>
                        <button className='btnClose' onClick={onClose}>Close</button>
                </div>
            </div>
        </div>,
        document.body
     );
}

export default ModalUpdate;