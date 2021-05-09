export const CONFIG = {
  APP_NAME: `Foleon Assessment`,
  API: {
    BASE_URL: process.env.REACT_APP_API_BASE_URL,
    ENDPOINTS: {
      PROJECT: {
        get: `/v2/magazine/title/`,
      },
      // PROJECTS: {
      //   ALL
      // }
    },
  },
};
