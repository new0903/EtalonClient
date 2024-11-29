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
      <button onClick={goToPrevPage} disabled={currentPage === 1}>
        Назад
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => goToPage(index + 1)}
          style={{
            backgroundColor: currentPage === index + 1 ? "#ddd" : "#fff",
          }}
        >
          {index + 1}
        </button>
      ))}
      <button onClick={goToNextPage} disabled={currentPage === totalPages}>
        Вперед
      </button>
    </div>
  );
};