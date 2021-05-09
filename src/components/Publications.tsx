import React, { useEffect, useState } from "react";
import ReactJson from "react-json-view";
import api from "../api/_api";

const Publications = () => {
  const [publications, setPublications] = useState<null | any[]>(null);

  const getPublications = async () => {
    const result = await api.publications.get({
      page: 1,
      limit: 20,
      "order-by": [
        {
          field: "name",
          type: "field",
          direction: "ASC",
        },
      ],
    });

    console.log(result);
    setPublications(result);
  };

  useEffect(() => {
    getPublications();
  }, []);

  if (publications === null) {
    return <React.Fragment>loading publications...</React.Fragment>;
  }

  return <ReactJson src={publications} />;
};

export default Publications;
