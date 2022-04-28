import "./App.css";
import Covid from "./components/Covid";
import Form from "./components/Form";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Loader from "./components/Loader";
import FormState from "./context/FormState";
import Report from "./components/Loader/Report";
import UserDetail from "./components/UserDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <FormState>
          <Routes>
            <Route
              key="Covid"
              path="/covid"
              element={
                <React.Suspense fallback={<Loader />}>
                  <Covid />
                </React.Suspense>
              }
            />

            <Route
              key="Form"
              path="/form"
              element={
                <React.Suspense fallback={<Loader />}>
                  <Form />
                </React.Suspense>
              }
            />

            <Route
              key="Report"
              path="/report"
              element={
                <React.Suspense fallback={<Loader />}>
                  <Report />
                </React.Suspense>
              }
            />
            <Route
              key="userDetails"
              path="/user"
              element={
                <React.Suspense fallback={<Loader />}>
                  <UserDetail />
                </React.Suspense>
              }
            />
            <Route key="Covid" path="*" element={<Navigate to="/covid" />} />
          </Routes>
        </FormState>
      </BrowserRouter>
    </>
  );
}

export default App;
