import React from 'react';

interface PaginationProps {
  pageNumbers: number[];
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ pageNumbers, currentPage, setCurrentPage }) => (
  <div className="flex justify-center my-8">
    {pageNumbers.map((number) => (
      <button
        key={number}
        onClick={() => setCurrentPage(number)}
        className={`mx-1 px-3 py-1 rounded ${
          currentPage === number
            ? "bg-slate-900 text-white"
            : "bg-gray-200"
        }`}
      >
        {number}
      </button>
    ))}
  </div>
);

export default Pagination;