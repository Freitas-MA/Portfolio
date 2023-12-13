import React, { useEffect } from "react";
import MarcosFreitas from "../../components/modal/MarcosFreitas.pdf";
import { StyledModal } from "./StyledModal";

export default function EmbedModal() {

const closeModal = () => {
    document.getElementById("modal").style.display = "none";
    document.documentElement.style.overflow = "auto";
  }


  return (
    <>
      <StyledModal id="modal">
        <div id="modal-content">
          <button id="close-modal" onClick={closeModal}>
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
      </StyledModal>
    </>
  );
}
