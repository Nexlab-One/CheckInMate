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
                      ? user.lastName.slice(0, 1) +
                        "xx" +
                        user.lastName.slice(-2) +
                        ", " +
                        user.firstName.slice(0, 1) +
                        "xx" +
                        user.firstName.slice(-2)
                      : "loading"}
                  </li>
                  <li>
                    <strong>Phone Number</strong>:{" "}
                    {user !== "undefined"
                      ? "xxxx" + user.contact.toString().slice(-4)
                      : "loading"}
                  </li>
                </ul>
                <div className="text-center">
                  <a
                    href="/checkin"
                    className="btn btn-get-started scrollto"
                    style={{ marginRight: "2vw" }}
                  >
                    No
                  </a>

                  <a
                    href={`${user.error ? "/notExist" : "/checkinsuccess"}`}
                    className="btn btn-get-started scrollto"
                  >
                    Yes, Continue
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UserDetails;
