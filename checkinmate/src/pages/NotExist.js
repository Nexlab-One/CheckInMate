import React from "react";

function NotExist({ message = localStorage.getItem("error") }) {
  setTimeout(function () {
    window.location.href = "/checkin";
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
              <h1>Error!</h1>
              <h2>Error: {message}</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NotExist;
