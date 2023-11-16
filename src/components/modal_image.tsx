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
                    <img src="https://lh3.googleusercontent.com/pw/ADCreHfCDguzjoUf9pDILyFY_PlJAakkj1fF2IPOVCSaRH-Gs2cXr9fAJJtkf7F2g7FcAjf8w1eRwf2-GseT8vU3RlvL1udsJT7wf_3u6yct7rESaUvw8UxBlwwvlTHBrHLx92cxbZpZafQg5n17_ABicwLITKZkAWRdmeZ8XaFpwq68cThHvxiLiVRTD-gzBxA-nIGrN4zvN7aDSlbRGFFT8XItnTionFiFt0MrBLgIm3Vp6E0HTvbHO3DQ45CGXD_0P1L5FkheiaUG_Nuut602GQ6YtZ4AJMSGKjRu9cEcFasblsHjx6F2ZslM2nHrSsuJEHVh7oj1H_DLL5ZgO497einoIUphh2IvYbmf00iwD73Ly5c1BdAfZV0wAHwEzErHbO2o4AuBpHJsuKAFIGot8CxFBCAaMUIHoDm6l_CVPBSKNCwSIgQDMRw5AWfvtsP1lcbMfAp3fyItkaVJ9HYajR8LEqdeTuIOwpG4niB5RJhDXjsdeg01Bg_NLGa70oZLZ3rZWQwmkt8K-cK5O8m1rs0ribNZf4M40LUo7cgnZWwZzNRsef-TycEEseQh6ESM85IzIhO9_cHO-mC9DWOn07FHzmnJIonI3EzSXNA9ivjCu1ALX825rDtTY0bipfYfgyLuG4CXzJwJw05DhytoaBl0cfhxlI0cr0Mf0GOXL_XoCg8AmS4-pnDxA-CrkcBXRjLn8MGyC1hQonON-PxGx5LEw278ZQ5wGTHgF10ZC7pmR4YRFeYteOQk-g47agBiO5_EW8PuuGeSxPPWlrpaF94i0W8_w7_qRpdFXJ5o0aUPHAMaYiQa6VGoXibtVAZhVAQHDtXsaC8-xp2kCcLKKGWhFfy_YVigGqgteaiitLr1jEAcei0beWvDcYyTW5PsIAauQEqMeHi7qXxKBsziNQ=w1000-h666-s-no?authuser=0" alt="Mansão" />

                    <button className='open_image' onClick={openModal}>
                        ABRIR IMAGEM NO MODAL
                    </button>
                </div>
            </div>
            {modalVisible && (
                <div className='modal-overlay' onClick={closeModal}>
                    <div className='modal'>
                        <img src="https://lh3.googleusercontent.com/pw/ADCreHfCDguzjoUf9pDILyFY_PlJAakkj1fF2IPOVCSaRH-Gs2cXr9fAJJtkf7F2g7FcAjf8w1eRwf2-GseT8vU3RlvL1udsJT7wf_3u6yct7rESaUvw8UxBlwwvlTHBrHLx92cxbZpZafQg5n17_ABicwLITKZkAWRdmeZ8XaFpwq68cThHvxiLiVRTD-gzBxA-nIGrN4zvN7aDSlbRGFFT8XItnTionFiFt0MrBLgIm3Vp6E0HTvbHO3DQ45CGXD_0P1L5FkheiaUG_Nuut602GQ6YtZ4AJMSGKjRu9cEcFasblsHjx6F2ZslM2nHrSsuJEHVh7oj1H_DLL5ZgO497einoIUphh2IvYbmf00iwD73Ly5c1BdAfZV0wAHwEzErHbO2o4AuBpHJsuKAFIGot8CxFBCAaMUIHoDm6l_CVPBSKNCwSIgQDMRw5AWfvtsP1lcbMfAp3fyItkaVJ9HYajR8LEqdeTuIOwpG4niB5RJhDXjsdeg01Bg_NLGa70oZLZ3rZWQwmkt8K-cK5O8m1rs0ribNZf4M40LUo7cgnZWwZzNRsef-TycEEseQh6ESM85IzIhO9_cHO-mC9DWOn07FHzmnJIonI3EzSXNA9ivjCu1ALX825rDtTY0bipfYfgyLuG4CXzJwJw05DhytoaBl0cfhxlI0cr0Mf0GOXL_XoCg8AmS4-pnDxA-CrkcBXRjLn8MGyC1hQonON-PxGx5LEw278ZQ5wGTHgF10ZC7pmR4YRFeYteOQk-g47agBiO5_EW8PuuGeSxPPWlrpaF94i0W8_w7_qRpdFXJ5o0aUPHAMaYiQa6VGoXibtVAZhVAQHDtXsaC8-xp2kCcLKKGWhFfy_YVigGqgteaiitLr1jEAcei0beWvDcYyTW5PsIAauQEqMeHi7qXxKBsziNQ=w1000-h666-s-no?authuser=0" alt="Mansão" />

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
