import { useState } from "react";
import { Pagination } from "../../Pagination";

export const TableFactory = ({ entityInfo, extraClasses = {}, extraAttrs = {} } = {}) => {
  const [currentPage, setCurrentPage] = useState(1); // Текущая страница
  const itemsPerPage = 5; // Количество элементов на странице

  // Вычисляем общее количество страниц
  const totalPages = Math.ceil(entityInfo.length / itemsPerPage);

  // Вычисляем индекс первого и последнего элемента для текущей страницы
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Фильтруем данные для текущей страницы
  const currentData = entityInfo.slice(startIndex, endIndex);

  // Получение заголовков таблицы
  const tableNames = entityInfo.length > 0 ? Object.keys(entityInfo[0]) : [];

  return (
    <div className="tableFactory">
      <table className="tableFactory__table">
        <thead>
          <tr>
            {tableNames.map((item) => (
              <th key={item}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {tableNames.map((header) => (
                <td key={header}>{row[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage} // Текущая страница
        totalPages={totalPages}   // Общее количество страниц
        onPageChange={setCurrentPage} // Обработчик изменения страницы
      />
    </div>
  );
};