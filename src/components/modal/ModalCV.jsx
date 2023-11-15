import { useState, useRef, useEffect } from "react";
import arrow from "../../assets/arrow-right-solid.svg";
import MarcosFreitas from "./MarcosFreitas.pdf";

export function useModal() {
    const [showModal, setShowModal] = useState(false);
    const modalRef = useRef(null);
    const buttonRef = useRef(null);

    console.log(showModal)

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setShowModal(false);
        }
    };

    const triggerButtonClick = () => {
        setShowModal(!showModal);
        console.log('clicked')
    };
    

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    return { showModal, buttonRef, modalRef, handleCloseModal, handleOpenModal, triggerButtonClick };
}

function ModalCV() {
    const { showModal, buttonRef, modalRef, handleCloseModal, triggerButtonClick } = useModal();

    return (
        <>
            <button id="resume" className="nav-link btn btn-primary" onClick={triggerButtonClick} ref={buttonRef}><span>RESUME <img src={arrow} alt="arrow" /></span></button>
            {showModal && (
                <div id="modal">
                    <div id="modal-content" ref={modalRef}>
                        <button id="close-modal" onClick={handleCloseModal}>X</button>
                        <div className="embedPDF">
                            <embed src={MarcosFreitas} type="application/pdf" width="100%" height="100%" />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ModalCV;
