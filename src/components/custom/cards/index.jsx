import React, { useState } from 'react';
import "./style.css"
import { useNavigate } from "react-router-dom";
import autodefault from "../../../assest/images/Nothing.jpg"

export default function Card(props) {
    let navigate = useNavigate();
    const [val, setval] = useState(0);
    const {itemImages=autodefault,itemNames="Nothing",itemDesc="",addClickAction, removeClickAction } = props;

    
            return (
                <div className="shop-item-container">
                    <img src={itemImages} alt="" className='item-img' />
                    <p className='item-name' onClick={()=>navigate("/browsing/detail")}>{itemNames}</p>
                    <p className='item-description'>{itemDesc}</p>
                    {val < 1 ? <span className='item-add-to-cart' onClick={() => {
                        setval(val + 1);
                        addClickAction();
                    }}>Click To Add</span> : <span className='item-in-cart'>
                        <p className='item-remove-button' onClick={() => {
                            setval(val - 1);
        
                            removeClickAction()
                        }}>-</p>
                        <p className='item-quantity'>{val}</p>
                        <p className='item-add-button' onClick={() => {
                            setval(val + 1);
                            addClickAction();;
                        }}>+</p>
                    </span>}
                </div>
            );
        }
    
