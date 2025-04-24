import React, { useMemo, useState } from "react";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";
import "./App.css";

ModuleRegistry.registerModules([AllCommunityModule]);

export default function DataGrid() {
  const [data, setData] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const CompanyLogoRenderer = (params) => (
    <span
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        alignItems: "center",
      }}
    >
      {params.value && (
        <img
          alt={`${params.value} Flag`}
          src={`https://www.ag-grid.com/example-assets/space-company-logos/${params.value.toLowerCase()}.png`}
          width={25}
          height={25}
          style={{
            marginRight: "12px",
            filter: "brightness(1.1)",
          }}
        />
      )}
      <p
        style={{
          textOverflow: "ellipsis",
          overflow: "hidden",
          whiteSpace: "nowrap",
          margin: 0,
        }}
      >
        {params.value}
      </p>
    </span>
  );

  const MissionResultRenderer = (params) => (
    <span
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100%",
        alignItems: "center",
      }}
    >
      <img
        alt={`${params.value}`}
        src={`https://www.ag-grid.com/example-assets/icons/${
          params.value ? "tick-in-circle" : "cross-in-circle"
        }.png`}
        width={20}
        height={20}
      />
    </span>
  );

  const dateFormatter = (params) => {
    return new Date(params.value).toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const rowSelection = {
    mode: "multiRow",
    headerCheckbox: false,
  };

  const defaultColDef = useMemo(() => {
    return {
      filter: true,
      editable: true,
    };
  }, []);

  const [colDefs] = useState([
    {
      field: "mission",
      width: 150,
    },
    {
      field: "company",
      width: 130,
      cellRenderer: CompanyLogoRenderer,
    },
    {
      field: "location",
      width: 225,
    },
    {
      field: "date",
      valueFormatter: dateFormatter,
    },
    {
      field: "price",
      width: 130,
      valueFormatter: (params) => {
        return "£" + params.value.toLocaleString();
      },
    },
    {
      field: "successful",
      width: 120,
      cellRenderer: MissionResultRenderer,
    },
    { field: "rocket" },
  ]);

  // useEffect(() => {
  //   fetch("https://www.ag-grid.com/example-assets/space-mission-data.json")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  // }, []);

  const onClick = async () => {
    const res = await fetch(
      "https://www.ag-grid.com/example-assets/space-mission-data.json"
    );
    const data = await res.json();
    const multipliedData = [...data, ...data, ...data];
    setData(multipliedData);
    setShowTable(true);
  };

  const clearData = () => {
    setData([]);
    setShowTable(false);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          margin: "1rem",
        }}
      >
        <button className="btn btn-primary" onClick={onClick}>
          Load Table
        </button>
        <button className="btn btn-secondary" onClick={clearData}>
          Clear Data
        </button>
      </div>

      <div
        className="ag-theme-alpine"
        style={{ width: "100%", height: "500px" }}
      >
        {showTable && (
          <AgGridReact
            rowData={data}
            columnDefs={colDefs}
            defaultColDef={defaultColDef}
            pagination={true}
            rowSelection={rowSelection}
            onSelectionChanged={() => console.log("Row Selected!")}
            onCellValueChanged={(event) =>
              console.log(`New Cell Value: ${event.value}`)
            }
          />
        )}
        {/* <AgGridReact
        rowData={data}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        pagination={true}
        rowSelection={rowSelection}
        onSelectionChanged={(event) => console.log("Row Selected!")}
        onCellValueChanged={(event) =>
          console.log(`New Cell Value: ${event.value}`)
        }
      /> */}
      </div>
    </div>
  );
}
