import React from "react";
import { Column, useTable } from "react-table";
import "./App.css";
import { tableColumns } from "./constants/table.constants";
import { itemCostInfo } from "./data/items.data";
import logo from "./logo.svg";
import { lookupSlotDisplayName } from "./utils/data.utils";

const App = () => {
    const columns = React.useMemo(() => tableColumns, []);

    const tableData = itemCostInfo.map((item) => {
        const { honorAmount, slot, marksAmount, marksType } = item;
        const marks = `${marksAmount ?? ""} ${marksType ?? ""}`;
        const displayName = lookupSlotDisplayName(slot);
        return { honorAmount, slot: displayName, marks };
    });

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <Table columns={columns} data={tableData} />
            </header>
        </div>
    );
};

const Table = ({ columns, data }: { columns: Column<{}>[]; data: {}[] }) => {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({
            columns,
            data,
        });

    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>
                                {column.render("Header")}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return (
                                    <td {...cell.getCellProps()}>
                                        {cell.render("Cell")}
                                    </td>
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default App;
