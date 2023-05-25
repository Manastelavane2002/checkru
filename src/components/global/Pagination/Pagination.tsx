import clsx from 'clsx';
import { Button } from 'src/components/global';
import { PaginationProps } from './Pagination.types';
import usePagination from './Hooks/usePagination';

export function Pagination({
  boundaryCount = 1,
  count = 1,
  defaultPage = 0,
  onChange,
  page,
  siblingCount = 1,
  shape = 'square',
  className = '',
}: PaginationProps) {
  const { items, prevPageExists, nextPageExists, currentPage, goToNextPage, goToPrevPage } =
    usePagination({
      boundaryCount,
      count,
      defaultPage,
      onChange,
      page,
      siblingCount,
    });

  return (
    <div className={`py-4 w-full ${className}`}>
      <div className="hidden sm:flex items-center gap-2 justify-between ">
        <Button
          disabled={!prevPageExists}
          onClick={goToPrevPage}
          label="Previous"
          icon="arrow-left"
          color="cellDividerStroke"
          className="py-2 px-3 text-white bg-cellDividerStroke flex  items-center rounded-lg disabled:text-neutral-400 disabled:cursor-not-allowed  hover:bg-neutral-600"
        />
        <div className="hidden sm:flex items-end">
          {items.map(({ page, type, selected, goToThisPage }, index) => {
            return (
              <div
                key={index}
                className={clsx(
                  'w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-neutral-600',
                  {
                    'bg-cellDividerStroke': selected,
                    'rounded-lg': shape === 'square',
                    'rounded-full': shape === 'rounded',
                  }
                )}
                onClick={goToThisPage}>
                <h1 className={selected ? 'text-white font-semibold' : 'text-white'}>
                  {type === 'page' ? `${Number(page) + 1}` : '..'}
                </h1>
              </div>
            );
          })}
        </div>
        <Button
          disabled={!nextPageExists}
          onClick={goToNextPage}
          label="Next"
          endIcon="arrow-right"
          color="cellDividerStroke"
          className="py-2 px-3 text-white bg-cellDividerStroke flex  items-center rounded-lg disabled:text-neutral-400 disabled:cursor-not-allowed  hover:bg-neutral-600"
        />
      </div>
      <div className="flex items-center gap-2 justify-between sm:hidden ">
        <Button
          label="Previous"
          color="neutral"
          variant="outlined"
          icon="arrow-left"
          onClick={goToPrevPage}
          disabled={!prevPageExists}
        />
        <h1 className="text-neutral-700 text-sm">
          {' '}
          Page {currentPage + 1} of {count}
        </h1>
        <Button
          label="Next"
          color="neutral"
          variant="outlined"
          icon="arrow-right"
          onClick={goToNextPage}
          disabled={!nextPageExists}
        />
      </div>
    </div>
  );
}
