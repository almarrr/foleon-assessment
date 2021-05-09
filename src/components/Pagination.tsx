import React from "react";
import ReactPaginate from "react-paginate";
import Flex from "./General/Flex";

interface IProps {
  activePage: number;
  recordsPerPage: number;
  totalPages: number;
  render: (e: any) => void;
}

const Pagination: React.FC<IProps> = (props) => {
  const { totalPages, render } = props;

  if (totalPages < 2) {
    return <></>;
  }
  return (
    <>
      <Flex className="mb-12 justify-end">
        <div>Navigate: </div>
        <Flex className="justify-end items-center"></Flex>
        <ReactPaginate
          previousLabel={false}
          nextLabel={false}
          containerClassName="pagination flex justify-start items-center space-x-10"
          onPageChange={render}
          pageCount={totalPages}
          marginPagesDisplayed={1}
          pageRangeDisplayed={4}
        />
      </Flex>
    </>
  );
};

export default Pagination;
