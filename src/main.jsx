import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import PreviewCard from "./previewCard";
import iconLuxury from "./assets/icon-luxury.svg";
import iconSedans from "./assets/icon-sedans.svg";
import iconSuvs from "./assets/icon-suvs.svg";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <div className="main-container">
   <PreviewCard
      backgroundColor="hsl(31, 77%, 52%)"
      icon={iconSedans}
      title="Sedans"
      description="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
      textColor="white"
      borderRadius='10px 0 0 10px'
    />

    <PreviewCard
      backgroundColor="hsl(184, 100%, 22%)"
      icon={iconSuvs}
      title="SUVs"
      description="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
      textColor="white"
    />

    <PreviewCard
      backgroundColor="hsl(179, 100%, 13%)"
      icon={iconLuxury}
      title="Luxury"
      description="Luxury Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
      textColor="white"
      borderRadius='0 10px 10px 0'
    />
   </div>
  </React.StrictMode>
);
