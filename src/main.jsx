import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header.tsx";
import Phone from "./components/phone.tsx";
import Cpf from "./components/cpf.tsx";
import RegraDeTres from "./components/regraDeTres.tsx";
import ModalImage from "./components/modal_image.tsx";
import Download from "./components/download_image.tsx";
import Zoom from "./components/zoom_image.tsx";
import Footer from "./components/footer.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <div className="exercises">
      <Phone />
      <Cpf />
      <RegraDeTres />
      <ModalImage />
      <Download />
      <Zoom />
    </div>
    <Footer />
  </React.StrictMode>
);
