import {React, useState} from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import "./dataTable.css";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Mode";
import { DeleteOutline } from "@mui/icons-material";
import { mockDataTeam } from "../../Data/mockData";


const DataTable = (props) => {
  const [data, setData] = useState(mockDataTeam);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
    console.log(id +"id is deleted")
  };

  const actionColumn = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${props.slug}/${params.row.id}`}>
          <EditIcon />
          </Link>
          <DeleteOutline
            className="delete"
            onClick={() => handleDelete(params.row.id)}
          />
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default DataTable;
