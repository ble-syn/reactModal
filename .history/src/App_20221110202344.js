import { useState} from "react";
import Modal from "./components/Modal";



function App() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <div className="App">
      <div className="btn-div">
        <button className="btn alw-acs" onClick={openModal}>Click to see Popup</button>
      </div>
      {showModal ? <Modal /> : null}
    </div>
  );
}

export default App;
