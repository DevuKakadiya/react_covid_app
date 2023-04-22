import React, { useEffect, useState } from "react";

const Covid = () => {

  const [data, setData] = useState([]);

  const getCovidData = async () => {
    try {
      const proxyurl = "https://cors-anywhere.herokuapp.com/"
      const url = 'https://api.covid19india.org/data.json';
      const res = await fetch(proxyurl + url);
      const data = await res.json();
      console.log(data.statewise[0]);
      setData(data.statewise[0])
    } catch(err) {
      // console.log(err);
    }
  }

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <h1>LIVE</h1>
      <h1>COVID-19 CORONAVIRUS TRACKER</h1>

      <ul>
        <li className="card">
          <div className="card__main">
            <div className="card__inner">
              <p className="card__name"><span> OUR </span> COUNTRY </p>
              <p className="card__total card">INDIA</p>
            </div>
          </div>
        </li>
      </ul>
       <ul>
        <li className="card">
          <div className="card__main">
            <div className="card__inner">
              <p className="card__name"><span> OUR </span> RECOVERED </p>
              <p className="card__total card">{data.recovered}</p>
            </div>
          </div>
        </li>
      </ul> <ul>
        <li className="card">
          <div className="card__main">
            <div className="card__inner">
              <p className="card__name"><span> OUR </span> CONFIRMED </p>
              <p className="card__total card">{data.confirmed}</p>
            </div>
          </div>
        </li>
      </ul> <ul>
        <li className="card">
          <div className="card__main">
            <div className="card__inner">
              <p className="card__name"><span> OUR </span> DEATHS </p>
              <p className="card__total card">{data.deaths}</p>
            </div>
          </div>
        </li>
      </ul> <ul>
        <li className="card">
          <div className="card__main">
            <div className="card__inner">
              <p className="card__name"><span> OUR </span> ACTIVE </p>
              <p className="card__total card">{data.active}</p>
            </div>
          </div>
        </li>
      </ul> <ul>
        <li className="card">
          <div className="card__main">
            <div className="card__inner">
              <p className="card__name"><span> OUR </span> UPDATED </p>
              <p className="card__total card">{data.lastupdatedtime}</p>
            </div>
          </div>
        </li>
      </ul>
    </>
  )
}

export default Covid
