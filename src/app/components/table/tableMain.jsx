"use client";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

export const TableMain = ({ data, columns = [], tableClass,filters }) => {
  const table = useReactTable({
    data,
    columns,
    // Pipeline
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    enableColumnResizing: true,
    //
    debugTable: true,
    filters,
  });

  return (
    <div className=" ">
      <div className="w-full overflow-x-auto block rounded-[0.25rem] min-h-[30.3rem] bg-white  shadow-shadowOne border border-[#213f7d0f]">
        {/* Render table if table has data  */}
        <table
          className={"w-full h-full rounded-[0.25rem] " + " " + tableClass}
        >
          <thead className="text-xs">
            {/* Mapping through the table headers */}
            {table?.getHeaderGroups()?.map((headerGroup, i) => (
              <tr key={i}>
                {headerGroup.headers.map((header, idx) => (
                  <th
                    key={idx}
                    className="py-4 px-5 text-left font-bold uppercase text-sm"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {/* Mapping throught the table body */}
            {table.getRowModel().rows.map((row, index) => (
              <tr
                key={index}
                className={`border-b border-[#213f7d1a] border-x-none text-sm ${
                  (index + 1) % 2 === 0 ? " bg-white " : "bg-[#F9F9F9]"
                }`}
              >
                {row.getVisibleCells().map((cell, key) => (
                  <td key={key} className="py-3 px-5">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <>
          {/* Display this for table without data */}
          {/* <div className="font-bold text-4xl w-full h-[32.3rem] rounded-[0.25rem]">
            <div className="flex items-center justify-center self-center leading-[30rem]">
              No Data
            </div>
          </div> */}
        </>
      </div>

      {/* Pagination only when table has content*/}
      <div className="flex items-center gap-x-8 justify-between px-4 py-5  rounded-b-[0.5rem]">
        <span className="flex items-center gap-1 text-[#060F21] text-small text-epps-stalegray-500">
          <div className="hidden sm:block">Showing</div>
          {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </span>
        <div className="space-x-5">
          <button
            className="bg-[#213f7d1a] p-1 rounded-[.25rem] cursor-pointer"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <GrFormPrevious
              color={!table.getCanPreviousPage() ? "#213f7d66" : "#213F7D"}
            />
          </button>
          <span className="text-epps-stalegray-500">
            {table.getState().pagination.pageIndex + 1}
          </span>
          <button
            className="bg-[#213f7d1a] p-1 rounded-[.25rem] cursor-pointer"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <MdOutlineNavigateNext
              color={!table.getCanNextPage() ? "#213f7d66" : "#213F7D"}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableMain;
