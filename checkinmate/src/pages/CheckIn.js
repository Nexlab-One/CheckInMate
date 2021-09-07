import React from "react";

function CheckIn() {
  return (
    <>
      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Inner Page</h2>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>Inner Page</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="inner-page">
        <div className="container">
          <form>
            <div className="form-group">
              <label for="text1">Text Field</label>
              <input
                id="text1"
                name="text1"
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <button name="submit" type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default CheckIn;
