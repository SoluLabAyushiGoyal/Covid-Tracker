import React, { useRef, useContext } from "react";
import "./Form.css";
import FormContext from "../context/Context";
import { Link } from "react-router-dom";

//const FormContext = createContext();

const Form = () => {
  const Form = useContext(FormContext);

  const feverRef = useRef();
  const coughRef = useRef();
  const coldRef = useRef();
  const contactWithPositiveRef = useRef();
  const everBePositiveRef = useRef();
  const vaccinatedRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    //const Time = new Date().toLocaleString();
    //console.log(Time);
    console.log(feverRef.current.value);
    // console.log(coughRef.current.value);
    // console.log(coldRef.current.value);
    // console.log(contactWithPositiveRef.current.value);
    // console.log(everBePositiveRef.current.value);
    // console.log(vaccinatedRef.current.value);

    const ObjForm = {
      Fever: feverRef.current.value,
      cough: coughRef.current.value,
      cold: coldRef.current.value,
      contactWithPositive: contactWithPositiveRef.current.value,
      everBePositive: everBePositiveRef.current.value,
      vaccinated: vaccinatedRef.current.value,
      //time: { Time },
    };
    localStorage.setItem("Obj", JSON.stringify(ObjForm));

    console.log(ObjForm);

    //Form.UpdateForm();
    return (Form.State = ObjForm);

    //feverRef.current.Checked;
  };

  return (
    <>
      <Link to="/covid">
        <button>Home</button>
      </Link>
      <Link to="/report">
        <button style={{ marginRight: "0px" }}>Report</button>
      </Link>
      <form>
        <div className="formSection">
          <div className="QA">
            <label>Are you suffering from Fever?(y/n)</label>
            <br />
            <div className="inputArea">
              <input type="text" ref={feverRef} />
              <br />
            </div>
          </div>
          <div className="QA">
            <label>Are you feeling Cough?(y/n)</label>
            <br />
            <div className="inputArea">
              <input type="text" ref={coughRef} />
              <br />
              <br />
            </div>
          </div>
          <div className="QA">
            <label>Are you suffering from Cold?(y/n)</label>
            <br />
            <div className="inputArea">
              <input type="text" ref={coldRef} />
              <br />
              <br />
            </div>
          </div>
          <div className="QA">
            <label>
              Do you came in contact with covid positive person in last 4
              days?(y/n)
            </label>
            <div className="inputArea">
              <input type="text" ref={contactWithPositiveRef} />
              <br />
              <br />
            </div>
          </div>
          <div className="QA">
            <label>Have you ever be covid positive?(y/n)</label>
            <br />
            <div className="inputArea">
              <input type="text" ref={everBePositiveRef} />
              <br />
              <br />
            </div>
          </div>
          <div className="QA">
            <label>Are you complete vaccinated?(y/n)</label>
            <br />
            <div className="inputArea">
              <input type="text" ref={vaccinatedRef} />
              <br />
              <br />
            </div>
          </div>
        </div>

        <button className="formBtn" onClick={(event) => handleSubmit(event)}>
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
//export { FormContext };
