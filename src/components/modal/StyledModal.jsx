import styled from "styled-components";

export const StyledModal = styled.div`
    position: absolute;
    top: 5vh;
    left: 5vw;
    padding: 1rem;
    width: 90vw;
    height: fit-content;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
    z-index: 9999;
    border: #565656 1px solid;
    border-radius: 5px;
    
    display: none;

    .modalIsVisible {
        display: flex;
    }

    & #modal-content {
      width: 100%;
      max-width: 1080px;
      height: 90vh;
      background-color: var(--bg-primary);
      padding: 2rem;
      border-radius: 5px;
      position: relative;

      & .embedPDF {
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 5px;
        overflow: hidden;
        margin: 0;
        padding: 0;
        background-color: var(--bg-primary);
      }
      & #close-modal {
        position: absolute;
        top: 10px;
        right: 10px;
        border: none;
        background-color: transparent;
        cursor: pointer;
        color: var(--text-color);
      }

      & span {
        display: flex;
        font-size: 0.6rem;
        justify-content: center;
        margin-top: -20px;
      }
    }
`;
