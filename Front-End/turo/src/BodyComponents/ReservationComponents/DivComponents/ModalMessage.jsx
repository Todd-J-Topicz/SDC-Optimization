import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../DivComponentsCss/Report.css";
import { SiConventionalcommits } from "react-icons/si"


function MyVerticallyCenteredModal(props) {
    const [active, setActive] = useState(false)
  return (
    <Modal
      id='modalBox'
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="Modal-Title">
          Report this listing
        </Modal.Title>
      </Modal.Header >
      <Modal.Body >
        <div>
       <button className='modalOptions'><SiConventionalcommits className='circle' isActive={active} onClick={() => setActive(!active)} style = {{fill: active ? "#593CFB" : "#593CFB", stroke: !active ? "#593CFB":"#593CFB"}}/> Inappropriate/offensive content</button>
        </div>
        <div>
       <button className='modalOptions'><SiConventionalcommits className='circle'/> Other</button>
        </div>
        <div>
       <button className='modalOptions'><SiConventionalcommits className='circle'/> Spam</button>
        </div>
        <div>
       <button className='modalOptions'><SiConventionalcommits className='circle'/> Misleading/suspicious information</button>
        </div>
        <h6>REASON</h6>
        <h5>required</h5>
        <textarea id='textbox'rows={4}></textarea>
        <button id='modalCancel' closeButton >Cancel</button>
        <button id='modalReport' disabled>Report</button>

      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

export default function Testing() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button id="report" variant="primary" onClick={() => setModalShow(true)}>
        Report Listing
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}