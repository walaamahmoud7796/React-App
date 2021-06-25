import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function deleteHandler() {
    console.log("clicked");
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }
  return (
    <div className="card">
      <h1>{props.text}</h1>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
        {modalIsOpen ? <Modal onCancel={closeModalHandler}></Modal> : null}
        {modalIsOpen && <Backdrop onCancel={closeModalHandler}></Backdrop>}
      </div>
    </div>
  );
}

export default Todo;
