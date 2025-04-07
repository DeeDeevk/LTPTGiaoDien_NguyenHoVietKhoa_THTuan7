import { useEffect, useState } from 'react';
import './Content.css'
import square_four from '../assets/Squares four 1.png'
import button1509 from '../assets/Button 1509.png'
import button1530 from '../assets/Button 1530.png'
import button1529 from '../assets/Button 1529.png'
import fileTxt from '../assets/File text 1.png'
import Card from './Card';
import TableDT from './TableDT'
import ModalUpdate from './ModalUpdate'
import ModalAdd from './ModalAdd';
import { getCustomerAPI } from './service/ContactService';

function Content() {

    const [data, setData] = useState([]);
    const [reload, setReload] = useState(true);
    const [totalOrderValue, setTotalOrderValue] = useState(0);
    const [totalProfit, setTotalProfit] = useState(0);
    const [totalCustomer, setTotalCustomer] = useState(0);
    const [showModalUpdate, setShowModalUpdate] = useState(false);
    const [showModalAdd, setShowModalAdd] = useState(false);
    const [selectRow, setSelectRow] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            const dataFetched = await getCustomerAPI();
            setData(dataFetched);

            const totalOV = dataFetched.reduce((sum, item) => sum + parseFloat(item.orderValue), 0);
            setTotalOrderValue(totalOV);
            const totalPro = dataFetched.reduce((sum, item) => sum + parseFloat(item.profit), 0);
            setTotalProfit(totalPro);
            const totalCus = dataFetched.length;
            setTotalCustomer(totalCus);
        };
        fetchData();
    }, [reload]);


    const handleEdit = (row) =>{
        setSelectRow(row);
        setShowModalUpdate(true);
        console.log("id của dòng được chọn: ", row.id);
        
    } 

    return (
        <div>
            <div className='ovrView'>
                <div className='ovr_gr'>
                    <img src={square_four} alt="Square four" />
                    <span>Overview</span>
                </div>
                <div className='ovr_card'>
                    <Card
                        title="Turnover"
                        value={`$${totalOrderValue.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`}
                        per="5.39"
                        color='#fff0f5'
                        imageLogo={button1509}
                    />
                    <Card
                        title="Profit"
                        value={`$${totalProfit.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`}
                        per="5.39"
                        color='#eff6ff'
                        imageLogo={button1530}
                    />
                    <Card
                        title="New customer"
                        value={`${totalCustomer.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`}
                        per="6.84"
                        color='#f0f7fd'
                        imageLogo={button1529}
                    />
                </div>
            </div>
            <div className='DReport'>
                <div className='dr_gr'>
                    <img src={fileTxt} alt="Square four" />
                    <span>Detiled report</span>
                    <div className='btnAll'>
                        <button className='btnAdd' onClick={() => setShowModalAdd(true)}>Add</button>
                        
                        <button className='btnIm'>Import</button>
                        <button className='btnEx'>Export</button>
                    </div>
                    <ModalAdd isOpen={showModalAdd} onClose={() => setShowModalAdd(false)}/>
                </div>
                <div className='tbl'>
                    <TableDT
                        db = {data}
                        onEdit = {handleEdit}
                    />
                    <ModalUpdate
                        isOpen={showModalUpdate}
                        onClose={() => setShowModalUpdate(false)}
                        selectRow={selectRow}
                        setReload={setReload}
                    />
                </div>
            </div>
        </div>
    );
}

export default Content;