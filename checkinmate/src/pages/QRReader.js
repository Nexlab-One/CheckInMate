import React from "react";
import QrReader from "react-qr-reader";
import { checkin } from "../services/checkin";

function QRReader() {
  const [result, setResult] = React.useState();
  const handleScan = async (data) => {
    if (data) {
      setResult(data);

      const storeID = localStorage.getItem("storeID");
      if (storeID !== "undefined" && storeID !== "") {
        const message = await checkin(data, storeID);
        console.log(message);
        if (message === "Success") {
          window.location.href = "/checkinsuccess";
        }
      }
    }
  };
  const handleError = (err) => {
    console.error(err);
  };
  return (
    <div>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "50%", marginLeft: "25%" }}
      />
      <p>{result}</p>
    </div>
  );
}

export default QRReader;
