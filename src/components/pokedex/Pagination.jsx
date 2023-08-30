const Pagination = ({
  lastPage,
  pagesInCurrentBlock,
  setCurrentPage,
  currentPage,
}) => {
  const handleNextPage = () => {
    setCurrentPage((prevState) => {
      const nextPage = prevState + 1;
      if (nextPage <= lastPage) return nextPage;
      return prevState;
    });
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevState) => {
      const previousPage = prevState - 1;
      if (previousPage >= 1) return previousPage;
      return prevState;
    });
  };
  const handleLastPage = () => setCurrentPage(lastPage);
  const handleFirstPage = () => setCurrentPage(1);
  return (
    <ul className="flex justify-center gap-2 p-4">
      {currentPage >= 2 && <li onClick={handleFirstPage}>{"<<"}</li>}
      {currentPage >= 2 &&<li onClick={handlePreviousPage}>{"<"}</li>}
      {pagesInCurrentBlock.map((page) => (
        <li
          className={`p-2 ${
            currentPage === page ? "text-white bg-slate-500" : ""
          }`}
          key={page}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </li>
      ))}

{currentPage <= (lastPage -1) &&<li onClick={handleNextPage}>{">"}</li>}
{currentPage <= (lastPage -1) &&<li onClick={handleLastPage}>{">>"}</li>}
    </ul>
  );
};
export default Pagination;
