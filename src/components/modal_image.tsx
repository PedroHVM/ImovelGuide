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
                    <img src="/src/images/mansao.jpg" alt="Mansão" />

                    <button className='open_image' onClick={openModal}>
                        ABRIR IMAGEM NO MODAL
                    </button>
                </div>
            </div>
            {modalVisible && (
                <div className='modal-overlay' onClick={closeModal}>
                    <div className='modal'>
                        <img src="https://photos.google.com/photo/AF1QipNczst9Wybf3E51udEEWHyxpxHjlOjhqrM5QVnZ" alt="Mansão" />

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
