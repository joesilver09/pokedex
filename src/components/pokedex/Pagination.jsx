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
      {currentPage >= 2 && <li onClick={handleFirstPage}><i className='bx bxs-chevrons-left text-xl'></i></li>}
      {currentPage >= 2 &&<li onClick={handlePreviousPage}><i className='bx bxs-chevron-left text-xl'></i></li>}
      {pagesInCurrentBlock.map((page) => (
        <li
          className={` border w-7 h-7 text-center border-black/20 font-medium rounded  ${
            currentPage === page ? "rounded border-[#D93F3F] text-white bg-[#D93F3F] " : ""
          }`}
          key={page}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </li>
      ))}

{currentPage <= (lastPage -1) &&<li onClick={handleNextPage}><i className='bx bxs-chevron-right text-xl'></i></li>}
{currentPage <= (lastPage -1) &&<li onClick={handleLastPage}><i className='bx bxs-chevrons-right text-xl'></i></li>}
    </ul>
  );
};
export default Pagination;
