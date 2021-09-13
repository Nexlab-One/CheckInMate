import React from "react";

function Main() {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div
        className="container position-relative"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9 text-center">
            <h1>Have an ID?</h1>
            <h2>Checking in, Made easy</h2>
          </div>
        </div>

        <div className="text-center">
          <a href="/checkin" className="btn btn-get-started scrollto">
            Yes, Continue
          </a>
        </div>
        <div className="text-center">
          <a href="/register" className="btn btn-get-started scrollto">
            I don't have one
          </a>
        </div>
        <div className="text-center">
          <a href="/qrcode" className="btn-get-started scrollto">
            Check in with QR
          </a>
        </div>
      </div>
    </section>
  );
}

export default Main;
