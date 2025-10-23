import { BlogHeader } from "../../components/BlogHeader";
import { BlogFooter } from "../../components/BlogFooter";
import { BlogHero } from "../../components/BlogHero";
import { ArticleCard } from "../../components/ArticleCard";
import { getAllPostsMeta, type PostMeta } from "@/lib/mdx";

export async function generateStaticParams() {
  const posts = await getAllPostsMeta();
  const set = new Set<string>();
  posts.forEach((p) => (p.categories || []).forEach((c) => set.add(c)));
  return Array.from(set).map((category) => ({ category }));
}

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const all = await getAllPostsMeta();
  const cat = decodeURIComponent(params.category);
  const posts = all.filter((p) => (p.categories || []).includes(cat));
  return (
    <div className="bg-background-light">
      <BlogHeader />
      <BlogHero title={`Category: ${cat}`} />
      <main className="px-[16px] md:px-[60px] py-[36px] md:py-[56px]">
        <div className="mx-auto w-full max-w-[1100px] grid gap-[24px] md:gap-[28px]">
          {posts.length ? (
            posts.map((post: PostMeta) => <ArticleCard key={post.slug} article={post} />)
          ) : (
            <div className="text-text-muted">No posts yet.</div>
          )}
        </div>
      </main>
      <BlogFooter />
    </div>
  );
}


