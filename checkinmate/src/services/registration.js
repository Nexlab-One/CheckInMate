import axios from "axios";
export async function register(firstName, lastName, contact) {
  try {
    const { data } = await axios.post(`/register`, {
      firstName,
      lastName,
      contact,
    });
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
