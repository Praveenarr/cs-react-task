import React, { useState } from "react";

const schemaOptions = [
  { label: "First Name", value: "first_name" },
  { label: "Last Name", value: "last_name" },
  { label: "Gender", value: "gender" },
  { label: "Age", value: "age" },
  { label: "Account Name", value: "account_name" },
  { label: "City", value: "city" },
  { label: "State", value: "state" },
];

const Popup = ({ onSave }) => {
  const [segmentName, setSegmentName] = useState("");
  const [selectedSchemas, setSelectedSchemas] = useState([]);

  const addSchema = () => {
    setSelectedSchemas([...selectedSchemas, ""]);
  };

  const handleSchemaChange = (index, value) => {
    const updatedSchemas = [...selectedSchemas];
    updatedSchemas[index] = value;
    setSelectedSchemas(updatedSchemas);
  };

  const removeSchema = (index) => {
    const updatedSchemas = [...selectedSchemas];
    updatedSchemas.splice(index, 1);
    setSelectedSchemas(updatedSchemas);
  };

  // const saveSegment = () => {
  //   onSave({ segmentName, selectedSchemas });
  //   setSegmentName("");
  //   setSelectedSchemas([]);
  // };

  return (
    <div className="popup">
      <h2 c className="title">
        Enter The Name Of The Segment
      </h2>
      <div className="segmentinput">
        <input
          type="text"
          placeholder="Segment Name"
          value={segmentName}
          onChange={(e) => setSegmentName(e.target.value)}
        />
      </div>

      <p>To Save your segment,you need to add the schemas to build</p>
      <div className="bluebox">
        <div className="schema-dropdown">
          <select>
            <option value="" disabled hidden>
              First Name
            </option>
            {schemaOptions.map((option, Index) => (
              <option key={Index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <button className="remove">
            <i class="fa-solid fa-minus"></i>
          </button>
        </div>
        <div className="schema-dropdown">
          <select>
            <option value="">Last Name</option>
            {schemaOptions.map((option, Index) => (
              <option key={Index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <button className="remove">
            {" "}
            <i class="fa-solid fa-minus"></i>
          </button>
        </div>
        {selectedSchemas.map((schema, index) => (
          <div key={index} className="schema-dropdown">
            <select
              value={schema}
              onChange={(e) => handleSchemaChange(index, e.target.value)}
            >
              <option value="" disabled hidden>
                Add schema to segment
              </option>
              {schemaOptions.map((option, Index) => (
                <option key={Index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <button className="remove" onClick={() => removeSchema(index)}>
              {" "}
              <i class="fa-solid fa-minus"></i>
            </button>
          </div>
        ))}
      </div>

      <div className="new_segment">
        <select>
          <option value="">Add Schema to segment</option>
          {schemaOptions.map((option, optionIndex) => (
            <option key={optionIndex} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <button className="remove">
          <i class="fa-solid fa-minus"></i>
        </button>
      </div>
      <a className="anchor" onClick={addSchema}>
        + Add new schema
      </a>
      {/* <button onClick={saveSegment}>Save Segment</button> */}
    </div>
  );
};

const SegmentPage = () => {
  const handleSave = (data) => {
    // Send data to server in the desired format
    console.log(data);
  };

  return <Popup onSave={handleSave} />;
};

export default SegmentPage;
