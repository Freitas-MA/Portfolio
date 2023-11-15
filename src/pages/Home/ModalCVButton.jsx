import { useState, useRef, useEffect } from "react";
import arrow from "../../assets/arrow-right-solid.svg";
import MarcosFreitas from "../../components/modal/MarcosFreitas.pdf";

function ModalCVButton(props) {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

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

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <button 
      onClick={handleOpenModal}
      className="modalCVButton"
      >
        <span>
          Checkout my resume! <img src={arrow} alt="arrow" />
        </span>
      </button>
      {showModal && (
        <div id="modal">
          <div id="modal-content" ref={modalRef}>
            <button id="close-modal" onClick={handleCloseModal}>
              X
            </button>
            <div className="embedPDF">
              <embed
                src={MarcosFreitas}
                type="application/pdf"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalCVButton;
