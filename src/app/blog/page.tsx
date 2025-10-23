import { BlogHeader } from "./components/BlogHeader";
import { BlogFooter } from "./components/BlogFooter";
import { BlogHero } from "./components/BlogHero";
import { ArticleCard } from "./components/ArticleCard";
import { getAllPostsMeta, type PostMeta } from "@/lib/mdx";
import { CategoriesSidebar } from "./components/CategoriesSidebar";

export default async function Blog() {
  const posts = await getAllPostsMeta();
  const counts = new Map<string, number>();
  for (const p of posts) {
    for (const c of p.categories || []) {
      counts.set(c, (counts.get(c) || 0) + 1);
    }
  }
  const categories = Array.from(counts.entries())
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([name, count]) => ({ name, count }));
  return (
    <div className="bg-background-light">
      <BlogHeader />
      <BlogHero />
      <main className="px-[16px] md:px-[60px] py-[36px] md:py-[56px]">
        <div className="mx-auto w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-[1fr_280px] gap-[16px] md:gap-[24px]">
          <div className="grid gap-[24px] md:gap-[28px]">
            {posts.map((post: PostMeta) => (
              <ArticleCard key={post.slug} article={post} />
            ))}
          </div>
          <div className="md:sticky md:top-[80px] h-fit">
            <CategoriesSidebar categories={categories} />
          </div>
        </div>
      </main>
      <BlogFooter />
    </div>
  );
}