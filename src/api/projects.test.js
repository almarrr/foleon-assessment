import api from "./_api";

test("get all projects", async () => {
  const projects = await api.projects.all();

  expect(projects).toHaveProperty("_embedded");
});
