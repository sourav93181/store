import React ,{useEffect, useState} from 'react';
import { Card, NavBar, ProductDetail } from '../../../components';
import { getBrowsingData } from '../../../api/browsingApi';
import "./style.css";
import { Specific } from '../../../api/apiImages/ps';

export default function Detail(props) {
    const [cartval, setCartval] = useState(0);
    const [prodSpec,setprodSpec]=useState([Specific()]);
    function incrementCart() {
    setCartval(cartval + 1);
    }
    function decrementCart() {
    if (cartval > 0) {
      setCartval(cartval - 1);
    }
  }
  const [listOfObject, setlistOfObject] = useState([]);
  useEffect(() => {
    setlistOfObject(getBrowsingData());
  }, []);
  useEffect(() => {
    setprodSpec(Specific());
  }, [prodSpec]);
    return (
        <div className='product-detail'>
            <ProductDetail  title={prodSpec[0].name} addClickAction={incrementCart}
                removeClickAction={decrementCart}  />
            <p>Suggestion</p>
            <div className="Product-Window">
        {listOfObject.map((item) => {
          return (
            <Card
              itemImages={item.item1}
              itemNames={item.item2}
              itemDesc={item.item3}
              addClickAction={incrementCart}
              removeClickAction={decrementCart}
            />
          );
        })}
      </div>
        </div>
    );
}