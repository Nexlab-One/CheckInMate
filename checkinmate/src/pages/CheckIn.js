import React from "react";

function CheckIn({ message = localStorage.getItem("id") }) {
  return (
    <>
      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Enter User ID</h2>
            <ol>
              <li>
                <a href="/">Home</a>
              </li>
              <li>Enter User ID</li>
            </ol>
          </div>
        </div>
      </section>

      <section class="inner-page">
        <div class="container">
          <form>
            <div class="form-group">
              <label>User ID</label>

              <input
                type="text"
                className="form-control"
                value={message !== "undefined" && message}
              />
            </div>
            <br />
            <div className="form-group">
              <button className="btn btn-primary">Proceed</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default CheckIn;
