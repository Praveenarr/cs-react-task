import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import SegmentPage from "./SegmentPage";

export default function Homepage() {
  const [topRightModal, setTopRightModal] = useState(false);
  const [segmentName, setSegmentName] = useState("");
  const [selectedSchema, setSelectedSchema] = useState("");
  const toggleOpen = () => setTopRightModal(!topRightModal);
  const handleSegmentNameChange = (e) => {
    setSegmentName(e.target.value);
  };

  const handleSchemaChange = (e) => {
    setSelectedSchema(e.target.value);
  };
  return (
    <>
      <div className="segment">
        <MDBBtn onClick={toggleOpen}>Save Segment</MDBBtn>
      </div>
      <MDBModal
        animationDirection="left"
        open={topRightModal}
        tabIndex="-1"
        setOpen={setTopRightModal}
      >
        <MDBModalDialog position="top-right" side>
          <MDBModalContent>
            <MDBModalHeader className="bg-info text-white">
              <MDBModalTitle>Saving Segment</MDBModalTitle>
              <MDBBtn
                color="none"
                className="btn-close btn-close-white"
                onClick={toggleOpen}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <div style={{ display: "none" }}>
                <input
                  type="text"
                  placeholder="Segment name"
                  value={segmentName}
                  onChange={handleSegmentNameChange}
                />

                <p>
                  To Save your segment,you need to add the schemas to build
                  query.
                </p>
                <select value={selectedSchema} onChange={handleSchemaChange}>
                  <option value="">Add schema to segment</option>
                  <option value="first_name">
                    Label: First Name, Value: first_name
                  </option>
                  <option value="last_name">
                    Label: Last Name, Value: last_name
                  </option>
                  <option value="gender">Label: Gender, Value: gender</option>
                  <option value="age">Label: Age, Value: age</option>
                  <option value="account_name">
                    Label: Account Name, Value: account_name
                  </option>
                  <option value="city">Label: City, Value: city</option>
                  <option value="state">Label: State, Value: state</option>
                </select>
                <div>
                  <a href="#">+Add new schema</a>
                </div>
              </div>
              <SegmentPage />
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="info">Save The Segment</MDBBtn>
              <MDBBtn outline color="info" onClick={toggleOpen}>
                Cancel
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
