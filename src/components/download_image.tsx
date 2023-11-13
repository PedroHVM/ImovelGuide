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
          <img src="https://cdn.uso.com.br/34392/2023/03/2f0a3004c192bb2f9dd6dce80361121d.jpg" alt="Mansão" />
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
