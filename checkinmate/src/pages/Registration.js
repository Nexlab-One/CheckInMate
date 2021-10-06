import React from "react";
import { register } from "../services/registration";

function Registration() {
  const firstRef = React.useRef();
  const lastRef = React.useRef();
  const contactRef = React.useRef();
  return (
    <section id="hero" className="d-flex align-items-center">
      <div
        className="container position-relative"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9 text-center">
            <h1>No ID? No Problem</h1>
            <h2>Manually Check in and register an ID</h2>
            <br />
          </div>
        </div>

        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        />

        <div className="form-group row">
          <label className="col-3 col-form-label">First Name</label>
          <div className="col-9">
            <input
              ref={firstRef}
              id="firstName"
              name="firstName"
              placeholder="John"
              type="text"
              className="form-control"
            />
            <span id="firstNameHelpBlock" className="form-text text-muted">
              Enter Your First Name
            </span>
            <label id="firstNameLblError" style={{ color: "red" }}></label>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-3 col-form-label">Last Name</label>
          <div className="col-9">
            <input
              ref={lastRef}
              id="lastName"
              name="lastName"
              placeholder="Smith"
              type="text"
              className="form-control"
            />
            <span id="lastNameHelpBlock" className="form-text text-muted">
              Enter Your Last Name
            </span>
            <label id="lastNameLblError" style={{ color: "red" }}></label>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-3 col-form-label">Contact Number</label>
          <div className="col-9">
            <input
              ref={contactRef}
              id="phoneNumber"
              name="phoneNumber"
              placeholder="04-xxxx-xxxx"
              type="text"
              className="form-control"
            />
            <span id="phoneNumberHelpBlock" className="form-text text-muted">
              Enter your Primary Contact Phone Number
            </span>
            <label id="numberLblError" style={{ color: "red" }}></label>
          </div>
        </div>
        {/* <div className="form-group row">
          <div className="col-3"></div>
          <div className="col-9">
            <div className="form-check form-check-inline">
              <input
                name="checkbox"
                id="checkbox_0"
                type="checkbox"
                className="form-check-input"
                value="True"
                aria-describedby="checkboxHelpBlock"
              />
              <label className="form-check-label">Register an ID</label>
            </div>
            <span id="checkboxHelpBlock" className="form-text text-muted">
              Register an ID
            </span>
          </div>
        </div> */}
        <div className="form-group row">
          <div className="offset-3 col-9">
            <button
              className="btn btn-primary"
              onClick={async () => {
                document.getElementById("numberLblError").innerHTML = "";
                document.getElementById("lastNameLblError").innerHTML = "";
                if (
                  firstRef.current.value === "" ||
                  firstRef.current.value === undefined
                ) {
                  firstRef.current.focus();
                  document.getElementById("firstNameLblError").innerHTML =
                    "Please Enter Your First Name";
                } else {
                  document.getElementById("firstNameLblError").innerHTML = "";
                  if (
                    lastRef.current.value === "" ||
                    lastRef.current.value === undefined
                  ) {
                    document.getElementById("lastNameLblError").innerHTML =
                      "Please Enter Your Last Name";
                    lastRef.current.focus();
                  } else {
                    document.getElementById("lastNameLblError").innerHTML = "";
                    if (
                      contactRef.current.value === "" ||
                      contactRef.current.value === undefined ||
                      contactRef.current.value.length === 10 ||
                      isNaN(contactRef.current.value)
                    ) {
                      document.getElementById("numberLblError").innerHTML =
                        "Enter a valid phone number";
                      contactRef.current.focus();
                    } else {
                      document.getElementById("numberLblError").innerHTML = "";
                      localStorage.setItem(
                        "id",
                        await register(
                          firstRef.current.value,
                          lastRef.current.value,
                          contactRef.current.value
                        )
                      );

                      window.open("/success");
                    }
                  }
                }
              }}
            >
              Check In
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Registration;
