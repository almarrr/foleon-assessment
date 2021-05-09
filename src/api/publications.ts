import { IParams } from "./../interfaces/interfaces";

import api from "./_api";

import qs from "qs";

const publications = {
  search: async (data: IParams) => {
    const result = await api.request({
      method: `GET`,
      endpoint: `/v2/magazine/edition?${qs.stringify(data)}`,
    });

    return result;
  },
  get: async (data: any) => {
    const result = await api.request({
      method: `GET`,
      endpoint: `/v2/magazine/edition?${qs.stringify(data)}`,
    });

    return result;
  },
};

export default publications;
