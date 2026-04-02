import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav aria-label="Pagination" className="mt-8 flex items-center justify-center gap-2">
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Page precedente"
        className="focus-ring rounded-full border border-prilly-coal/20 px-3 py-1.5 text-sm text-prilly-coal transition hover:border-prilly-red/24 hover:text-prilly-red disabled:opacity-40 disabled:hover:border-prilly-coal/20 disabled:hover:text-prilly-coal"
      >
        ←
      </button>

      {pages.map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => onPageChange(page)}
          aria-current={page === currentPage ? "page" : undefined}
          className={cn(
            "focus-ring rounded-full px-3 py-1.5 text-sm transition",
            page === currentPage
              ? "bg-prilly-red text-white"
              : "border border-prilly-coal/20 text-prilly-coal hover:border-prilly-red/24 hover:text-prilly-red",
          )}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Page suivante"
        className="focus-ring rounded-full border border-prilly-coal/20 px-3 py-1.5 text-sm text-prilly-coal transition hover:border-prilly-red/24 hover:text-prilly-red disabled:opacity-40 disabled:hover:border-prilly-coal/20 disabled:hover:text-prilly-coal"
      >
        →
      </button>
    </nav>
  );
}
