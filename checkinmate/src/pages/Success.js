import React from "react";

function Success({ message = localStorage.getItem("id") }) {
  setTimeout(function () {
    window.location.href = "/";
  }, 5000);
  return (
    <section id="hero" className="d-flex align-items-center">
      <div
        className="container position-relative"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9 text-center">
            <h1>Your ID is {message !== "undefined" ? message : "loading"}</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Success;
