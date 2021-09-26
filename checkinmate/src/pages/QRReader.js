import React from "react";
import QrReader from "react-qr-reader";
import { checkin } from "../services/checkin";

function QRReader() {
  const [result, setResult] = React.useState("none");
  const [scanner, setScanner] = React.useState("block");
  const handleScan = async (data) => {
    if (data) {
      const storeID = localStorage.getItem("storeID");
      if (storeID !== "undefined" && storeID !== "") {
        const message = await checkin(data, storeID);
        console.log(message);
        if (message === "Success") {
          setResult("block");
          setScanner("none");

          setTimeout(function () {
            setResult("none");
            setScanner("block");
          }, 2000);
        }
      }
    }
  };

  const handleError = (err) => {
    console.error(err);
  };
  return (
    <div>
      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Scan QR ID</h2>
            <ol>
              <li>
                <a href="/">Home</a>
              </li>
              <li>Scan QR ID</li>
            </ol>
          </div>
        </div>
      </section>
      <section className="inner-page">
        <div className="container" id="qrScanner" style={{ display: scanner }}>
          <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ width: "50%", marginLeft: "25%" }}
          />
          <div className="form-group text-center">
            <a href="/" className="btn btn-primary">
              Check in Another way
            </a>
          </div>
        </div>
        <div class="container">
          <div
            id="checkInSuccess"
            className="alert alert-success row justify-content-center text-center"
            role="alert"
            style={{ display: result }}
          >
            You have Checked in Successfully!
          </div>
        </div>
      </section>
    </div>
  );
}

export default QRReader;
