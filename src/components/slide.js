import React, { useState } from "react";
import './slide.css'


const images = [
    "https://www.celebritycruises.com/blog/content/uploads/2022/01/best-sunset-in-the-world-eagle-beach-aruba-1024x683.jpg",
    "https://www.celebritycruises.com/blog/content/uploads/2022/01/best-sunset-in-the-world-cape-elizabeth-maine-1024x683.jpg",
    "https://velvetescape.com/wp-content/uploads/2009/05/FE5350FA-175D-46E6-B872-E0003220853B-640x640.jpeg",
    "https://www.travelandleisure.com/thmb/9EVIxtEEdCN3BQ7G9PK2BD0P4Rg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-azores-portugal-WRLDSNST1122-5b47f58cb5ed428aa87ea8eb66c9f2ed.jpg",
    "https://berqwp-cdn.sfo3.cdn.digitaloceanspaces.com/cache/be-lavie.com/wp-content/uploads/2018/12/IMG_0857-1-1-1024x768-jpeg.webp",
    "https://i.pinimg.com/originals/7f/bc/be/7fbcbe166e622dc18b77eb6299292dca.jpg"

];

export default function SimpleSlider() {
    const [current, setCurrent] = useState(0);
    const next = () => setCurrent((current + 1) % images.length);
    const prev = () => setCurrent((current - 1 + images.length) % images.length);
  
    return (
        <div className="slider-wrapper">
        <div className="slider-container">
          <img src={images[current]} alt="slide" className="slider-image" />
          <div className="slider-buttons">
            <button onClick={prev}>⟨ Prev</button>
            <button onClick={next}>Next ⟩</button>
            </div>
          </div>
        </div>
      );
}
