import axios from "axios";
export async function register(firstName, lastName, contact) {
  try {
    const { data } = await axios.post(
      `http://localhost:5000/register`,
      {
        firstName,
        lastName,
        contact,
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
          "Access-Control-Allow-Headers":
            "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
        },
      }
    );
    console.log("====================================");
    console.log(data);
    console.log("====================================");
    return data;
  } catch (ex) {
    console.log("====================================");
    console.log(ex);
    console.log("====================================");
  }
}
