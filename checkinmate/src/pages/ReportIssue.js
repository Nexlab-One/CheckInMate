import React from "react";

function ReportIssue() {
  return (
    <>
      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Report an issue</h2>
            <ol>
              <li>
                <a href="/">Home</a>
              </li>
              <li>Report an issue</li>
            </ol>
          </div>
        </div>
      </section>
      <section className="inner-page">
        <div className="container">
          <form>
            <div className="form-group row">
              <label for="email" className="col-3 col-form-label">
                Email
              </label>
              <div className="col-9">
                <input
                  id="email"
                  name="email"
                  placeholder="example@email.com"
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelpBlock"
                />
                <span id="emailHelpBlock" className="form-text text-muted">
                  Enter a contact email if necessary
                </span>
              </div>
            </div>
            <br />
            <div className="form-group row">
              <label for="textarea" className="col-3 co l-form-label">
                Issue Details
              </label>
              <div className="col-9">
                <textarea
                  id="textarea"
                  name="textarea"
                  cols="40"
                  rows="5"
                  className="form-control"
                  required="required"
                  aria-describedby="textareaHelpBlock"
                ></textarea>
                <span id="textareaHelpBlock" className="form-text text-muted">
                  Describe any problems and issues found.
                </span>
              </div>
            </div>
            <div className="form-group row">
              <div className="offset-3 col-9">
                <button name="submit" type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default ReportIssue;
