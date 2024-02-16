"use client";

import { AgGridReact } from "ag-grid-react"; // React Grid Logic
import { ColDef, SideBarDef, StatusPanelDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import { useCallback, useMemo, useRef, useState } from "react";
import { IoIosDownload } from "react-icons/io";
import { COLORS } from "@/colors";

interface ProviderRow {
  providerNPI: string;
  firstName: string;
  lastName: string;
  prvType: string;
  claimAmt: string;
  date: string;
  codes: string;
}

const providersData: ProviderRow[] = [
  {
    providerNPI: "1003000126",
    firstName: "Franko",
    lastName: "Doberman",
    prvType: "Internal Med",
    claimAmt: "5420.63",
    date: "12/3/24",
    codes: "D1E, D1B",
  },
  {
    providerNPI: "1003000522",
    firstName: "Enkeshafi",
    lastName: "Ardalan",
    prvType: "Internal Med",
    claimAmt: "130004.43",
    date: "12/3/24",
    codes: "D1A",
  },
  {
    providerNPI: "1003000530",
    firstName: "Weigand",
    lastName: "Frederick",
    prvType: "Acupuncturist",
    claimAmt: "50033.73",
    date: "12/3/24",
    codes: "D1C, D1D",
  },
  {
    providerNPI: "1003000530",
    firstName: "Semonche",
    lastName: "Amanda",
    prvType: "Family Practice",
    claimAmt: "10000.62",
    date: "12/3/24",
    codes: "D1E",
  },
  {
    providerNPI: "1003834152",
    firstName: "Derek",
    lastName: "Smith",
    prvType: "Family Practice",
    claimAmt: "64354.33",
    date: "06/09/23",
    codes: "D1E, D1C, D1D, D1B",
  },
  {
    providerNPI: "1003338794",
    firstName: "Kevin",
    lastName: "Garza",
    prvType: "Family Practice",
    claimAmt: "140933.43",
    date: "01/11/24",
    codes: "D1E",
  },
  {
    providerNPI: "1003958543",
    firstName: "Rebecca",
    lastName: "Cruz",
    prvType: "Internal Med",
    claimAmt: "119528.68",
    date: "10/14/22",
    codes: "D1C",
  },
  {
    providerNPI: "1003257026",
    firstName: "Denise",
    lastName: "Hodge",
    prvType: "Internal Med",
    claimAmt: "129506.52",
    date: "02/25/23",
    codes: "D1B",
  },
  {
    providerNPI: "1003851308",
    firstName: "Tracy",
    lastName: "Larson",
    prvType: "Internal Med",
    claimAmt: "148658.02",
    date: "12/25/22",
    codes: "D1E, D1D",
  },
  {
    providerNPI: "1003723928",
    firstName: "Jonathan",
    lastName: "Jackson",
    prvType: "Acupuncturist",
    claimAmt: "30813.21",
    date: "01/09/24",
    codes: "D1C, D1D",
  },
  {
    providerNPI: "1003218988",
    firstName: "Isaac",
    lastName: "Brandt",
    prvType: "Internal Med",
    claimAmt: "123432.02",
    date: "08/06/23",
    codes: "D1B, D1E, D1C",
  },
  {
    providerNPI: "1003999752",
    firstName: "Christopher",
    lastName: "Black",
    prvType: "Acupuncturist",
    claimAmt: "45298.02",
    date: "05/28/22",
    codes: "D1C, D1E",
  },
  {
    providerNPI: "1003571334",
    firstName: "Martin",
    lastName: "Bell",
    prvType: "Family Practice",
    claimAmt: "67796.51",
    date: "03/20/23",
    codes: "D1A, D1E, D1B, D1D, D1C",
  },
  {
    providerNPI: "1003877919",
    firstName: "Anthony",
    lastName: "Gordon",
    prvType: "Acupuncturist",
    claimAmt: "73994.22",
    date: "03/16/23",
    codes: "D1A, D1B, D1E, D1D, D1C",
  },
];

export const FlaggedProvidersTable = () => {
  const [rowData, setRowData] = useState<ProviderRow[]>(providersData);

  const [colDefs, setColDefs] = useState<ColDef<ProviderRow>[]>([
    { field: "providerNPI", headerName: "Provider NPI" },
    { field: "firstName", headerName: "First Name" },
    { field: "lastName", headerName: "Last Name" },
    { field: "prvType", headerName: "Prv Type" },
    { field: "claimAmt", headerName: "Claim Amount" },
    { field: "date", headerName: "Date" },
    { field: "codes", headerName: "Codes" },
  ]);

  const defaultColDef = useMemo<ColDef>(() => {
    return {
      // set the default column width
      width: 150,
      // make every column editable
      editable: true,
      // make every column use 'text' filter by default
      filter: "agTextColumnFilter",
      // enable floating filters by default
      floatingFilter: true,
      // disable cell data types
      cellDataType: false,
    };
  }, []);

  const gridRef = useRef<AgGridReact>(null);

  const exportData = useCallback(() => {
    gridRef.current!.api.exportDataAsCsv();
  }, []);

  return (
    <div className="w-full">
      <div className="flex justify-between">
        <div className="text-lg uppercase text-primary">Flagged Providers</div>
        <div
          className="hover:cursor-pointer border-secondary flex items-center gap-x-2 px-2 py-1 rounded-lg hover:bg-secondary transition-colors"
          onClick={exportData}
        >
          <IoIosDownload size={20} color={COLORS.primary} />
          Export data
        </div>
      </div>
      <div className="my-3" />
      <div className="w-full h-full min-h-[350px] ag-theme-quartz-dark robin-text">
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          sideBar={"columns"}
          defaultColDef={defaultColDef}
          enableRangeSelection={true}
          rowSelection={"multiple"}
          ref={gridRef}
        />
      </div>
    </div>
  );
};
