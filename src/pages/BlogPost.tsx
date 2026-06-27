import { useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { ArticleLayout } from "@/components/ArticleLayout";
import { MDX } from "@/components/MDX";
import { getPost } from "@/lib/content";

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? getPost(slug) : undefined;

  useEffect(() => {
    if (post) document.title = `${post.title} — Africaviwo`;
  }, [post]);

  if (!post) return <Navigate to="/blog" replace />;
  const Body = post.Component;

  return (
    <Layout>
      <ArticleLayout
        eyebrow={post.tags.join(" · ")}
        title={post.title}
        backTo={{ href: "/blog", label: "Toutes les histoires" }}
        meta={
          <div className="flex flex-wrap gap-3 items-center">
            <span className="font-medium text-foreground/80">{post.author}</span>
            <span>·</span>
            <time>{new Date(post.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</time>
            <span>·</span>
            <span>{post.readingTime} min de lecture</span>
          </div>
        }
        hero={
          <div className="container-wide">
            <div className="aspect-[16/7] rounded-3xl bg-gradient-sahel grain shadow-warm" />
          </div>
        }
      >
        <p className="lead text-xl text-foreground/80 italic font-serif mb-10 text-balance">
          {post.excerpt}
        </p>
        <MDX>
          <Body />
        </MDX>
      </ArticleLayout>
    </Layout>
  );
};

export default BlogPost;
