import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailCardInfo from "./components/DetailCardInfo";
import DetailCard from "./pages/DetailCard";
import Gallery from "./pages/Gallery";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/detail-card" element={<DetailCard />}>
          <Route path=":cardId" element={<DetailCardInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
