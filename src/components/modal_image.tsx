import React, { useState } from 'react';
import '../Style/content.css';

const ModalImage = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <div className='container'>
            <span>
                4
            </span>
            <div>
                <div className='box_modal'>
                    <img src="https://lh3.googleusercontent.com/pw/ADCreHeh3pq2gjOlgb5j0EobhmBAmuqiGo1aGu5eaNRidSoUvzaMZ_nD1jsgvLUGCH73mueFE0gd-HEBd4Ot583CklHbstXN-EBwFNciWzvbZowoN9kCmfalbPYa2HYjEGZ1QK86OGU2UBw16tTFeK_tTvqqYVbo8DnKbyScvRFopBhGa_RuI350tGY7qAxxMsX2kbHaxfwy3SGOH02i3m9CmfmqH4ximPTUD7Ep6jpVKJceWyYQv3REU9d_91i3GMe_KOl3Rt-H9U6qOpdklZjHJxEwxflizIrVOToDFaYksFjQNvHxEGL6-Wq2mta85gInzPaBgzK74a-O87M2FKDGTwIXmhpGazWnxkKVWLG447TTLSKHaePz6Ba8JqAsVOi9L_rksOODCL0LN35BE-nBN2-2-6iqf2CMM2mtNIIRrJAyFgUkd9WV4WdnnxmItywSpFYfn4W4QEdIQa8g1Scu4vH-T4Lhg1lCAwzEWgzKM3emSxWH8-K6BKn2YbwGWp0OJw1C6o4o9B3pzv2RbvTWDHO4M_-T0Zf7YH3jk1aEgHpMbgjvktRomihAT7WgRSFB4jCjQPhtnA3BtMsodKb_5j4EulbtjJlHQakv1By06_NYibk5yegsaLMTAB9swm7G5mPcK1USGQHsPBrRJwO49PtiT2lutnatmA2AwyTcDWJgORatEzn4wKm7nB8Hwwq_2pHgkFRewAXdeRCw5GPwnIOc8LFMD2O1V__gl3NNZTD_WPw1R2Tn1LIUUQFdkeBpiZjet0b_pO4htvcT4XjSj8b9BzOlfTZHz-8I-tPcJWy59AhT4D4I6v7wTImo-caQ3Xf-Sl0sbgr5Jfw6LEXynlfcSXdqJ31CgVqaenGhNPPFw1oNY1wVIgxEju-5vGYYf5nNXYaukxIdHN-WFnwMLw=w1000-h666-s-no?authuser=0" alt="Mansão" />

                    <button className='open_image' onClick={openModal}>
                        ABRIR IMAGEM NO MODAL
                    </button>
                </div>
            </div>
            {modalVisible && (
                <div className='modal-overlay' onClick={closeModal}>
                    <div className='modal'>
                        <img src="https://lh3.googleusercontent.com/pw/ADCreHeh3pq2gjOlgb5j0EobhmBAmuqiGo1aGu5eaNRidSoUvzaMZ_nD1jsgvLUGCH73mueFE0gd-HEBd4Ot583CklHbstXN-EBwFNciWzvbZowoN9kCmfalbPYa2HYjEGZ1QK86OGU2UBw16tTFeK_tTvqqYVbo8DnKbyScvRFopBhGa_RuI350tGY7qAxxMsX2kbHaxfwy3SGOH02i3m9CmfmqH4ximPTUD7Ep6jpVKJceWyYQv3REU9d_91i3GMe_KOl3Rt-H9U6qOpdklZjHJxEwxflizIrVOToDFaYksFjQNvHxEGL6-Wq2mta85gInzPaBgzK74a-O87M2FKDGTwIXmhpGazWnxkKVWLG447TTLSKHaePz6Ba8JqAsVOi9L_rksOODCL0LN35BE-nBN2-2-6iqf2CMM2mtNIIRrJAyFgUkd9WV4WdnnxmItywSpFYfn4W4QEdIQa8g1Scu4vH-T4Lhg1lCAwzEWgzKM3emSxWH8-K6BKn2YbwGWp0OJw1C6o4o9B3pzv2RbvTWDHO4M_-T0Zf7YH3jk1aEgHpMbgjvktRomihAT7WgRSFB4jCjQPhtnA3BtMsodKb_5j4EulbtjJlHQakv1By06_NYibk5yegsaLMTAB9swm7G5mPcK1USGQHsPBrRJwO49PtiT2lutnatmA2AwyTcDWJgORatEzn4wKm7nB8Hwwq_2pHgkFRewAXdeRCw5GPwnIOc8LFMD2O1V__gl3NNZTD_WPw1R2Tn1LIUUQFdkeBpiZjet0b_pO4htvcT4XjSj8b9BzOlfTZHz-8I-tPcJWy59AhT4D4I6v7wTImo-caQ3Xf-Sl0sbgr5Jfw6LEXynlfcSXdqJ31CgVqaenGhNPPFw1oNY1wVIgxEju-5vGYYf5nNXYaukxIdHN-WFnwMLw=w1000-h666-s-no?authuser=0" alt="Mansão" />

                        <button className='close_modal' onClick={closeModal}>
                            FECHAR MODAL
                        </button>
                    </div>
                </div>
            )}
        </div>

    );
};

export default ModalImage;
