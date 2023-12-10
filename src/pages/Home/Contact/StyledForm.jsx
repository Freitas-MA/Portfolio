import styled from "styled-components";

export const StyledFormS = styled.div`
  #contact {
    margin: 5vh 0;
    padding: 5vh 0;
    background-color: transparent;
    min-height: 100vh;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: max-content;
  }

  .contact-form {
    width: 90%;
    max-width: 1080px;
    background: var(--bg-primary);
    border-radius: 10px;
    padding: 2rem 1rem;
    box-shadow: 0 5px 10px var(--bg-secondary);

    .content {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      .left-side {
        width: 25%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 15px;
        position: relative;

        &::before {
          content: "";
          position: absolute;
          height: 70%;
          width: 2px;
          right: -15px;
          top: 50%;
          transform: translateY(-50%);
          background: #afafb6;
        }

        .details {
          margin: 14px;
          text-align: center;

          i {
            font-size: 30px;
            color: var(--text-color);
            margin-bottom: 10px;
          }

          .topic {
            font-size: 18px;
            font-weight: 500;
          }

          .text-one,
          .text-two {
            font-size: 14px;
            color: var(--text-color);
          }
        }
      }

      .right-side {
        width: 75%;
        margin-left: 75px;

        & .topic-text {
          font-size: 23px;
          font-weight: 600;
          color: var(--text-color);
        }

        .input-box {
          height: 50px;
          width: 100%;
          margin: 12px 0;

          input,
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
          }

          textarea {
            min-height: 110px;
            padding-top: 6px;
            box-shadow: #afafb6;
            border: 1px solid gray;
          }
        }

        .button {
          display: inline-block;
          margin-top: 0.2rem;
        }

        #buttonSubmit {
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

        #buttonSubmit:hover {
          background: var(--text-color);
          box-shadow: var(--shadow);
        }
      }

      .success {
        background-color: green !important;
        color: white !important;
      }

      .error {
        background-color: red !important;
      }

      .contact.form {
        width: 90%;
        padding: 30px 40px 40px 35px;
      }

      .contact.form .content .right-side {
        width: 75%;
        margin-left: 55px;
      }

      @media (max-width: 688px) {
        .contact-form {
          margin: 40px 0;
          height: 100%;
          & .content {
            flex-direction: column-reverse;
          }
        }
        m .contact-form .content .left-side {
          width: 100%;
          flex-direction: row;
          margin-top: 40px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .contact-form .content .left-side::before {
          display: none;
        }
        .contact-form .content .right-side {
          width: 100%;
          margin-left: 0;
        }
      }
    }
  }
`;

export const StyledForm = styled.div`
  .content {
    margin: 5vh;
    padding: 5vh;
    background-color: transparent;
    min-height: 100vh;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    z-index: 2;

    border: 1px solid gray;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    box-shadow: 0 5px 10px var(--bg-secondary);

    position: relative;

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

      @media (max-width: 688px) {
        border-bottom: 2px solid gray;
        padding-bottom: 15px;
        margin-bottom: 15px;
      }

      &::before {
        content: "";
        position: absolute;
        height: 70%;
        width: 2px;
        right: -15px;
        top: 50%;
        transform: translateY(-50%);
        background: #afafb6;

        @media (max-width: 688px) {
          display: none;
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

      @media (max-width: 688px) {
        margin-left: 0;
      }

      & .topic-text {
        font-size: 23px;
        font-weight: 600;
        color: var(--text-color);
      }

      .input-box {
        height: 50px;
        width: 100%;
        margin: 12px 0;

        input,
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
        }

        textarea {
          min-height: 110px;
          padding-top: 6px;
          box-shadow: #afafb6;
          border: 1px solid gray;
        }
      }

      .button {
        display: inline-block;
        margin-top: 0.2rem;
      }

      #buttonSubmit {
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

      #buttonSubmit:hover {
        background: var(--text-color);
        box-shadow: var(--shadow);
      }
    }
  }
`;
