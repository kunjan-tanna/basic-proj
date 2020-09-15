export const initialState = {
   isSuccess: false,
   trackerData: [],
};

//To Store the Actions
const global = (state = initialState, action) => {
   switch (action.type) {
      case "SUCCESS":
         return {
            ...state,
            isSuccess: true,
         };
      case "FAIL":
         return {
            ...state,
            isSuccess: false,
         };
      case "TRACKER_DATA":
         return Object.assign({}, state, { trackerData: action.payload });

      default:
         return state;
   }
};
export default global;
