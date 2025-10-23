import Link from "next/link";

export const CategoriesSidebar = ({
  categories,
}: {
  categories: { name: string; count: number }[];
}) => {
  if (!categories.length) return null;
  return (
    <aside className="bg-white/60 border border-light rounded-[12px] p-[12px] md:p-[16px]">
      <div className="text-[12px] uppercase font-bold text-text-muted mb-[8px]">Categories</div>
      <ul className="flex flex-col gap-[8px]">
        {categories.map((c) => (
          <li key={c.name}>
            <Link
              href={`/blog/category/${encodeURIComponent(c.name)}`}
              className="flex items-center justify-between text-[14px] hover:text-accent transition-colors"
            >
              <span>{c.name}</span>
              <span className="text-text-muted">{c.count}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};


