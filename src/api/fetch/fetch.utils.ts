export function buildUrl(path: string, query?: Record<string, string>) {
  const searchParams = query ? new URLSearchParams(query).toString() : '';
  return path + (searchParams ? `?${searchParams}` : '');
}
