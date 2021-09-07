import React from "react";

function Registration() {
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

        <form>
          <div className="form-group row">
            <label for="firstName" className="col-3 col-form-label">
              First Name
            </label>
            <div className="col-9">
              <input
                id="firstName"
                name="firstName"
                placeholder="John"
                type="text"
                className="form-control"
                aria-describedby="firstNameHelpBlock"
              />
              <span id="firstNameHelpBlock" className="form-text text-muted">
                Enter Your First Name
              </span>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-3 col-form-label" for="lastName">
              Last Name
            </label>
            <div className="col-9">
              <input
                id="lastName"
                name="lastName"
                placeholder="Smith"
                type="text"
                className="form-control"
                aria-describedby="lastNameHelpBlock"
              />
              <span id="lastNameHelpBlock" className="form-text text-muted">
                Enter Your Last Name
              </span>
            </div>
          </div>
          <div className="form-group row">
            <label for="phoneNumber" className="col-3 col-form-label">
              Contact Number
            </label>
            <div className="col-9">
              <input
                id="phoneNumber"
                name="phoneNumber"
                placeholder="04-xxxx-xxxx"
                type="text"
                className="form-control"
                aria-describedby="phoneNumberHelpBlock"
              />
              <span id="phoneNumberHelpBlock" className="form-text text-muted">
                Enter your Primary Contact Phone Number
              </span>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-3"></div>
            <div className="col-9">
              <div className="form-check form-check-inline">
                <input
                  name="checkbox"
                  id="checkbox_0"
                  type="checkbox"
                  className="form-check-input"
                  value="True"
                  checked="checked"
                  aria-describedby="checkboxHelpBlock"
                />
                <label for="checkbox_0" className="form-check-label">
                  Register an ID
                </label>
              </div>
              <span id="checkboxHelpBlock" className="form-text text-muted">
                Register an ID
              </span>
            </div>
          </div>
          <div className="form-group row">
            <div className="offset-3 col-9">
              <button name="submit" type="submit" className="btn btn-primary">
                Check In
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Registration;
