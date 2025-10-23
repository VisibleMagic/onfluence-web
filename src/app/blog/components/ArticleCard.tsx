import Image from "next/image";
import Link from "next/link";
import { formatDate } from "../utils/markdown";

export type ArticleLike = {
  slug: string;
  title: string;
  image: string;
  excerpt: string;
  author: string;
  date: string;
  categories?: string[];
};

export const ArticleCard = ({ article }: { article: ArticleLike }) => {
  return (
    <article className="group bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 border border-light rounded-[16px] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative w-full aspect-[16/9] bg-background-light">
        <Link href={`/blog/${article.slug}`} className="absolute inset-0 block">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority={false}
            sizes="(max-width: 1024px) 100vw, 1100px"
            className="object-cover"
          />
        </Link>
      </div>
      <div className="px-[20px] md:px-[28px] py-[18px] md:py-[22px] flex flex-col gap-[10px]">
        <Link href={`/blog/${article.slug}`} className="hover:text-accent transition-colors w-fit">
          <h3 className="font-display text-[clamp(24px,3.4vw,32px)] font-medium leading-[1.15] text-text">
            {article.title}
          </h3>
        </Link>
        <p className="text-[17px] leading-[1.7] text-text/90">
          {article.excerpt}
        </p>
        <div className="flex items-center gap-[8px] text-[14px] text-text-muted mt-[2px]">
          <span className="inline-block w-[6px] h-[6px] rounded-full bg-accent/70" />
          <span>{article.author}</span>
          <span>·</span>
          <span>{formatDate(article.date)}</span>
        </div>
        {article.categories?.length ? (
          <div className="mt-[6px] flex flex-wrap gap-[8px]">
            {article.categories.map((c) => (
              <Link
                key={c}
                href={`/blog/category/${encodeURIComponent(c)}`}
                className="text-[12px] uppercase font-bold px-[8px] py-[4px] bg-background-light text-text rounded-full hover:bg-button-background/40 transition-colors"
              >
                {c}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
};


