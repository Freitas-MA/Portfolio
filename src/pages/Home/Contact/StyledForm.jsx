import styled from "styled-components";

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 10vh;
  .content {
    padding: 5vh;
    background-color: transparent;
    min-height: 80vh;
    height: auto;
    width: 100%;
    max-width: 1080px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    z-index: 2;

    border: 1px solid gray;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    box-shadow: 0 5px 10px var(--bg-secondary);

    @media (max-width: 688px) {
      flex-direction: column-reverse;
      margin: 0;
      padding: 0;
      border: none;
    }
    & .left-side {
      width: 29%;
      max-width: 300px;
      height: 100%;
      display: flex;
      flex-direction: column;
      flex-shrink: 0;
      align-items: start;
      justify-content: center;
      margin-top: 15px;
      border-bottom: 2px solid gray;

      @media (max-width: 688px) {
        padding-bottom: 15px;
        margin-bottom: 15px;
        border-top: 2px solid gray;
        align-items: center;
        text-align: center;
      }
    }
    & span {
      font-size: 18px;
      font-weight: 500;
    }
    & p {
      font-size: 14px;
      color: var(--text-color);
    }
  }
  & .right-side {
    width: 70%;
    max-width: 700px;
    margin-left: 75px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 688px) {
      margin-left: 0;
    }

    & .topic-text {
      font-size: 23px;
      font-weight: 600;
      color: var(--text-color);
    }

    & form {
      width: 100%;
      max-width: 700px;
      & .input-box {
        height: 50px;
        width: 100%;
        margin: 12px 0;

        & input,
        textarea {
          height: 100%;
          width: 100%;
          border: none;
          outline: none;
          font-size: 16px;
          background: #f0f1f8;
          border-radius: 6px;
          padding: 0 15px;
          resize: none;
          box-shadow: #afafb6;
          border: 1px solid gray;

          &:focus {
            #contact {
              background-color: gray important!;
            }
          }
        }

        & textarea {
          min-height: 110px;
          padding-top: 6px;
          box-shadow: #afafb6;
          border: 1px solid gray;
        }
      }

      & .button {
        display: inline-block;
        margin-top: 0.2rem;
      }

      & #buttonSubmit {
        color: var(--text-color-two);
        font-size: 18px;
        outline: none;
        border: none;
        padding: 8px 16px;
        margin-top: 4rem;
        border-radius: 6px;
        background: var(--bg-secondary);
        cursor: pointer;
        transition: all 0.3s ease;
      }

      & #buttonSubmit:hover {
        background: var(--text-color);
        box-shadow: var(--shadow);
      }
    }
  }
`;
