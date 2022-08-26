import React ,{useEffect, useState} from 'react';
import { Card, ProductDetail } from '../../../components';
import { getBrowsingData } from '../../../api/browsingApi';
import "./style.css";
import { Specific } from '../../../api/apiImages/ps';

export default function Detail(props) {
    return (
        <div className='product-detail'>
            <ProductDetail   />
            <p>Suggestion</p>
           
        </div>
    );
}