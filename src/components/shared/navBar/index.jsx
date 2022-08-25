import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'
export default function NavBar(props) {
  let navigate = useNavigate();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1000px)" });
  const { onSearchChange,title = "Genral Store", sizeOfCart = 0 } = props;
  if (isTabletOrMobile) {
    return (
      <div className="TopNavBar-container-mobile">
        <span className="mobile-con1">
          <img src="images/home.svg" alt="home" className="con1-img" />
          <span onClick={()=>navigate("/")} className="con1-navigator" >Home</span>
        </span>
        <span className="mobile-con1">
          <img src="images/cloth.svg" alt="home" className="con1-img" />
          <span onClick={()=>navigate("/clothscreen")} className="con1-navigator" >Clothes</span>
        </span >
        <span className="mobile-con1">
          <img src="images/mobile.svg" alt="home" className="con1-img" />
          <span onClick={()=>navigate("/mobilescreen")} className="con1-navigator" >Mobile</span>
        </span >
        <span className="mobile-con1">
          <img src="images/search.svg" alt="home" className="con1-img" />
          <span>Search</span>
        </span>
      </div>
    );
  }else {
  return (

    
    <div className="NavBar-container">
      <p className="NavBar-title" onClick= {()=>navigate("/")}>{title}</p>
      <input
        type="text"
        placeholder="Search Product"
        className="NavBar-search"
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <p onClick={()=>navigate("/mobilescreen")}>Mobile</p>
      <p onClick={()=>navigate("/clothscreen")} >clothes</p>
      <div className="NavBar-right">
        <span className="icon-container">
          <img src="images/cart.svg" className="NavBar-icon" alt="cart" />
          {sizeOfCart > 0 && (
            <p className="NavBar-icon-tooltip">{sizeOfCart}</p>
          )}
        </span>
        <img src="images/profile.svg" alt="" className="NavBar-img" />
      </div>
    </div>
  );
}
}
