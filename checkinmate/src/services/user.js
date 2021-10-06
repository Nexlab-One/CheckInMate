import axios from "axios";

export async function findUser(showID) {
  try {
    const { data } = await axios.put("/findUser", { showID: showID });
    console.log(data);
    data.showID = showID;
    return data;
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }
}
