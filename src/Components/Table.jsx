import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";

const Table = ({ columns, data }) => {
  const [searchInput, setSearchInput] = useState(data);

  // Update searchInput whenever data prop changes
  useEffect(() => {
    setSearchInput(data);
  }, [data]);

  const searchHander = (e) => {
    const { value } = e.target;
    const regex = new RegExp(value, "i");
    const searchData = data.filter((search) => {
      return Object.values(search).some((values) => regex.test(values));
    });
    setSearchInput(searchData);
  };

  return (
    <div
      className={`w-full `}
    >
      <DataTable
        columns={columns}
        data={searchInput}
        key={"key"}
        customStyles={{
          headRow: {
            style: {
              backgroundColor: "#E0E6E6",
            //   color: "#fff",
              fontSize: "14px",
            },
          },
          headCells: { style: { border: "1px solid #128CA3" } },
        }}
        // selectableRows
        pagination
      />
    </div>
  );
};

export default Table;
