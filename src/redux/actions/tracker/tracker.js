import axios from "../../../configs/axiosConfig";

const url = "https://covid19.mathdro.id/api";

//Get all Tracker Data
export const getData = () => async (dispatch) => {
   const res = await axios.get(url);

   const modifiedData = {
      confirmed: res.data.confirmed,
      recovered: res.data.recovered,
      deaths: res.data.deaths,
      lastUpdate: res.data.lastUpdate,
   };
   console.log("Get Leads", modifiedData);
   if (modifiedData) {
      dispatch({ type: "TRACKER_DATA", payload: modifiedData });
   }
   // console.log('Response',res)
   return modifiedData;
};

//Get all daily Data
// export const fetchDailyData = () => async (dispatch) => {
//    const { data } = await axios.get(`${url}/daily`);
//    console.log("Fetch Daily", data);
// };

// //Update the Tracker Data
// export const updateData = (data) => async (dispatch) => {
// 	const modifiedData = {
// 		confirmed: data.confirmed,
// 		recovered: data.recovered,
// 		deaths : data.deaths,
// 		lastUpdate: data.lastUpdate
// 	}
// 	const res = await axios.get(url);
// 	return res;
//  };
