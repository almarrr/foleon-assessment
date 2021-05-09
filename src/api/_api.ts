import authentication from "./authentication";
import request from "./_request";
import projects from "./projects";

import account from "./account";

import publications from "./publications";
import publication from "./publication";

import project from "./project";

const api = {
  request,
  account,
  authentication,
  projects,
  project,
  publication,
  publications,
};

export default api;
