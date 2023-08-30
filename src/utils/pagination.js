const paginateData = (elements, currentPage) => {
  const ELEMENTS_PER_PAGE = 24;

  const sliceEnd = currentPage * ELEMENTS_PER_PAGE;
  const sliceStart = sliceEnd - ELEMENTS_PER_PAGE;
  const elementsInCurrentPage = elements.slice(sliceStart, sliceEnd);

  const lastPage = Math.ceil(elements.length / ELEMENTS_PER_PAGE);

  const PAGES_PER_BLOCK = 5;
  const actualBlock = Math.ceil(currentPage / PAGES_PER_BLOCK);

  const pagesInCurrentBlock = []
  const maxPage = actualBlock * PAGES_PER_BLOCK
  const minPage = (maxPage - PAGES_PER_BLOCK) +1

  for(let i = minPage; i <= maxPage; i++){
    if(i <= lastPage){
    pagesInCurrentBlock.push(i)
  }
}
return{
    elementsInCurrentPage,
    lastPage,
    pagesInCurrentBlock,
}

};

export { paginateData };
