import React from "react";
import DataTable from "react-data-table-component";
import { Columns as columns} from "../../constants";

const Table = ({data}) => {
  return (
    <>
      <DataTable
        columns={columns}
        pagination
        data={data}
        subHeader
        selectableRows
        persistTableHead
      />
    </>
  );
};

export default Table;
