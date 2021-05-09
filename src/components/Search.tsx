import React, { useEffect, useState } from "react";

import api from "../api/_api";
import { IParams, IPublication } from "../interfaces/interfaces";
import Input from "./General/Input";

import { useDebounce } from "use-debounce";
import Flex from "./General/Flex";

import SearchResultItem from "./SearchResultItem";
import Spinner from "./General/Spinner";
import styled from "styled-components";

const SpinnerWrapper = styled.div`
  transition: opacity 0.2s ease-in-out;
`;

const Search = () => {
  const initialSearch: string = ``;

  const [term, setTerm] = useState<string>(initialSearch);

  const [results, setResults] = useState<null | any[]>(null);

  const [debouncedTerm] = useDebounce<string>(term, 500);

  const [searching, setSearching] = useState<boolean>(false);

  useEffect(() => {
    debouncedTerm.length > 2 && getResults();
  }, [debouncedTerm]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.currentTarget.value);
  };

  const getResults = async () => {
    setSearching(true);

    const reqParams: IParams = {
      page: 1,
      limit: 20,

      query: [
        {
          field: "name",
          type: "like",
          value: `%${debouncedTerm}%`,
        },
      ],
      "order-by": [
        {
          field: "name",
          type: "field",
          direction: "ASC",
        },
      ],
    };

    const result = await api.publications.search(reqParams);

    setTimeout(() => {
      setSearching(false);
    }, 500);

    setResults(result["_embedded"]["edition"]);
  };

  return (
    <React.Fragment>
      <div className="relative">
        <SpinnerWrapper
          className="absolute right-0 top-0"
          style={{
            transform: `translate(-20px, 15px)`,
            opacity: searching ? 1 : 0,
          }}
        >
          <Spinner
            color="var(--primary)"
            height={20}
            width={20}
            strokewidth={6}
          />
        </SpinnerWrapper>

        <Input
          title="search"
          placeholder="Search..."
          style={{
            borderRadius: 100,
            height: 50,
            width: `100%`,
          }}
          className="rounded-full pl-12 w-full flex items-center justify-start"
          onChange={handleSearch}
          value={term}
        />
        {results !== null && term.length > 3 && (
          <div
            className="absolute top-0-left-0 bg-white shadow-theme w-full overflow-y-auto overflow-hidden rounded-lg"
            style={{ maxHeight: 400 }}
          >
            {results.map((result: IPublication) => {
              return <SearchResultItem key={result.id} {...result} />;
            })}
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Search;
