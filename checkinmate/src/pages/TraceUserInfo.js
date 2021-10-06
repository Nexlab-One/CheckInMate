import React from "react";

function TraceUserInfo() {
  function traceUser() {
    let userStats = document.getElementById("userData");
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
            <h2>Trace CheckIns</h2>
            <ol>
              <li>
                <a href="/">Home</a>
              </li>
              <li>Settings</li>
              <li>CheckIn Contact Tracing</li>
              <li>User CheckIn History</li>
            </ol>
          </div>
        </div>
      </section>
      <section className="inner-page">
        <div id="searchForm" className="container w-25 p-3">
          <form>
            <div className="form-group text-center">
              <h2>User ID:</h2>
              <label for="text1"></label>
              <input
                id="text1"
                name="text1"
                type="text"
                className="form-control"
              />
            </div>
            <br />
            <div className="form-group text-center">
              <button
                href="#"
                name="submit"
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  traceUser();
                }}
              >
                Trace
              </button>
            </div>
          </form>
        </div>
        <div id="userData" className="portfolio-info container w-25 p-3" hidden>
          <h3>User Stats:</h3>
          <p>Total User Checkins:</p>
          <ul>
            <li>
              <strong>User ID</strong>: T357UZ3R
            </li>
            <li>
              <strong>Name</strong>: John Smith
            </li>
            <li>
              <strong>Phone Number</strong>: 0412345678
            </li>
            <li>
              <strong>Total Checkins</strong>: 0
            </li>
          </ul>
          <h5>Checkin History:</h5>
          <p>Location | Checkin Date and Time</p>
          <ul>
            <li>
              <strong>Location ID</strong>: DateTime
            </li>
          </ul>
          <div className="form-group text-center">
            <button
              href="#"
              name="submit"
              type="button"
              className="btn btn-primary"
              onClick={() => {
                traceUser();
              }}
            >
              Trace Another User
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default TraceUserInfo;
