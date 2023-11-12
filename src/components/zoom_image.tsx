import React, { useEffect, useState } from 'react';
import '../Style/zoom_image.css';

const Zoom = () => {
    const [zoomLevel, setZoomLevel] = useState(2);

    useEffect(() => {
        const zoomOutAnimation = setInterval(() => {
            setZoomLevel((prevZoom) => prevZoom - 0.02);

            
            if (zoomLevel <= 1) {
                clearInterval(zoomOutAnimation);
            }
        }, 30);

        return () => {
            clearInterval(zoomOutAnimation);
        };
    }, [zoomLevel]);

    return (
        <div className='box_zoom'>
            <span>6</span>
            <div >
                <img src='/src/images/corretor_2.webp' alt='Mansão' style={{ transform: `scale(${zoomLevel})` }}/>
            </div>

        </div>
    );
};

export default Zoom;
