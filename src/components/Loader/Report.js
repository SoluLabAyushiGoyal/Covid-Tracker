import React, { useContext, useState, useEffect } from "react";
import FormContext from "../../context/Context";
import { Link } from "react-router-dom";
import "./Report.css";

const Report = () => {
  const Form = useContext(FormContext);
  const [info, setInfo] = useState(" ");
  //Form.UpdateForm();
  // const data1 = Form.State;
  // const data1 = Form.State;

  // // localStorage.setItem("Obj", JSON.stringify(data1));
  const data = JSON.parse(localStorage.getItem("Obj"));
  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem("Obj")));
  }, [data]);

  console.log(data);
  console.log(data.Fever);
  console.log(data.cold);
  console.log(data.contactWithPositive);
  console.log(data.cough);
  console.log(data.everBePositive);
  console.log(data.vaccinated);
  //console.log(data.Time);
  useEffect(() => {
    if (
      data.Fever === "" &&
      data.cold === "" &&
      data.contactWithPositive === "" &&
      data.cough === "" &&
      data.everBePositive === "" &&
      data.vaccinated === ""
    ) {
      setInfo("Please take test First");
    }
    if (
      (data.Fever === "n" &&
        data.cold === "n" &&
        data.contactWithPositive === "n" &&
        data.cough === "n" &&
        data.everBePositive === "n" &&
        data.vaccinated === "y") ||
      (data.Fever === "n" &&
        data.cold === "n" &&
        data.contactWithPositive === "n" &&
        data.cough === "n" &&
        data.everBePositive === "y" &&
        data.vaccinated === "y")
    ) {
      setInfo("Congradulations!!! you are safe");
    }
    if (
      data.Fever === "n" &&
      data.cold === "n" &&
      data.contactWithPositive === "n" &&
      data.cough === "n" &&
      data.everBePositive === "n" &&
      data.vaccinated === "n"
    ) {
      setInfo(
        "Get vaccinated Soon for being safe from covid-19, other than that you are safe from covid-19"
      );
    }
    if (
      (data.Fever === "y" &&
        data.cold === "y" &&
        data.contactWithPositive === "n" &&
        data.cough === "y" &&
        data.everBePositive === "y" &&
        data.vaccinated === "n") ||
      (data.Fever === "y" &&
        data.cold === "y" &&
        data.contactWithPositive === "y" &&
        data.cough === "y" &&
        data.everBePositive === "n" &&
        data.vaccinated === "n") ||
      (data.Fever === "y" &&
        data.cold === "y" &&
        data.contactWithPositive === "n" &&
        data.cough === "y" &&
        data.everBePositive === "n" &&
        data.vaccinated === "n") ||
      (data.Fever === "n" &&
        data.cold === "n" &&
        data.contactWithPositive === "y" &&
        data.cough === "n" &&
        data.everBePositive === "n" &&
        data.vaccinated === "n") ||
      (data.Fever === "n" &&
        data.cold === "n" &&
        data.contactWithPositive === "y" &&
        data.cough === "n" &&
        data.everBePositive === "y" &&
        data.vaccinated === "n") ||
      (data.Fever === "y" &&
        data.cold === "y" &&
        data.contactWithPositive === "y" &&
        data.cough === "y" &&
        data.everBePositive === "y" &&
        data.vaccinated === "y")
    ) {
      setInfo(
        "You have higher chance to be covid positive. Please go to the nearest hospital and take COVID-19 TEST"
      );
    } else {
      setInfo(
        "You are quite safe from covid, but for being Covid FREE , please wear mask, maintain 6 feets distance, don't touch anything at public area, and if possible, avoid going outside unnecesserily"
      );
    }
  }, [data]);

  return (
    <>
      <Link to="/covid">
        <button>Home</button>
      </Link>
      <Link to="/form">
        <button>Test</button>
      </Link>
      <div className="container">
        <p style={{ color: "black" }}>{info}</p>
      </div>
      {/* <p style={{ color: "black" }}>
        Result of the test which was taken at : {data.Time}
      </p> */}
    </>
  );
};

export default Report;
