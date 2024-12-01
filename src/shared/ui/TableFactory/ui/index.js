import { useEffect, useState } from "react";
import { Pagination } from "../../Pagination";
import { EditIcon } from "../../Icons/EditIcon";
import { DeleteIcon } from "../../Icons";

/**
 * 
 * @param {Object} entityInfo - информация о переданной сущности
 * @param {String} entityType - тип передаваемой сущности (category, product)
 * @returns 
 */
export const TableFactory = ({ entityInfo, entityType, extraClasses = {}, extraAttrs = {} } = {}) => {
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

  /**
   * Сохраняем ID выбранного товара
   */
  const [choosenItemId, setChoosenItemId] = useState(-1);
  useEffect(() => {
    console.debug(choosenItemId);
  }, [choosenItemId])

  const handleSetChoosenItemId = (e) => {
    setChoosenItemId(e.currentTarget.closest('tr').getAttribute('data-js-itemId'))
  }

  return (
    <div className="tableFactory">
      <table className="tableFactory__table">
        <thead className="tableFactory__table__header">
          <tr className="tableFactory__table__header__row">
            {tableNames.map((item) => (
              <th key={item}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody className="tableFactory__table__body">
          {currentData.map((row, rowIndex) => {
            return (
              <tr className="tableFactory__table__body__row" data-js-itemId={row.id} key={rowIndex}>
                {tableNames.map((header) => (
                  <td key={header}>{row[header]}</td>
                ))}
                <div className="tableFactory__table__body__row__controls">
                  <div
                    onClick={(e) => {
                      handleSetChoosenItemId(e);
                    }}
                    className="tableFactory__table__body__row__controlButton"
                  >
                    <a href={"/edit" + entityType}>
                      {EditIcon({ iconColor: "var(--colorJet)" })}
                    </a>
                  </div>
                  <div 
                    onClick={(e) => {
                      handleSetChoosenItemId(e);
                    }}
                    className="tableFactory__table__body__row__controlButton"
                  >
                    {DeleteIcon({ iconColor: "var(--colorJet)" })}
                  </div>
                </div>
              </tr>
            )
          })}
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