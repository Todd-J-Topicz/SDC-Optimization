import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { SlQuestion } from "react-icons/sl"



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
          
        </Modal.Title>
      </Modal.Header >
      <Modal.Body >
      All protection plans include coverage under a third-party liability insurance policy issued to Turo from Travelers Excess and Surplus Lines Company (“Travelers”). The Travelers policy provides secondary (excess) coverage for third-party liability unless primary coverage is explicitly required by an applicable state statute (e.g., Maryland and New York). Liability coverage is up to $750,000 depending on the plan chosen, except in some states and at some airports that require additional coverage. For New York trips, the liability coverage is $1,250,000. Protection plans also come with 24/7 customer support and access to roadside service, subject to additional terms, conditions, and costs described here https://support.turo.com/hc/en-us/articles/203990690-Roadside-assistance-for-guests-US-and-Canada. The purchase of a protection plan for New York trips comes with priority phone routing. Turo is not an insurance company, and the contract with Turo under the protection plan which limits your responsibility for physical damage to the host's vehicle is not insurance. When a trip is booked in the state of Washington, physical damage to the host's vehicle is covered by insurance purchased by Turo, but the Turo insurance does not change the contractual responsibilities of hosts or guests with respect to physical damage to a host's vehicle. For questions or information about the third party liability insurance that is included in the protection plans, consumers in Maryland and the licensed states listed at https://turo.com/us/en/policies/additional-policies#insurance-license-disclosures may contact Turo Insurance Agency at (415) 508-0283 / claims@turo.agency. For questions about your responsibility for damage to your host's vehicle during a trip, visit https://support.turo.com.

      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

export default function QuestionMark() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button id="questionMark" variant="primary" onClick={() => setModalShow(true)}>
        <SlQuestion/>
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}