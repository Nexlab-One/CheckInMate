import React from "react";

function ReportCase() {
  return (
    <>
      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Report a Case</h2>
            <ol>
              <li>
                <a href="/">Home</a>
              </li>
              <li>Report a Case</li>
            </ol>
          </div>
        </div>
      </section>
      <section className="inner-page">
        <div className="container w-25 p-3">
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
                href="is-this-you.html"
                name="submit"
                type="submit"
                className="btn btn-primary"
              >
                Report
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default ReportCase;
