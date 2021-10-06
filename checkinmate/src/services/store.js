import axios from "axios";

export async function registerStore(storeName, location) {
  try {
    const { data } = await axios.post(`/registerStore`, {
      storeName,
      location,
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
