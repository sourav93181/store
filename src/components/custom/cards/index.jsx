import React, { useState } from 'react';
import "./style.css"
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
export default function Card(props) {
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1000px)" });
    let navigate = useNavigate();
    const [val, setval] = useState(0);
    const {itemImages="images/Nothing.jpg",itemNames="Nothing",itemDesc="",addClickAction, removeClickAction } = props

    if (isTabletOrMobile) {
        return (<div className="shop-item-container-m">
        <img src={itemImages} alt="" className='item-img-m' />
        <p className='item-name-m' onClick={()=>navigate("/detail")}>{itemNames}</p>
        <p className='item-description-m'>{itemDesc}</p>
        {val < 1 ? <span className='item-add-to-cart-m' onClick={() => {
            setval(val + 1);
            addClickAction();
        }}>Click To Add</span> : <span className='item-in-cart-m'>
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
    </div>);}
        else{
            return (
                <div className="shop-item-container">
                    <img src={itemImages} alt="" className='item-img' />
                    <p className='item-name' onClick={()=>navigate("/detail")}>{itemNames}</p>
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
    
}
