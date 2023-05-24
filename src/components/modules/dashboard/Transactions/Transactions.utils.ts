import { ColumnDef } from '@tanstack/react-table';
function camalize(str: string) {
  return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

export function columnCreater(headers: string[]) {
  const columns: ColumnDef<unknown, unknown>[] = [];
  headers.map((h) => {
    columns.push({
      header: h,
      accessorKey: camalize(h),
    });
  });

  return columns;
}
