import styled, { keyframes } from "styled-components";

const popRightAnimation = keyframes`
    from {
        transform: translateX(100vw);
        opacity: 0;
        scale: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
        scale: 1;
    }
`;

const popLeftAnimation = keyframes`
    from {
        transform: translateX(-100vw);
        opacity: 0;
        scale: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
        scale: 1;
    }
`;

const bounceAnimation = keyframes`
    from {
        transform: translateY(0px);
    }
    to {
        transform: translateY(-10px);
    }
`;

const popUpAnimation = keyframes`
    0% {
        transform: scale(0);
    }
    80% {
        transform: scale(1);
    }
    100% {
        transform: scale(0.8);
    }
`;
export const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1080px;
  min-height: 100vh;
  height: 100%;
  margin: 2rem auto;

  .header-container {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    margin-top: 8rem;
    padding-bottom: 4rem;

    .hero-profile {
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      align-items: center;
      gap: 4rem;
      padding: 0 3rem;

      .profile {
        & .popRight {
          animation: ${popRightAnimation} 1.2s forwards !important;
        }

        > h1 {
          font-size: 3.5rem;
          margin-bottom: 1rem;
        }

        > img {
          width: 270px;
          border-radius: 50%;
          animation: ${bounceAnimation} 1s infinite alternate;
          box-shadow: 0 5px 10px var(--bg-secondary);
        }
      }

      .content-text {
        width: 100%;
        text-align: start;
        margin: 1rem 0;
        transform: translateX(-100vw);

        &.popLeft {
          animation: ${popLeftAnimation} 0.8s forwards !important;
        }

        h2 {
          font-size: 2rem;
          line-height: 1.2;
        }

        > h3 {
          font-size: 1.2rem;
          line-height: 1.2;
          margin: 1.5rem 0 0 0;
        }

        p {
          font-size: 1rem;
          padding: 0rem;
          margin: 1rem 0 0 0;
          max-width: 700px;
        }
      }
    }

    .btn-container {
      display: flex;
      max-width: 80%;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      gap: 10rem;

      > .btn {
        margin-top: 1rem;
        scale: 1.5;
        transition: 0.2s ease-in-out;
        cursor: pointer;
        color: var(--text-color-two);

        &:hover {
          scale: 1.8;
          transition: 0.2s ease-in-out;
        }
      }
    }
    @media (max-width: 600px) {
      margin-top: 1rem;
      align-items: center;
      justify-content: center;
      .hero-profile {
        display: block;
        height: 80%;
        padding: 0 1rem;
        margin: 0 auto;
        align-items: center;
        justify-content: center;
      }

      #connect-btn {
        height: 20%;
      }

      .content-text {
        width: 100%;
        padding: 1rem;
      }

      .header-container {
        .btn {
          border-radius: 5px;
          width: 80%;
        }
      }

      .btn-container {
        gap: 3rem;
      }
    }
  }

  .techIcons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    margin: 5rem auto;
    font-size: 5em;
    animation: ${popUpAnimation} 3s forwards !important;

    > div {
      > i {
        box-shadow: 0 5px 10px var(--bg-secondary);
        border-radius: 50%;
        padding: 1rem;
      }

      > p {
        font-size: 1.2rem;
        margin-top: 1rem;
        text-align: center;
      }

      &:hover {
        scale: 1.2;
        transition: 0.2s ease-in-out;
      }
    }
  }

  .popUp {
    animation: ${popUpAnimation} 1.5s forwards !important;
  }
`;
