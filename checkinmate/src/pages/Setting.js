import React from "react";

function Setting() {
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
          <form>
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
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="geohash" className="col-3 col-form-label">
                Geohash
              </label>
              <div className="col-9">
                <input
                  id="geohash"
                  name="geohash"
                  placeholder="r1f93ckmy1v"
                  type="text"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="offset-3 col-9">
                <button name="submit" type="submit" className="btn btn-primary">
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
