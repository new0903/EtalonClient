import { useState } from "react";
import { Pagination } from "../../Pagination";

/**
 * Компонент для генерации таблиц сущностей
 */
export const TableFactory = ({ entityInfo, extraClasses = {}, extraAttrs = {} } = {}) => {
  let products = [...entityInfo];
  let tableNames = [];
  let tableValues = [];
  
  products.map((item) => {
    tableNames = [...Object.keys(item)]
  })

  return (
    <div className="productTable">
      <table className="productTable__table">
        <thead>
          <tr>
            {
              tableNames.map((item) => (
                <th key={item}>
                  {item}
                </th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {entityInfo.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {tableNames.map((header) => (
                <td key={header}>
                  {row[header]}
                </td>
              ))}
            </tr>
          ))
          }
        </tbody>
      </table>
      <Pagination itemInfo = {entityInfo} itemsPerPage={5} />
    </div>
    
  );
}
