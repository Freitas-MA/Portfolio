import styled from "styled-components";

export const ProjectsContainer = styled.div`
  height: max-content;
  width: 100%;
  max-width: 100vw;
  padding: 0vh 20vw;
  padding-top: 20vh;

  h1 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 3rem;
  }

  p {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 1.2em;
  }

  .project {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
    /* width: auto; */
    height: 100%;
    margin: 2rem auto;
    transition: transform 0.8s ease-in-out;

    & .front,
    .back {
      width: 300px;
      height: 300px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      overflow: hidden;
      border: 1px solid var(--bg-secondary);
      transition: transform 0.8s ease-in-out;
      transform-style: preserve-3d;
      box-shadow: 05px 10px rgba(37, 37, 37, 0.5);

      &:hover {
        transform: translate(0, 0);
      }
    }

    & .front {
      backdrop-filter: blur(5px);
      z-index: 10;
      transform: translate(50%, 0%);

      & h3 {
        font-size: 1.5rem;
        font-weight: var(--weight-semibold);
        margin-bottom: 0.5rem;
      }

      & .projectDescription {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: end;
        margin-bottom: 0.5rem;
        min-width: 100%;

        & a {
          font-size: 0.8rem;
          color: var(--text-color);
          text-decoration: none;
          cursor: pointer;
          background: #b9b9b9;
          padding: 0.5rem;
          border-radius: 10px;
          transform: scale(1);

          &:hover {
            transform: scale(1.1);
            transition: transform 0.5s ease-in-out;
          }
        }
      }
    }

    & .back {
      transform: translate(-50%, 5%);
      opacity: 0.5;

      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transform-style: preserve-3d;
      }
    }

    &:hover {
      .front {
        transform: translate(0, 0);
      }

      .back {
        transform: translate(0, 0);
        opacity: 1;
      }
    }
  }
`;
