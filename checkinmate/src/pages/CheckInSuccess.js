import React from "react";

function CheckInSuccess() {
  setTimeout(function () {
    window.location.href = "/";
  }, 5000);
  return (
    <>
      <section id="hero" className="d-flex align-items-center">
        <div
          className="container position-relative"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9 text-center">
              <h1>Success!</h1>
              <h2>You have successfully checked in!</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CheckInSuccess;
