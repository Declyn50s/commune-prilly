import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type SearchBarProps = {
  placeholder: string;
  suggestions: string[];
  compact?: boolean;
  initialValue?: string;
  submitTo?: string;
  onNavigate?: () => void;
};

export function SearchBar({
  placeholder,
  suggestions,
  compact = false,
  initialValue = "",
  submitTo = "/recherche",
  onNavigate,
}: SearchBarProps) {
  const navigate = useNavigate();
  const [query, setQuery] = useState(initialValue);

  useEffect(() => {
    setQuery(initialValue);
  }, [initialValue]);

  const goToSearch = (value: string) => {
    const trimmedValue = value.trim();
    navigate(trimmedValue ? `${submitTo}?q=${encodeURIComponent(trimmedValue)}` : submitTo);
    onNavigate?.();
  };

  return (
    <div className="space-y-3">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          goToSearch(query);
        }}
        className={`surface flex flex-col gap-3 p-2 ${compact ? "md:flex-row" : "md:flex-row md:items-center"} `}
      >
        <div className="flex flex-1 items-center gap-3 rounded-full bg-prilly-soft px-4 py-3">
          <Search className="h-5 w-5 text-prilly-red" />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="h-auto border-0 bg-transparent p-0 shadow-none"
            placeholder={placeholder}
            aria-label={placeholder}
          />
        </div>
        <Button type="submit" className="w-full md:w-auto">
          Rechercher
        </Button>
      </form>
      <div className="flex flex-wrap gap-2">
        {suggestions.map((suggestion) => (
          <button
            key={suggestion}
            className="focus-ring rounded-full border border-black/8 bg-white/90 px-3 py-1.5 text-sm text-prilly-coal/70 transition hover:border-prilly-red/20 hover:bg-prilly-yellow/20 hover:text-prilly-coal"
            type="button"
            onClick={() => {
              setQuery(suggestion);
              goToSearch(suggestion);
            }}
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
}
