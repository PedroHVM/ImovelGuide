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
                    <img src="https://cdn.uso.com.br/34392/2023/03/2f0a3004c192bb2f9dd6dce80361121d.jpg" alt="Mansão" />

                    <button className='open_image' onClick={openModal}>
                        ABRIR IMAGEM NO MODAL
                    </button>
                </div>
            </div>
            {modalVisible && (
                <div className='modal-overlay' onClick={closeModal}>
                    <div className='modal'>
                        <img src="https://cdn.uso.com.br/34392/2023/03/2f0a3004c192bb2f9dd6dce80361121d.jpg" alt="Mansão" />

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
