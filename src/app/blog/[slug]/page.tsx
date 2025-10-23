import { notFound } from "next/navigation";
import { BlogHeader } from "../components/BlogHeader";
import { BlogFooter } from "../components/BlogFooter";
import { BlogHero } from "../components/BlogHero";
import { getAllPostsMeta, getPostBySlug } from "@/lib/mdx";
import { Typography } from "@/app/components/Typography";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

type Params = { params: { slug: string } };

export async function generateStaticParams() {
  const posts = await getAllPostsMeta();
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) return notFound();

  return (
    <div className="bg-background-light">
      <BlogHeader />
      <BlogHero title={post.meta.title} imageSrc={post.meta.image} />
      <main className="px-[16px] md:px-[60px] py-[36px] md:py-[56px]">
        <div className="mx-auto w-full max-w-[1100px] grid grid-cols-1 md:grid-cols-[1fr] gap-[16px] md:gap-[24px]">
          <article className="bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 border border-light rounded-[16px] p-[20px] md:p-[28px]">
            <div className="text-[14px] text-text-muted mb-[12px]">
              {post.meta.author} · {new Date(post.meta.date).toLocaleDateString()}
            </div>
            <div className="prose prose-neutral max-w-none">
              <h1 className={`${Typography.h1} mb-[12px]`}>{post.meta.title}</h1>
              <MDXRemote
                source={post.content}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [rehypeSlug],
                  },
                }}
              />
            </div>
          </article>
         
        </div>
      </main>
      <BlogFooter />
    </div>
  );
}


