import { flexRender, Header, HeaderContext, SortingState, Table } from '@tanstack/react-table';
import * as React from 'react';

interface TableHeadProps<TData = unknown> {
  enableRowSelection?: boolean;
  enableSorting?: boolean;
  headerCellProps?: (
    context: HeaderContext<unknown, unknown>
  ) => React.HTMLProps<HTMLTableCellElement>;
  onAllRowsSelectionChange?: (checked: boolean) => void;
  onSortingChange?: (sorting: SortingState) => void;
  sorting?: SortingState;
  table: Table<TData>;
}

export function TableHead({
  table,
  headerCellProps,
  enableSorting = false,
  onSortingChange,
}: TableHeadProps) {
  const handleHeaderClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    header: Header<unknown, unknown>
  ) => {
    if (header.column.getCanSort()) {
      header.column.getToggleSortingHandler()?.(event);
      const nextSortOrder = header.column.getNextSortingOrder();
      onSortingChange?.(
        nextSortOrder
          ? [
              {
                id: header.id,
                desc: nextSortOrder === 'desc',
              },
            ]
          : []
      );
    }
  };

  return (
    <thead>
      {table.getHeaderGroups().map((headerGroup, headerGroupIndex) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            const props = headerCellProps?.(header.getContext()) ?? {};
            return (
              <th
                key={header.id}
                colSpan={header.colSpan}
                {...props}
                className={`bg-tableHeader ${
                  headerGroupIndex === 0 ? '' : 'border-t'
                } border-cellDividerStroke px-6 h-16 text-xs font-medium text-white ${
                  header.subHeaders.length ? 'text-center' : 'text-left'
                } ${props?.className}`}>
                {header.isPlaceholder ? null : (
                  <div
                    {...(enableSorting
                      ? {
                          className: `${
                            header.column.getCanSort() ? 'cursor-pointer select-none flex' : 'flex'
                          }`,
                        }
                      : {})}>
                    <div className="flex items-center">
                      <div
                        className="grow flex items-center"
                        onClick={(event) => {
                          handleHeaderClick(event, header);
                        }}>
                        {flexRender(header.column.columnDef.header, header.getContext())}
                      </div>
                    </div>
                  </div>
                )}
              </th>
            );
          })}
        </tr>
      ))}
    </thead>
  );
}
