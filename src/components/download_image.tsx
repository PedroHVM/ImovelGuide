import React, { useRef } from "react";
import html2canvas from "html2canvas";
import '../Style/content.css'

const Download = () => {
  const containerRef = useRef(null);

  const handleDownload = () => {
    html2canvas(containerRef.current).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "downloaded_image.png";
      link.click();
    });
  };

  return (
    <div className='container' ref={containerRef}>
      <span>
        5
      </span>
      <div>
        <div className='box_modal'>
            <section>
                <p>
                Imóvel Guide
                </p>
          </section>
          <img src="https://photos.google.com/photo/AF1QipNczst9Wybf3E51udEEWHyxpxHjlOjhqrM5QVnZ" alt="Mansão" />
          <div className='overlay'>
            <button className='download_image' onClick={handleDownload}>
              Download
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Download;
