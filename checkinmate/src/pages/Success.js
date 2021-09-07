import React from "react";

function Success({ message = localStorage.getItem("id") }) {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div
        className="container position-relative"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Your ID is {message !== "undefined" ? message : "loading"}
      </div>
    </section>
  );
}

export default Success;
