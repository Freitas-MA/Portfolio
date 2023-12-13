import arrow from "../../assets/arrow-right-solid.svg";

function ModalCV() {
  const openModal = () => {
    document.getElementById("modal").style.display = "flex";
    document.documentElement.style.overflow = "hidden";
  };

  return (
    <>
      <button
        id="resume"
        className="nav-link btn btn-primary"
        onClick={openModal}
      >
        <span>
          RESUME <img src={arrow} alt="arrow" />
        </span>
      </button>
    </>
  );
}

export default ModalCV;
