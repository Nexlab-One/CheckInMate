import React from "react";

function TraceStoreInfo() {
    function getStats() {
      let userStats = document.getElementById("storeData");
      let userSearch = document.getElementById("searchForm");
      if (userStats.hidden == false) {
        userStats.hidden = true;
        userSearch.hidden = false;
      } else {
        userStats.hidden = false;
        userSearch.hidden = true;
      }
    }
  return (
    <>
      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Store CheckIns</h2>
            <ol>
              <li>
                <a href="/">Home</a>
              </li>
              <li>Settings</li>
              <li>CheckIn Contact Tracing</li>
              <li>Store CheckIn Statistics</li>
            </ol>
          </div>
        </div>
      </section>
      <section className="inner-page">
        <div id="searchForm" className="container w-25 p-3">
          <form>
            <div className="form-group text-center">
              <h2>Store ID:</h2>
              <label for="text1"></label>
              <input id="text1" name="text1" type="text" className="form-control" />
            </div>
            <br />
            <div className="form-group text-center">
              <button
                href="#"
                name="submit"
                type="button"
                className="btn btn-primary"
                onClick={()=>{getStats()}}
              >
                Get Store Statistics
              </button>
            </div>
          </form>
        </div>
        <div id="storeData" className="portfolio-info container w-25 p-3" hidden>
          <h3>Store Statistics:</h3>
          <ul>
            <li>
              <strong>Total Checkins Today</strong>: 0
            </li>
            <li>
              <strong>Active Checkins</strong>: 0
            </li>
            <li>
              <strong>Store Capacity</strong>: 0
            </li>
          </ul>
          <h5>Checkin History:</h5>
          <p>User ID | Checkin Date and Time</p>
          <ul>
            <li>
              <strong>User ID</strong>: DateTime
            </li>
          </ul>
          <div className="form-group text-center">
            <button
              href="#"
              name="submit"
              type="button"
              className="btn btn-primary"
              onClick={()=>{getStats()}}
            >
              Change Store
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default TraceStoreInfo;
