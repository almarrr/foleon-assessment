import api from "./_api";

const account = {
  get: async () => {
    const result = await api.request({
      endpoint: `/account`,
      method: `GET`,
    });

    return result;
  },
};
export default account;
