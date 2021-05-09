import api from "./_api";
import qs from "qs";
import { IFilter } from "./../interfaces/interfaces";

export interface IGetProjectPublications {
  id: string;
  page: number;
  limit: number;
  category?: string;
}

const project = {
  publications: async (data: IGetProjectPublications) => {
    console.log(`publication data:`);
    console.log(data);

    const { id, page, limit, category } = data;

    const filter: any[] = [];

    const projectFilter: IFilter = {
      field: `title`,
      type: `eq`,
      value: id,
    };

    filter.push(projectFilter);

    if (category) {
      const categoryFilter: IFilter = {
        field: `category`,
        type: `eq`,
        value: category,
      };

      filter.push(categoryFilter);
    }

    const result = await api.request({
      endpoint: `/v2/magazine/edition?${qs.stringify({
        filter,
        page,
        limit,
      })}`,
      method: `GET`,
    });

    return result;
  },
};

export default project;
