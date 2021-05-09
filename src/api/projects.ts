import { IParams } from "../interfaces/interfaces";
import api from "./_api";
import qs from "qs";

const projects = {
  all: async (data: IParams) => {
    const endpoint = `/v2/magazine/title?${qs.stringify(data)}`;
    const method = `GET`;

    const result = await api.request({
      method,
      endpoint,
    });

    return result;
  },
};

export default projects;
