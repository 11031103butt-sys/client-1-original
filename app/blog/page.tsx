"use client";

import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, FolderOpen, Layers } from "lucide-react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { scrollToSection as go } from "@/app/components/scroll";
import s from "@/app/services/services.module.css";

interface BlogPostSummary {
  id: string | number;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  coverImage: string;
  coverAlt: string;
  createdAt: string;
}

const BLOG_BASE_URL = (process.env.NEXT_PUBLIC_BLOG_URL ?? "").replace(/\/$/, "");

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPostSummary[]>([]);
  const [total, setTotal] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const take = 6;

  const fetchPosts = useCallback(async (skip: number, append: boolean) => {
    try {
      if (append) {
        setLoadingMore(true);
      } else {
        setLoading(true);
      }
      setError(null);

      const endpoint = `${BLOG_BASE_URL}/api/public/blog?skip=${skip}&take=${take}`;
      const res = await fetch(endpoint, { cache: "no-store" });
      const data = await res.json().catch(() => null);

      if (!res.ok || !data || data.ok === false || !Array.isArray(data.posts)) {
        throw new Error(data?.error || "Unable to load blog posts right now.");
      }

      setPosts((prev) => (append ? [...prev, ...data.posts] : data.posts));
      setTotal(typeof data.total === "number" ? data.total : data.posts.length);
      setHasMore(Boolean(data.hasMore));
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong while loading posts.");
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  }, []);

  useEffect(() => {
    fetchPosts(0, false);
  }, [fetchPosts]);

  const handleLoadMore = () => {
    if (!loadingMore && hasMore) {
      fetchPosts(posts.length, true);
    }
  };

  const categories = [
    "All",
    ...Array.from(new Set(posts.map((p) => p.category).filter(Boolean))),
  ];

  const visiblePosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <>
      <Header />
      <main className={s.page}>
        {/* COMPACT HERO */}
        <section
          className={s.hero}
          style={{
            paddingTop: "2.25rem",
            paddingBottom: "1.75rem",
          }}
        >
          <div className={s.wrap}>
            <h1
              className={s.h1}
              style={{
                marginBottom: "0.5rem",
              }}
            >
              Insights, guides, and updates from our team.
            </h1>
            <p
              className={s.lead}
              style={{
                marginTop: 0,
                marginBottom: categories.length > 1 ? "1rem" : 0,
              }}
            >
              Practical articles on case preparation, documentation tips, and recent updates (
              {total} {total === 1 ? "article" : "articles"}).
            </p>

            {categories.length > 1 && (
              <nav
                className={s.jump}
                aria-label="Filter posts by category"
                style={{ marginTop: "0.75rem" }}
              >
                <span className={s.jumpLabel}>Categories:</span>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={s.chip}
                    aria-pressed={selectedCategory === cat}
                  >
                    {cat}
                  </button>
                ))}
              </nav>
            )}
          </div>
        </section>

        {/* POSTS SECTION */}
        <section
          className={s.group}
          aria-labelledby="blog-posts-heading"
          style={{ paddingTop: "2rem" }}
        >
          <div className={s.wrap}>
            <div className={s.groupHead} style={{ marginBottom: "1.5rem" }}>
              <div className={s.groupText}>
                <h2 id="blog-posts-heading" className={s.h2}>
                  {selectedCategory === "All" ? "Latest Articles" : selectedCategory}
                </h2>
                <p className={s.tagline}>
                  {selectedCategory === "All"
                    ? "Recent posts ordered from newest to oldest."
                    : `Showing posts in ${selectedCategory}.`}
                </p>
              </div>

              <aside className={s.included} aria-label="Reading summary">
                <div className={s.time}>
                  <Layers size={16} aria-hidden="true" />
                  <span>
                    Showing: <b>{visiblePosts.length}</b> of <b>{total}</b>
                  </span>
                </div>
                <p className={s.muted}>
                  Select any article card to read the full post and details.
                </p>
              </aside>
            </div>

            {error && (
              <div role="alert" className={s.card}>
                <h3 className={s.cardTitle}>Could not load articles</h3>
                <p className={s.cardDesc}>{error}</p>
              </div>
            )}

            {loading ? (
              <div className={s.grid}>
                {Array.from({ length: 6 }).map((_, idx) => (
                  <article
                    className={s.card}
                    key={idx}
                    aria-busy="true"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <div
                      style={{
                        width: "100%",
                        aspectRatio: "16 / 10",
                        borderRadius: "10px",
                        backgroundColor: "rgba(0, 0, 0, 0.06)",
                        marginBottom: "0.75rem",
                      }}
                    />
                    <h3 className={s.cardTitle}>Loading article…</h3>
                    <p className={s.cardDesc}>Fetching the latest content and summary.</p>
                  </article>
                ))}
              </div>
            ) : visiblePosts.length === 0 ? (
              <div className={s.card}>
                <h3 className={s.cardTitle}>No posts found</h3>
                <p className={s.cardDesc}>
                  There are no articles to display in this category yet.
                </p>
              </div>
            ) : (
              <>
                <div className={s.grid}>
                  {visiblePosts.map((post) => (
                    <article
                      className={s.card}
                      key={post.id}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                      }}
                    >
                      <Link
                        href={`/blog/${encodeURIComponent(post.slug)}`}
                        style={{
                          display: "block",
                          width: "100%",
                          aspectRatio: "16 / 10",
                          overflow: "hidden",
                          borderRadius: "10px",
                          marginBottom: "0.85rem",
                          flexShrink: 0,
                          backgroundColor: "rgba(0, 0, 0, 0.04)",
                        }}
                      >
                        {post.coverImage && (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={post.coverImage}
                            alt={post.coverAlt || post.title}
                            loading="lazy"
                            style={{
                              display: "block",
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        )}
                      </Link>

                      <div className={s.time}>
                        <FolderOpen size={15} aria-hidden="true" />
                        <span>{post.category}</span>
                        {post.createdAt && (
                          <>
                            <Calendar size={15} aria-hidden="true" />
                            <time dateTime={post.createdAt}>{formatDate(post.createdAt)}</time>
                          </>
                        )}
                      </div>

                      <h3 className={s.cardTitle}>{post.title}</h3>
                      <p className={s.cardDesc} style={{ flex: 1 }}>
                        {post.excerpt}
                      </p>

                      <div className={s.cardBottom} style={{ marginTop: "auto", paddingTop: "0.75rem" }}>
                        <Link
                          href={`/blog/${encodeURIComponent(post.slug)}`}
                          className={s.btn}
                          aria-label={`Read ${post.title}`}
                        >
                          Read article
                          <ArrowRight size={16} aria-hidden="true" />
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>

                {hasMore && selectedCategory === "All" && (
                  <div className={s.cardBottom} style={{ marginTop: "1.5rem" }}>
                    <button
                      type="button"
                      onClick={handleLoadMore}
                      disabled={loadingMore}
                      className={s.btnOutline}
                    >
                      {loadingMore ? "Loading more..." : "Load more articles"}
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        {/* HELP CTA */}
        <section
          className={s.help}
          style={{ paddingTop: "2.5rem", paddingBottom: "2.5rem" }}
        >
          <div className={s.wrap}>
            <h2 className={s.h2}>Need help with a specific case?</h2>
            <p className={s.lead}>
              Reach out to our team and we will point you to the right service option.
            </p>
            <button type="button" onClick={() => go("contact")} className={s.btnLight}>
              Book a consultation
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}