import React from "react";
import { findUser } from "../services/user";
import { FormControl } from "react-bootstrap";

function CheckIn({ message = localStorage.getItem("id") }) {
  const showID = React.useRef();

  const [content, setContent] = React.useState(
    message !== "undefined" && message
  );
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

      <section className="inner-page">
        <div className="container">
          <div className="form-group text-center justify-content-center">
            <label style={{ fontSize: "5vh" }}>User ID</label>

            <br />

            <br />

            <FormControl
              ref={showID}
              type="text"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
              style={{ width: "30%", marginLeft: "auto", marginRight: "auto" }}
            ></FormControl>
          </div>
          <br />
          <div className="form-group text-center">
            <button
              className="btn btn-primary"
              onClick={async () => {
                if (
                  showID.current.value !== undefined &&
                  showID.current.value !== ""
                ) {
                  const user = await findUser(showID.current.value);
                  if (user !== "") {
                    localStorage.setItem("user", JSON.stringify(user));
                    window.open("/userDetail");

                    if (user.error) {
                      localStorage.setItem(
                        "error",
                        `This user ID ${showID.current.value} does nor exist`
                      );
                    }
                  }
                } else {
                  showID.current.focus();
                }
              }}
            >
              Proceed
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default CheckIn;
