import {Browsing } from "./screens";
import "./App.css";
import {  Routes, Route } from "react-router-dom";
export default function App() {
  return (
      <Routes>
        <Route path="/*" element={<Browsing />} />
        {/*<Route path="/mobilescreen" element={<MobileScreen />} />
        <Route path="/clothscreen" element={<ClothScreen />} />
        <Route path="/detail" element={<Detail />} />*/}
     </Routes>
  );
}

