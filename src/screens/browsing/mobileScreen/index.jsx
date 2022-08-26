import React, { useEffect, useState } from "react";
import { Card } from "../../../components";
import getRealmeimg from "../../../api/realmeapi/realme";
import "./style.css";
export default function MobileScreen(props) {
  const {addClickAction1, removeClickAction1}=props;
  const [listOfObject, setlistOfObject] = useState([]);
  useEffect(() => {
    setlistOfObject(getRealmeimg());
  }, []);
  return (
    <div className="mobile-section-container">
      <div className="section-m-con1">
        <h3>Realme</h3>
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

      <div className="section-m-con1">
        <h3>oppo</h3>
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

