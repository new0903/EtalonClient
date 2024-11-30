export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Функции для перехода между страницами
  const goToNextPage = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const goToPage = (page) => {
    onPageChange(page);
  };

  return (
    <div className="tableFactory__pagination">
      <button 
        className="tableFactory__pagination__toggleButton" 
        onClick={goToPrevPage} 
        disabled={currentPage === 1}
      >
        Назад
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          className="tableFactory__pagination__pageNumber"
          key={index + 1}
          onClick={() => goToPage(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button 
        className="tableFactory__pagination__toggleButton" 
        onClick={goToNextPage} 
        disabled={currentPage === totalPages}
      >
        Вперед
      </button>
    </div>
  );
};