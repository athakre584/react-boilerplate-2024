import PropTypes from "prop-types";
import React, { useState } from "react";

import styles from "./simpletable.module.scss";

const SimpleTable = ({
  columns,
  initialData,
  onRowClick,
  actions,
  className,
}) => {
  const [data, setData] = useState(initialData);
  const [selectedRows, setSelectedRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingRow, setEditingRow] = useState(null);
  const [newRow, setNewRow] = useState({});
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  // Filter rows based on search term
  const filteredData = data.filter((row) => {
    return columns.some((column) => {
      return row[column.key]
        ?.toString()
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    });
  }).sort((a, b) => {
    if (!sortConfig.key) return 0;
    const aVal = a[sortConfig.key];
    const bVal = b[sortConfig.key];
    if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
    if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };


  // Handle adding a new row
  const handleAddRow = () => {
    if (Object.keys(newRow).length === columns.length) {
      setData([...data, newRow]);
      setNewRow({});
    }
  };

  // Handle editing a row
  const handleEditRow = (rowIndex, updatedRow) => {
    const updatedData = [...data];
    updatedData[rowIndex] = updatedRow;
    setData(updatedData);
    setEditingRow(null);
  };

  // Handle batch delete
  const handleBatchDelete = () => {
    setData(data.filter((_, index) => !selectedRows.includes(index)));
    setSelectedRows([]);
  };

  // Handle row checkbox select
  const toggleSelectRow = (index) => {
    setSelectedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  // Handle input change for adding/editing
  

  return (
    <div className={className}>
      <div className={styles.controls}>
        {/* Search Bar */}
        <input
          className={styles.searchBar}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
          type="text"
          value={searchTerm}
        />

        {/* Batch Delete Button */}
        {selectedRows.length > 0 && (
          <button
            className={styles.batchDeleteButton}
            onClick={handleBatchDelete}
          >
            Delete Selected ({selectedRows.length})
          </button>
        )}
      </div>

     
      

      {/* Table */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>
              <input disabled type="checkbox" />
            </th>
            {columns.map((column) => (
              <th key={column.key} onClick={() => handleSort(column.key)}>
              {column.label}
              {sortConfig.key === column.key ? (
                sortConfig.direction === 'asc' ? ' ▲' : ' ▼'
              ) : null}
            </th>
            ))}
            {actions && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row) => (
            <tr key={row.id} onClick={() => onRowClick && onRowClick(row)}>
              <td>
                <input
                  checked={selectedRows.includes(row.id)}
                  onChange={() => toggleSelectRow(row.id)}
                  type="checkbox"
                />
              </td>

              {columns.map((column) => (
                <td key={`${row.id}-${column.key}`}>
                  {editingRow === row.id ? (
                    <input
                      onChange={(e) => handleInputChange(e, column.key, row.id)}
                      value={row[column.key]}
                    />
                  ) : (
                    row[column.key]
                  )}
                </td>
              ))}

              {actions && (
                <td>
                  {editingRow === row.id ? (
                    <button onClick={() => setEditingRow(null)}>Save</button>
                  ) : (
                    <>
                      <button onClick={() => setEditingRow(row.id)}>
                        Edit
                      </button>
                      {actions.map((action) => (
                        <button
                          key={action.label}
                          onClick={(e) => {
                            e.stopPropagation();
                            action.onClick(row);
                          }}
                        >
                          {action.label}
                        </button>
                      ))}
                    </>
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

SimpleTable.propTypes = {
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    })
  ),
  className: PropTypes.string,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  initialData: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRowClick: PropTypes.func,
};

export default SimpleTable;
