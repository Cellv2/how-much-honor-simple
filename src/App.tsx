import React from "react";
import { Column, useRowSelect, useTable } from "react-table";
import { tableColumns } from "./constants/table.constants";
import { itemCostInfo } from "./data/items.data";
import { lookupSlotDisplayName } from "./utils/data.utils";
import BTable from "react-bootstrap/Table";
import BContainer from "react-bootstrap/Container";
import BRow from "react-bootstrap/Row";
import BCol from "react-bootstrap/Col";
import { bgMarksImages, miscImages } from "./images/images";

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

    return <Table columns={columns} data={tableData} />;
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

    const honorRequired = selectedFlatRows
        .map((row: any) => row.original.honorAmount)
        .reduce((prev: number, curr: number) => prev + curr, 0);

    const abMarksRequired = selectedFlatRows
        .filter((row: any) => row.original.marksType === "AB")
        .map((row: any) => row.original.marksAmount)
        .reduce((prev: number, curr: number) => prev + curr, 0);

    const avMarksRequired = selectedFlatRows
        .filter((row: any) => row.original.marksType === "AV")
        .map((row: any) => row.original.marksAmount)
        .reduce((prev: number, curr: number) => prev + curr, 0);

    const eotsMarksRequired = selectedFlatRows
        .filter((row: any) => row.original.marksType === "EOTS")
        .map((row: any) => row.original.marksAmount)
        .reduce((prev: number, curr: number) => prev + curr, 0);

    const wsgMarksRequired = selectedFlatRows
        .filter((row: any) => row.original.marksType === "WSG")
        .map((row: any) => row.original.marksAmount)
        .reduce((prev: number, curr: number) => prev + curr, 0);

    return (
        <>
            <BContainer fluid className="text-center">
                <BRow>
                    <BCol>
                        {honorRequired}{" "}
                        <img
                            src={miscImages.honor.src}
                            alt={miscImages.honor.alt}
                        />
                    </BCol>
                </BRow>
                <BRow>
                    <BCol sm={3}>
                        {abMarksRequired}{" "}
                        <img
                            src={bgMarksImages.ab.src}
                            alt={bgMarksImages.ab.alt}
                        />
                    </BCol>
                    <BCol sm={3}>
                        {avMarksRequired}{" "}
                        <img
                            src={bgMarksImages.av.src}
                            alt={bgMarksImages.av.alt}
                        />
                    </BCol>
                    <BCol sm={3}>
                        {eotsMarksRequired}{" "}
                        <img
                            src={bgMarksImages.eots.src}
                            alt={bgMarksImages.eots.alt}
                        />
                    </BCol>
                    <BCol sm={3}>
                        {wsgMarksRequired}{" "}
                        <img
                            src={bgMarksImages.wsg.src}
                            alt={bgMarksImages.wsg.alt}
                        />
                    </BCol>
                </BRow>
            </BContainer>
            <BTable striped bordered hover {...getTableProps()}>
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
                            <tr
                                {...row.getRowProps()}
                                style={
                                    //@ts-expect-error
                                    row.isSelected
                                        ? { backgroundColor: "lightblue" }
                                        : { backgroundColor: "" }
                                }
                                onClick={() => {
                                    //@ts-expect-error
                                    row.toggleRowSelected();
                                }}
                            >
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
            </BTable>
        </>
    );
};

export default App;
