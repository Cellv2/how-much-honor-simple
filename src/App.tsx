import React from "react";
import { Column, useRowSelect, useTable } from "react-table";
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
        return {
            honorAmount,
            slot: displayName,
            marks,
            marksAmount,
            marksType,
        };
    });

    return (
        <div className="App">
            <header className="App-header">
                {/* <img src={logo} className="App-logo" alt="logo" />
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
                </a> */}
                <Table columns={columns} data={tableData} />
            </header>
        </div>
    );
};

const IndeterminateCheckbox = React.forwardRef(
    //@ts-expect-error
    ({ indeterminate, ...rest }, ref) => {
        const defaultRef = React.useRef();
        const resolvedRef = ref || defaultRef;

        React.useEffect(() => {
            //@ts-expect-error
            resolvedRef.current.indeterminate = indeterminate;
        }, [resolvedRef, indeterminate]);

        return (
            <>
                <input
                    type="checkbox"
                    //@ts-expect-error
                    ref={resolvedRef}
                    {...rest}
                />
            </>
        );
    }
);

const Table = ({ columns, data }: { columns: Column<{}>[]; data: {}[] }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        //@ts-expect-error
        selectedFlatRows,
        //@ts-expect-error
        state: { selectedRowIds },
    } = useTable(
        {
            columns,
            data,
        },
        useRowSelect,
        (hooks) => {
            hooks.visibleColumns.push((columns) => [
                // Let's make a column for selection
                {
                    id: "selection",
                    // The header can use the table's getToggleAllRowsSelectedProps method
                    // to render a checkbox
                    //@ts-expect-error
                    Header: ({ getToggleAllRowsSelectedProps }) => (
                        <div>
                            <IndeterminateCheckbox
                                {...getToggleAllRowsSelectedProps()}
                            />
                        </div>
                    ),
                    // The cell can use the individual row's getToggleRowSelectedProps method
                    // to the render a checkbox
                    Cell: ({ row }) => (
                        <div>
                            <IndeterminateCheckbox
                                //@ts-expect-error
                                {...row.getToggleRowSelectedProps()}
                            />
                        </div>
                    ),
                },
                ...columns,
            ]);
        }
    );

    return (
        <>
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
            <p>Selected Rows: {Object.keys(selectedRowIds).length}</p>
            <pre>
                <code>
                    {JSON.stringify(
                        {
                            selectedRowIds: selectedRowIds,
                            "selectedFlatRows[].original": selectedFlatRows.map(
                                (d: any) => d.original
                            ),
                        },
                        null,
                        2
                    )}
                    {`\ntotal honour: ${selectedFlatRows
                        .map((row: any) => row.original.honorAmount)
                        .reduce(
                            (prev: number, curr: number) => prev + curr,
                            0
                        )}`}
                    {`\ntotal AB marks: ${selectedFlatRows
                        .filter((row: any) => row.original.marksType === "AB")
                        .map((row: any) => row.original.marksAmount)
                        .reduce(
                            (prev: number, curr: number) => prev + curr,
                            0
                        )}`}
                    {`\ntotal AV marks: ${selectedFlatRows
                        .filter((row: any) => row.original.marksType === "AV")
                        .map((row: any) => row.original.marksAmount)
                        .reduce(
                            (prev: number, curr: number) => prev + curr,
                            0
                        )}`}
                    {`\ntotal EOTS marks: ${selectedFlatRows
                        .filter((row: any) => row.original.marksType === "EOTS")
                        .map((row: any) => row.original.marksAmount)
                        .reduce(
                            (prev: number, curr: number) => prev + curr,
                            0
                        )}`}
                    {`\ntotal WSG marks: ${selectedFlatRows
                        .filter((row: any) => row.original.marksType === "WSG")
                        .map((row: any) => row.original.marksAmount)
                        .reduce(
                            (prev: number, curr: number) => prev + curr,
                            0
                        )}`}
                </code>
            </pre>
        </>
    );
};

export default App;
