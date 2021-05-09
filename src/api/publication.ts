import api from "./_api";

const publication = {
  get: async (data: { id: string }) => {
    const { id } = data;
    const result = await api.request({
      method: `GET`,
      endpoint: `/v2/magazine/edition/${id}`,
    });

    return result;
  },
};

export default publication;
