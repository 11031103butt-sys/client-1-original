import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, FolderOpen } from "lucide-react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import PostContent from "@/app/components/blog/PostContent";
import s from "@/app/services/services.module.css";

interface BlogPostDetail {
  id: string | number;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string;
  coverImage?: string | null;
  coverAlt?: string | null;
  image?: string | null;
  imageUrl?: string | null;
  createdAt?: string | null;
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

const BLOG_BASE_URL = (process.env.NEXT_PUBLIC_BLOG_URL ?? "").replace(/\/$/, "");

async function getPostBySlug(rawSlug: string): Promise<BlogPostDetail | null> {
  const slug = decodeURIComponent(String(rawSlug ?? "")).trim();
  if (!slug || !BLOG_BASE_URL) return null;

  try {
    const res = await fetch(
      `${BLOG_BASE_URL}/api/public/blog/${encodeURIComponent(slug)}`,
      { cache: "no-store" }
    );
    if (!res.ok) return null;

    const data = await res.json().catch(() => null);
    if (!data || data.ok === false) return null;

    const post = data.post ?? data;
    if (!post?.title || !post?.content) return null;

    return post;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt || undefined,
  };
}

export default async function BlogSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const resolvedImage = post.coverImage || post.image || post.imageUrl || null;

  const formattedDate = post.createdAt
    ? new Date(post.createdAt).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <>
      <Header />
      <main className={s.page}>
        <section className={s.hero} style={{ paddingTop: "2rem", paddingBottom: "1.5rem" }}>
          <div className={s.wrap}>
            <div style={{ marginBottom: "1rem" }}>
              <Link
                href="/blog"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                <ArrowLeft size={16} aria-hidden="true" />
                <span>Back to blog</span>
              </Link>
            </div>

            <h1 className={s.h1}>{post.title}</h1>
            {post.excerpt && <p className={s.lead}>{post.excerpt}</p>}

            <div className={s.time}>
              {post.category && (
                <>
                  <FolderOpen size={15} aria-hidden="true" />
                  <span>{post.category}</span>
                </>
              )}
              {formattedDate && post.createdAt && (
                <>
                  <Calendar size={15} aria-hidden="true" />
                  <time dateTime={post.createdAt}>{formattedDate}</time>
                </>
              )}
            </div>
          </div>
        </section>

        <section className={s.group} style={{ paddingTop: "1.5rem" }}>
          <div className={s.wrap}>
            {resolvedImage && (
              <div
                style={{
                  marginBottom: "1.5rem",
                  borderRadius: "12px",
                  overflow: "hidden",
                  backgroundColor: "rgba(0, 0, 0, 0.03)",
                  padding: "0.5rem",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={resolvedImage}
                  alt={post.coverAlt || post.title}
                  style={{
                    display: "block",
                    width: "100%",
                    height: "auto",
                    maxHeight: "650px",
                    objectFit: "contain",
                    margin: "0 auto",
                    borderRadius: "8px",
                  }}
                />
              </div>
            )}

            <article className={s.card}>
              <PostContent content={post.content} />
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}