import React ,{useEffect, useState} from 'react';
import { Card, ProductDetail } from '../../../components';
import { getBrowsingData } from '../../../api/browsingApi';
import "./style.css";
import { Specific } from '../../../api/apiImages/ps';

export default function Detail(props) {
  const {addClickActionpart, removeClickActionpart}=props;
    const [search, setSearch] = useState("");
    const [listOfObject, setlistOfObject] = useState([]);
  useEffect(() => {
    setlistOfObject(getBrowsingData());
  }, []);
    return (
        <div className='product-detail'>
            <ProductDetail addClickAction={addClickActionpart}
                      removeClickAction={removeClickActionpart}  />
            <p>Suggestion</p>
            <div className="Product-Window">
                {(search.length === 0
                  ? listOfObject
                  : listOfObject.filter((item) => item.item2.includes(search))
                ).map((item) => {
                  return (
                    <Card
                      itemImages={item.item1}
                      itemNames={item.item2}
                      itemDesc={item.item3}
                      addClickAction={addClickActionpart}
                      removeClickAction={removeClickActionpart}
                    />
                  );
                })}
              </div>
        </div>
    );
}