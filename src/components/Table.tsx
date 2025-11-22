import React from 'react';

interface Column<T> {
  key: string;
  header: string;
  render?: (item: T) => React.ReactNode;
  className?: string;
}

interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  emptyMessage?: string;
  className?: string;
}

export function Table<T extends Record<string, any>>({ 
  data, 
  columns, 
  emptyMessage = 'No data available',
  className = '' 
}: TableProps<T>) {
  const pageSize = 10;
  const total = columns.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const currentPage = 1;
  const start = total === 0 ? 0 : (currentPage - 1) * pageSize + 1;
  const end = Math.min(currentPage * pageSize, total);

  
  const pages: (number | '...')[] = [];
  if (totalPages <= 7) {
    for (let p = 1; p <= totalPages; p++) pages.push(p);
  } else {
    pages.push(1, 2, 3, 4, 5);
    if (totalPages > 5) pages.push('...');
  }
  if (data.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p>{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            {columns.map((column) => (
              <th
                key={column.key}
                className={`text-left py-3 px-4 text-sm font-semibold text-gray-700 ${column.className || ''}`}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className="border-b border-gray-100 hover:bg-yellow-50 transition-colors"
            >
              {columns.map((column) => (
                <td key={column.key} className={`py-4 px-4 text-sm ${column.className || ''}`}>
                  {column.render ? column.render(item) : item[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-between py-4 px-2">
        <div className="text-sm text-gray-600">
          Showing{' '}
          <span className="font-medium text-gray-800">{start}</span> to{' '}
          <span className="font-medium text-gray-800">{end}</span> of{' '}
          <span className="font-medium text-gray-800">{total.toLocaleString()}</span> Pages
        </div>

        <nav className="flex items-center space-x-2" aria-label="Pagination">
          <button
            type="button"
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded-md border text-sm ${
          currentPage === 1
            ? 'text-gray-400 border-gray-200 bg-gray-50 cursor-not-allowed'
            : 'text-gray-700 border-gray-200 hover:bg-gray-100'
            }`}
          >
            Previous
          </button>

          <div className="flex items-center space-x-1">
            {pages.map((p, i) =>
          p === '...' ? (
            <span key={`e-${i}`} className="px-2 text-gray-500">
              …
            </span>
          ) : (
            <button
              key={p}
              type="button"
              aria-current={p === currentPage ? 'page' : undefined}
              className={`px-3 py-1 rounded-md text-sm border ${
            p === currentPage
              ? 'bg-yellow-50 border-yellow-400 text-yellow-700 font-medium'
              : 'text-gray-700 border-gray-200 hover:bg-gray-100'
              }`}
            >
              {p}
            </button>
          )
            )}
          </div>

          {totalPages > 5 && (
            <span className="px-2 text-sm text-gray-600">of {totalPages}</span>
          )}

          <button
            type="button"
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded-md border text-sm ${
          currentPage === totalPages
            ? 'text-gray-400 border-gray-200 bg-gray-50 cursor-not-allowed'
            : 'text-gray-700 border-gray-200 hover:bg-gray-100'
            }`}
          >
            Next
          </button>
        </nav>
          </div>
    </div>
  );
}
