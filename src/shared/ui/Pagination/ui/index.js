import { useState } from "react";

export const Pagination = (props) => {
  const { itemInfo, itemsPerPage } = props;

  const [currentPage, setCurrentPage] = useState(1);
  // Вычисляем общее количество страниц
  const totalPages = Math.ceil(itemInfo.length / itemsPerPage);

  // Вычисляем индекс первого и последнего продукта для текущей страницы
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Фильтруем продукты для текущей страницы
  const currentProducts = itemInfo.slice(startIndex, endIndex);

  // Функции для перехода между страницами
  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="productTable__pagination">
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
}