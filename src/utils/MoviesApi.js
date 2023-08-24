import { MOVIES_API_IMG } from "../utils/constants";
import { checkResponse } from "../utils/checkResponse";

export const getMovies = () => {
      return fetch(`${MOVIES_API_IMG}`, { 
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify()
      })
      .then((res) => checkResponse(res));
    };