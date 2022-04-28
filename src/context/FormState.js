import { createContext } from "react";
import FormContext from "./Context";

const FormState = (props) => {
  const State = {};

  //   const UpdateForm = (obj) => {
  //     //return console.log("value");
  //   };
  return (
    <FormContext.Provider value={State}>{props.children}</FormContext.Provider>
  );
};

export default FormState;
