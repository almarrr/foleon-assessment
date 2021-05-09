import api from "./_api";

test("api keys present", () => {
  expect(typeof process.env.REACT_APP_CLIENT_ID).toBe("string");
  expect(typeof process.env.REACT_APP_CLIENT_SECRET).toBe("string");
});

test("get bearer token from api", async () => {
  const res = await api.authentication.getBearertoken();

  expect(typeof res).toBe("string");
});
