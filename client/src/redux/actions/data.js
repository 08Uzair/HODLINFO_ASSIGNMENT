import * as api from "../api";
import { FETCH_DATA } from "../constants/actionType";

export const getData = () => async (dispatch) => {
  try {
    const { data } = await api.fetchData();
    dispatch({ type: FETCH_DATA, payload: data });
  } catch (error) {
    console.log(error); 
  }
};
