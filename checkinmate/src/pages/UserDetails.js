import React from "react";

function UserDetails({ user = JSON.parse(localStorage.getItem("user")) }) {
  return (
    <>
      {user !== "undefined" ? user.contact : "loading"}
      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Is this you?</h2>
            <ol>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/checkin">Enter Your ID</a>
              </li>
              <li>Is this you?</li>
            </ol>
          </div>
        </div>
      </section>
      <section
        id="portfolio-details"
        className="portfolio-details d-flex align-items-center"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4">
              <div className="portfolio-info">
                <h3>Is this You?</h3>
                <p>Verify that we have found you</p>
                <ul>
                  <li>
                    <strong>User ID</strong>:{" "}
                    {user !== "undefined" ? user.showID : "loading"}
                  </li>
                  <li>
                    <strong>Name</strong>:{" "}
                    {user !== "undefined"
                      ? user.lastName + ", " + user.firstName
                      : "loading"}
                  </li>
                  <li>
                    <strong>Phone Number date</strong>:{" "}
                    {user !== "undefined" ? user.contact : "loading"}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a href="/checkin" className="btn btn-get-started scrollto">
              Yes, Continue
            </a>
          </div>
          <div className="text-center">
            <a href="/checkin" className="btn btn-get-started scrollto">
              No
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default UserDetails;
