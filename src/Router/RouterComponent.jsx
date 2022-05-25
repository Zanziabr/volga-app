import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import StartPage from "../pages/StartPage";
import GenderPage from "../pages/GenderPage";
import GlassesPage from "../pages/GlassesPage";
import FrameSizePage from "../pages/FrameSizePage";
import ShadesPage from "../pages/ShadesPage";
import FacesPage from "../pages/FacesPage";
import FacialPage from "../pages/FacialPage";
import FrameStylePage from "../pages/FrameStylePage";
import BrandsPage from "../pages/BrandsPage";
import SendPage from "../pages/SendPage";
function RouterComponent() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/gender" element={<GenderPage />} />
        <Route path="/glasses" element={<GlassesPage />} />
        <Route path="/frame-size" element={<FrameSizePage />} />
        <Route path="/shades" element={<ShadesPage />} />
        <Route path="/faces" element={<FacesPage />} />
        <Route path="/facial-features" element={<FacialPage />} />
        <Route path="/frame-style" element={<FrameStylePage />} />
        <Route path="/brands" element={<BrandsPage />} />
        <Route path="/send" element={<SendPage />} />
      </Routes>
   </BrowserRouter>
  );
}

export default RouterComponent;
