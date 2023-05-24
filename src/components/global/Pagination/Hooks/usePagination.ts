import { useCallback, useState } from 'react';
import { UsePaginationProps, UsePaginationReturnType } from '../Pagination.types';

const range = (start: number, stop: number, step = 1) =>
  Array(Math.ceil((stop - start) / step))
    .fill(start)
    .map((x, y) => x + y * step);

export function usePagination({
  boundaryCount = 1,
  count = 1,
  defaultPage = 1,
  onChange,
  page,
  siblingCount = 1,
}: UsePaginationProps): UsePaginationReturnType {
  const [internalPageIndex, setInternalPageIndex] = useState(defaultPage);

  const pageIndex = page ?? internalPageIndex;
  const goToPage = onChange ?? setInternalPageIndex;
  const initialPageIndex = 0;
  const finalPageIndex = count - 1;
  const prevPageExists = pageIndex > initialPageIndex;
  const nextPageExists = pageIndex < finalPageIndex;
  const prevPageIndex = prevPageExists ? pageIndex - 1 : pageIndex;
  const nextPageIndex = nextPageExists ? pageIndex + 1 : pageIndex;
  const goToNextPage = useCallback(() => goToPage(nextPageIndex), [goToPage, nextPageIndex]);
  const goToPrevPage = useCallback(() => goToPage(prevPageIndex), [goToPage, prevPageIndex]);
  const goToFirstPage = useCallback(() => goToPage(initialPageIndex), [goToPage, initialPageIndex]);
  const goToLastPage = useCallback(() => goToPage(finalPageIndex), [goToPage, finalPageIndex]);

  const createItem = useCallback(
    (page: number) => ({
      page,
      type: 'page',
      selected: page === pageIndex,
      goToThisPage: () => goToPage(page),
    }),
    [goToPage, pageIndex]
  );

  let items = [];

  const minLength = 2 * boundaryCount + 2 * siblingCount + 3;
  if (count <= minLength) {
    items = range(initialPageIndex, initialPageIndex + count).map(createItem);
  } else {
    const startingArea = initialPageIndex + boundaryCount + siblingCount + 1;
    const endingArea = finalPageIndex - boundaryCount - siblingCount - 1;
    const isIndexNearStarting = pageIndex >= initialPageIndex && pageIndex <= startingArea;
    const isIndexNearEnding = pageIndex <= finalPageIndex && pageIndex >= endingArea;

    if (isIndexNearStarting) {
      items = [
        ...range(initialPageIndex, startingArea + siblingCount + 1).map(createItem),
        { type: 'end-ellipsis' },
        ...range(finalPageIndex - boundaryCount + 1, finalPageIndex + 1).map(createItem),
      ];
    } else if (isIndexNearEnding) {
      items = [
        ...range(initialPageIndex, initialPageIndex + boundaryCount).map(createItem),
        { type: 'start-ellipsis' },
        ...range(endingArea - siblingCount, finalPageIndex + 1).map(createItem),
      ];
    } else {
      items = [
        ...range(initialPageIndex, initialPageIndex + boundaryCount).map(createItem),
        { type: 'start-ellipsis' },
        ...range(pageIndex - siblingCount, pageIndex + siblingCount + 1).map(createItem),
        { type: 'end-ellipsis' },
        ...range(finalPageIndex - boundaryCount + 1, finalPageIndex + 1).map(createItem),
      ];
    }
  }

  return {
    currentPage: pageIndex,
    goToFirstPage,
    goToLastPage,
    goToNextPage,
    goToPage,
    goToPrevPage,
    items,
    nextPageExists,
    prevPageExists,
  } as UsePaginationReturnType;
}
export default usePagination;
