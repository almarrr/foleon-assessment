export interface IAccount {}

export interface IAuthenticate {
  client_id: string;
  client_secret: string;
}

export interface IFilter {
  field: string;
  type:
    | "eq"
    | "neq"
    | "lt"
    | "lte"
    | "gt"
    | "gte"
    | "isnull"
    | "isnotnull"
    | "like";
  value: string;
}

export interface IOrderBy {
  field: "name" | "category";
  type: "field";
  direction: "ASC" | "DESC";
}

export interface IParams {
  page: number;
  limit: number;
  query?: undefined | IFilter[];
  "order-by": IOrderBy[];
}

export interface IProject {
  id: number;
  name: string;
  identifier: string;
  created_on: string;
  modified_on: string;
  image: string;
}

export interface IPublication {
  id: string;
  name: string;
  identifier: string;
  status: string;
  category: string;
  created_on: string;
  modified_on: string;
  published_on: null | string;
}
