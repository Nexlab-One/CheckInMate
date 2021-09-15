import React from "react";

function Setting() {
  const storeID = React.useRef();
  const postcode = React.useRef();
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
              <li>Settings</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="inner-page">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4">
              <div className="portfolio-info">
                <h4>Current Details:</h4>
                <ul>
                  <strong>Store ID</strong>: xxxxxx
                  <strong>Postcode</strong>: 0000
                </ul>
              </div>
            </div>
          </div>
          <br />
          <form align-items-center>
            <div className="form-group row">
              <label className="col-3 col-form-label" for="storeID">
                Store ID:
              </label>
              <div className="col-9">
                <input
                  id="storeID"
                  name="storeID"
                  type="text"
                  className="form-control"
                  required="required"
                  ref={storeID}
                />
              </div>
            </div>
            <br />
            <div className="form-group row">
              <label for="postcode" className="col-3 col-form-label">
                Postcode
              </label>
              <div className="col-9">
                <input
                  ref={postcode}
                  id="postcode"
                  name="postcode"
                  placeholder="5000"
                  type="text"
                  className="form-control"
                />
              </div>
            </div>
            <br />
            <div className="form-group row">
              <div className="offset-3 col-9">
                <button
                  name="submit"
                  type="submit"
                  className="btn btn-primary"
                  onClick={() => {
                    localStorage.setItem(
                      "storeID",
                      JSON.stringify(storeID.current.value)
                    );
                    localStorage.setItem("postcode", postcode.current.value);
                  }}
                >
                  Save Settings
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Setting;
