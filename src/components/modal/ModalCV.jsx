import { useState, useRef, useEffect } from "react";
import arrow from "../../assets/arrow-right-solid.svg";
import MarcosFreitas from "./MarcosFreitas.pdf";

export function useModal() {
    const [showModal, setShowModal] = useState(false);
    const modalRef = useRef(null);
    const buttonRef = useRef(null);
    


    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const modalSwitch = () => {
        setShowModal(!showModal);
    };

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
            setShowModal(false);
        }
        
    };

    useEffect(() => {
        showModal ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "unset");
        showModal ? (document.getElementById("modal").style.display = "flex") : (document.getElementById("modal").style.display = "none");
    }, [showModal]);
    

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    return { showModal, buttonRef, modalRef, modalSwitch};
}

function ModalCV() {
    const { showModal, buttonRef, modalRef, modalSwitch } = useModal();

    return (
        <>
            <button id="resume" className="nav-link btn btn-primary" onClick={modalSwitch} ><span>RESUME <img src={arrow} alt="arrow" /></span></button>
            
                <div id="modal">
                    <div id="modal-content">
                        <button id="close-modal" onClick={modalSwitch}>X</button>
                        <div className="embedPDF">
                            <embed src={MarcosFreitas} type="application/pdf" width="100%" height="100%" />
                        </div>
                    </div>
                </div>
           
        </>
    );
}

export default ModalCV;
