import ReactDOM from 'react-dom'
import './ModalAdd.css';
import { useEffect, useRef } from 'react';


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


function ModalAdd({isOpen, onClose}) {
    const cusNameAdd = useRef();
    
    useEffect(() => {
        if(isOpen && cusNameAdd.current){
            cusNameAdd.current.focus();
        }
    })

    if(!isOpen) return null;

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
                        <input type="text" id='addCusName' ref={cusNameAdd}/>
                        <input type="text" id='addCompany' />
                        <input type="text" id='addValue'/>
                    </div>
                </div>
                <div className='btnAllOfModalAdd'>
                        <button className='btnAddModal'>Add</button>
                        <button className='btnCloseAdd' onClick={onClose}>Close</button>
                </div>
            </div>
        </div>,
        document.body
     );
}

export default ModalAdd;