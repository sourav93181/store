import React, { useEffect, useState } from "react";
import { Card } from "../../../components";
import getDenimimg from "../../../api/clothesdenimapi/denim";
import "./style.css";

export default function ClothesScreen(props) {
  const {addClickActionCloth, removeClickActionCloth,searching}=props;
    const [listOfObject, setlistOfObject] = useState([]);
    useEffect(() => {
      setlistOfObject(getDenimimg());
    }, []);
    return (
        <div className="cloth-section-container">
      <div className="section-c-con1">
        <h3>Denim</h3>
        <div className="horizonal-scrolling">
          {(searching.length === 0
                  ? listOfObject
                  : listOfObject.filter((item) => item.name.includes(searching))
                ).map((item) => {
            return (
              <Card
                itemImages={item.photo}
                itemNames={item.name}
                itemDesc={item.desc}
                addClickAction={addClickActionCloth}
                removeClickAction={removeClickActionCloth}
              />
            );
          })}
          
        </div>
      </div>

      <div className="section-m-con1">
        <h3>levis</h3>
        <div className="horizonal-scrolling">
          {listOfObject.map((item) => {
            return (
              <Card
                itemImages={item.photo}
                itemNames={item.name}
                itemDesc={item.desc}
              />
            );
          })}
          
        </div>
      </div>


    </div>
    );
}