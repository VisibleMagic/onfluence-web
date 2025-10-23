import { BlogHeader } from "./components/BlogHeader";
import { BlogFooter } from "./components/BlogFooter";
import { BlogHero } from "./components/BlogHero";
import { ArticleCard } from "./components/ArticleCard";
import { getAllPostsMeta, type PostMeta } from "@/lib/mdx";

export default async function Blog() {
  const posts = await getAllPostsMeta();
  return (
    <div className="bg-background-light">
      <BlogHeader />
      <BlogHero />
      <main className="px-[16px] md:px-[60px] py-[36px] md:py-[56px]">
        <div className="mx-auto w-full max-w-[1100px] grid gap-[24px] md:gap-[28px]">
          {posts.map((post: PostMeta) => (
            <ArticleCard key={post.slug} article={post} />
          ))}
        </div>
      </main>
      <BlogFooter />
    </div>
  );
}