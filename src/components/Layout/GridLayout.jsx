import React from "react";
import './GridLayout.css';
import logoDash from '../../assets/logo_dash.jpg'

function GridLayout() {
    const data = [
                {cot1: "1", cot2: "1", cot3: "1", cot4: "1"},
                {cot1: "2", cot2: "2", cot3: "2", cot4: "2"},
                {cot1: "3", cot2: "3", cot3: "3", cot4: "3"},
                {cot1: "4", cot2: "4", cot3: "4", cot4: "4"}
                ]
    return ( 
        <div className="container">
            <div className="header">
                <div className="logo">
                    <img src={logoDash} alt="logo Dashboard" />
                </div>
                <div className="timKiem">
                    <input  className="inputTim" type="text" placeholder="Tìm kiếm..." />
                </div>
            </div>
            <div class="menu">
                <a href="#">Link 1</a>
                <br />
                <a href="#">Link 2</a>
                <br/>
                <a href="#">Link 3</a>
            </div>
            <div class="content">
                <div className="overView">
                    <h3>Overview</h3>
                </div>
                <div className="detailed">
                    <h3>Detail</h3>
                    <table>
                        <thead>
                            <th>Column 1</th>
                            <th>Column 2</th>
                            <th>Column 3</th>
                            <th>Column 4</th>
                        </thead>
                        <tbody>
                            {data.map((dong, index) => (
                                <tr key={index}>
                                    <td>{dong.cot1}</td>
                                    <td>{dong.cot2}</td>
                                    <td>{dong.cot3}</td>
                                    <td>{dong.cot4}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
     );
}

export default GridLayout;