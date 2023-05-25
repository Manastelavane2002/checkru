import { CellContext, flexRender, Row, Table } from '@tanstack/react-table';
import * as React from 'react';
interface TableBodyProps<TData = unknown> {
  cellProps?: (context: CellContext<unknown, unknown>) => React.HTMLProps<HTMLTableCellElement>;
  enableRowSelection?: boolean;
  handleClick?: (row: Row<unknown>) => void;
  onMouseLeaveRow?: (row: Row<TData>) => void;
  onMouseOverRow?: (row: Row<TData>) => void;
  onRowSelection?: (v: { checked: boolean; row: Row<TData> }) => void;
  rowProps?: (context: {
    row: Row<TData>;
    table: Table<TData>;
  }) => React.HTMLProps<HTMLTableRowElement>;
  table: Table<TData>;
}

export function TableBody({
  table,
  cellProps,
  rowProps,
  onMouseOverRow,
  onMouseLeaveRow,
  handleClick,
}: TableBodyProps) {
  return (
    <tbody>
      {table.getRowModel().rows.map((row) => {
        return (
          <tr
            key={row.id}
            className="cursor-pointer bg-secondary hover:bg-dashboardBg"
            {...rowProps?.({ table, row })}
            onClick={() => handleClick?.(row)}
            onMouseOver={() => onMouseOverRow?.(row)}
            onMouseLeave={() => onMouseLeaveRow?.(row)}>
            {row.getVisibleCells().map((cell) => {
              const props = cellProps?.(cell.getContext()) ?? {};
              return (
                <td
                  key={cell.id}
                  {...props}
                  className={`px-6 h-16 text-sm  text-dashboardWhite text-left border-t border-cellDividerStroke ${props?.className}`}>
                  <div className="flex items-center ">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </div>
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
}
