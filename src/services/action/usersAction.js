import { users_request, get_users_success, get_users_failed } from "../Type";
import axios from "axios";


export const usersList =  () => {
    return async (dispatch) => {
      try {
        dispatch({
          type: users_request,
        });
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        dispatch({
          type: get_users_success,
          payload: res.data,
        });
      } catch (error) {
        dispatch({
          type: get_users_failed,
          payload: error.message,
        });
      }
    };
}