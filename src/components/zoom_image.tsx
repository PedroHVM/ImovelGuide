import React, { useEffect, useState } from 'react';
import '../Style/zoom_image.css';

const Zoom = () => {
   
    return (
        <div className='box_zoom'>
            <span>6</span>
            <div >
                <img src='/src/images/mansao.jpg' alt='Mansão'/>
            </div>

        </div>
    );
};

export default Zoom;
