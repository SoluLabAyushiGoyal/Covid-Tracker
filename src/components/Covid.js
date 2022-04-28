import { useEffect, useState, useMemo } from "react";
import React from "react";
import "./covid.css";
import { Link } from "react-router-dom";

function Covid() {
  const [data, setData] = useState([]);
  const getCovidData = useMemo(async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      const actualData = await res.json();
      console.log(actualData.statewise[0]);
      setData(actualData.statewise[0]);
    } catch (err) {
      console.log(err);
    }

    //as we all know this fetch returns promise, that the request will fullfilled or not in future,that's why we are using await
  }, []);

  useEffect(() => {
    getCovidData;
  }, []);

  return (
    <>
      {/* <Link to="/user">
        <button style={{ marginRight: "0px" }}>User</button>
      </Link> */}
      <section className="covidSection">
        <h1 className="covidHeading">LIVE</h1>
        <h2 className="covidHeading">COVID-19 CORONA VIRUS TRACKER</h2>
        <ul>
          <li className="card">
            <div className="card__main">
              <div className="card__inner">
                <p className="card__name">
                  <span>OUR</span>COUNTRY
                </p>
                <p className="card__total">INDIA</p>
              </div>
            </div>
          </li>
          <li className="card">
            <div
              className="card__main"
              style={{ backgroundColor: "rgb(180,0,0)" }}
            >
              <div className="card__inner">
                <p className="card__name">
                  <span>TOTAL</span>RECOVERD
                </p>
                <p className="card__total">{data.recovered}</p>
              </div>
            </div>
          </li>
          <li className="card">
            <div
              className="card__main"
              style={{ backgroundColor: "rgb(0,128,0)" }}
            >
              <div className="card__inner">
                <p className="card__name">
                  <span>TOTAL</span>CONFIRMED
                </p>
                <p className="card__total">{data.confirmed}</p>
              </div>
            </div>
          </li>
          <li className="card">
            <div
              className="card__main"
              style={{ backgroundColor: "rgb(225,0,225)" }}
            >
              <div className="card__inner">
                <p className="card__name">
                  <span>TOTAL</span>DEATHS
                </p>
                <p className="card__total">{data.deaths}</p>
              </div>
            </div>
          </li>
          <li className="card">
            <div
              className="card__main"
              style={{ backgroundColor: "rgb(0,128,128)" }}
            >
              <div className="card__inner">
                <p className="card__name">
                  <span>TOTAL</span>ACTIVE
                </p>
                <p className="card__total">{data.active}</p>
              </div>
            </div>
          </li>
          <li className="card">
            <div
              className="card__main"
              style={{ backgroundColor: "rgb(128,128,0)" }}
            >
              <div className="card__inner">
                <p className="card__name">
                  <span>LAST</span>UPDATED
                </p>
                <p className="card__total">{data.lastupdatedtime}</p>
              </div>
            </div>
          </li>
        </ul>
        <div className="floatStyle">
          <p style={{ color: "black" }} className="float">
            Want to take a covid test?
          </p>
          <Link to="/form">
            <button className="float"> Take Test</button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Covid;
