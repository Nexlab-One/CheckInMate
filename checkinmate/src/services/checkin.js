import axios from "axios";

export async function checkin(userID, storeID) {
  try {
    const { data } = await axios.put("/checkinlocation", {
      userID: userID,
      storeID: storeID,
    });
    return data;
  } catch (error) {
    console.error(error);
  }
}
