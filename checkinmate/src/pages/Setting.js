import React from "react";
import { registerStore } from "../services/store";

function Setting() {
  const storeID = React.useRef();
  const postcode = React.useRef();
  const [store, setStore] = React.useState(null);
  const [postcodeID, setPostcode] = React.useState(null);
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
                  <strong>Store ID</strong>: {store ? store : "xxxxxx"}
                  <strong>Postcode</strong>: {postcodeID ? postcodeID : "0000"}
                </ul>
              </div>
            </div>
          </div>
          <br />
          <div className="align-items-center">
            <div className="form-group row">
              <label className="col-3 col-form-label" for="storeID">
                Store Name:
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
                  className="btn btn-primary"
                  onClick={async () => {
                    if (
                      storeID.current.value !== "" &&
                      postcode.current.value !== ""
                    ) {
                      const id = await registerStore(
                        storeID.current.value,
                        postcode.current.value
                      );
                      console.log("id: " + id);
                      setStore(id);
                      localStorage.setItem("storeID", JSON.stringify(id));
                      localStorage.setItem("postcode", postcode.current.value);
                      setPostcode(postcode.current.value);
                      // window.location.href = "/";
                    }
                  }}
                >
                  Save Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Setting;
