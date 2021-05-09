import axios from "axios";
import { CONFIG } from "../config/config";

interface ITokenresult {
  access_token: string;
  expires_in: number;
  token_type: string;
}

const authentication = {
  getBearertoken: async (): Promise<string> => {
    try {
      const apiresult = await axios.post(`${CONFIG.API.BASE_URL}/oauth`, {
        grant_type: `client_credentials`,
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_CLIENT_SECRET,
      });

      const result: ITokenresult = apiresult.data;

      return result.access_token;
    } catch {
      throw new Error("Token request error...");
    }
  },
};

export default authentication;
