import React, { useEffect, useState } from "react";
import { Card, NavBar } from "../../components";
import "./style.css";
import { getBrowsingData } from "../../api/browsingApi";
import { Route } from "react-router-dom";
import MobileScreen from "./mobileScreen";
import Detail from "./details";
import ClothScreen from "./clothesScreen";
import { Routes } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
export default function Browsing(props) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1000px)" });

  const [cartval, setCartval] = useState(0);

  function incrementCart() {
    setCartval(cartval + 1);
  }
  function decrementCart() {
    if (cartval > 0) {
      setCartval(cartval - 1);
    }
  }
  const [search, setSearch] = useState("");
  const [listOfObject, setlistOfObject] = useState([]);
  useEffect(() => {
    setlistOfObject(getBrowsingData());
  }, []);



  if(isTabletOrMobile) {
    return (
      <div className="Browsing-Window" >
      <NavBar sizeOfCart={cartval} onSearchChange={(val) => setSearch(val)} />
      <div className="loading-container">
        <Routes>
          <Route
            path="/"
            element={
              <div className="Product-Window-mobile">
                {(search.length === 0
                  ? listOfObject
                  : listOfObject.filter((item) => item.item2.includes(search))
                ).map((item) => {
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
            }
          />
          <Route path="/mobilescreen" element={<MobileScreen />} />
          <Route path="/clothscreen" element={<ClothScreen />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </div>

    </div>
    );
  }else {
  
  
  
  return (
    <div className="Browsing-Window" >
      <NavBar sizeOfCart={cartval} onSearchChange={(val) => setSearch(val)} />
      <div className="loading-container">
        <Routes>
          <Route
            path="/"
            element={
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
                      addClickAction={incrementCart}
                      removeClickAction={decrementCart}
                    />
                  );
                })}
              </div>
            }
          />
          <Route path="/mobilescreen" element={<MobileScreen />} />
          <Route path="/clothscreen" element={<ClothScreen />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </div>

    </div>
  );
}
}