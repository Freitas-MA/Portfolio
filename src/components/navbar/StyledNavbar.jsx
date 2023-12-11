import styled from "styled-components";

export const StyledNavbar = styled.nav`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  width: 100vw;
  max-width: 100vw;
  background: var(--bg-primary);
  box-shadow: var(--shadow);

  & .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 20;
    height: 50px;
    width: 100%;
    max-width: 100vw;

    & .nav-menu {
      display: flex;
      align-items: center;
      background: var(--bg-primary);
    }
    & .nav-link {
      margin: 0 1rem;
      font-size: 0.8rem;
      font-weight: var(--weight-semibold);
    }
    & #logo img {
      display: block;
      width: 45px;
      color: var(--text-color);
      background-color: #ffffff;
      border-radius: 50%;
      padding: 5px;
    }

    & .btn {
      margin-right: 1.5rem;
    }

    & #resume {
      height: 25px;
      transform: translateY(0.2rem);

      & span {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.8rem;
        text-align: center;
        line-height: 2px;
        margin: 0;
        transform: translateY(-0.5rem);

        & img {
          width: 15px;
          margin-left: 0.6em;
          animation: arrow-bounce 0.5s infinite alternate;
        }
      }

      & :hover {
        cursor: pointer;
      }
    }
    .hamburger {
      margin-bottom: 0.1rem;
      display: none;

      & .bar {
        display: block;
        width: 23px;
        height: 3px;
        margin: 4px auto;
        transition: all 0.3s ease-in-out;
        border-radius: 30px;
        background-color: var(--bg-secondary);
      }
    }
  }
  // Media Queries
  @media (max-width: 688px) {
    & .container {
      & .nav-menu {
        display: none;
        position: absolute;
        left: 100%;
        transform: translateX(-110%);
        top: 5rem;
        flex-direction: column;
        width: 0px;
        box-shadow: var(--shadow);
        padding: 2rem;
        border-radius: 5px;
        align-items: center;
        text-align: center;
        opacity: 0;
        transition: ease-in-out 0.8s;
        gap: 1rem;
        z-index: -100;
      }

      & .hamburger {
        display: block;
        cursor: pointer;
        padding: 0.2rem 0.4rem;

        &:hover {
          background-color: lightblue;
          border-radius: 5px;
        }
      }

      .nav-menu.active {
        display: flex;
        right: 50%;
        width: calc(80% - 10px);
        opacity: 1;
        & .nav-link {
          font-size: 0.9rem;
          margin: 0 0.2rem;
        }
        & li {
          margin-bottom: 0.5rem;
          width: 100%;
        }
      }
      .active {
        & .bar:nth-child(2) {
          opacity: 0;
        }
        & .bar:nth-child(1) {
          transform: translateY(6px) rotate(45deg);
        }
        & .bar:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }
      }
    }
  }
`;
