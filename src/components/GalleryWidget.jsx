import React from "react";
import "./GalleryWidget.css";

function GalleryWidget() {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyAdF9AuNcUlJC09rWiv2dgZCTNniMADaAMw&s",
    "https://repository-images.githubusercontent.com/563188068/e32f9430-a888-47fa-8871-918b0cde9754",
    "https://www.lightgalleryjs.com/blog/7-best-react-image-gallery-libraries/photoswipe.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPv2uQmrjKfmUAv40o6R-251WhlLME1Vf4CkPmrT5m9hLCPfP1AWgPV4BiUk-yAXOfiJ0&usqp=CAU",
  ];

  return (
    <div className="gallery-widget">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`img-${index}`} />
        ))}
      </div>
    </div>
  );
}

export default GalleryWidget;
