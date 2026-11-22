import type { MetadataRoute } from "next";
import { pricingData, slugify } from "@/app/components/pricedata";

interface BlogSitemapItem {
  slug: string;
  coverImage?: string | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.NEXT_PUBLIC_BLOG_URL ||
  "http://localhost:3001"
).replace(/\/$/, "");

const BLOG_API_URL = (
  process.env.NEXT_PUBLIC_BLOG_URL || "http://localhost:3000"
).replace(/\/$/, "");

async function fetchBlogEntries(): Promise<BlogSitemapItem[]> {
  try {
    const items: BlogSitemapItem[] = [];
    const take = 100;
    let skip = 0;

    while (true) {
      const res = await fetch(
        `${BLOG_API_URL}/api/public/blog?skip=${skip}&take=${take}`,
        { cache: "no-store" }
      );
      if (!res.ok) break;

      const data = await res.json().catch(() => null);
      const batch: BlogSitemapItem[] = Array.isArray(data?.posts) ? data.posts : [];
      if (batch.length === 0) break;

      items.push(...batch);

      if (
        batch.length < take ||
        (typeof data?.total === "number" && items.length >= data.total)
      ) {
        break;
      }
      skip += take;
    }

    return items;
  } catch (error) {
    console.error("Sitemap blog fetch error:", error);
    return [];
  }
}

function getServiceEntries(): MetadataRoute.Sitemap {
  const seen = new Set<string>();
  const entries: MetadataRoute.Sitemap = [];

  for (const category of pricingData) {
    for (const item of category.items) {
      const serviceSlug = slugify(item.name);
      if (!serviceSlug || seen.has(serviceSlug)) continue;
      seen.add(serviceSlug);

      entries.push({
        url: `${SITE_URL}/services/${encodeURIComponent(serviceSlug)}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPaths = [
    { path: "/", changeFrequency: "weekly" as const, priority: 1 },
    { path: "/services", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/blog", changeFrequency: "daily" as const, priority: 0.9 },
    { path: "/faq", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/privacy", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/terms", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/why-immigra", changeFrequency: "monthly" as const, priority: 0.7 },
  ];

  const staticPages: MetadataRoute.Sitemap = staticPaths.map((p) => ({
    url: `${SITE_URL}${p.path === "/" ? "" : p.path}/`,
    lastModified: new Date(),
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  const servicePages = getServiceEntries();
  const posts = await fetchBlogEntries();

  const blogPages: MetadataRoute.Sitemap = posts
    .filter((post) => Boolean(post.slug))
    .map((post) => {
      const dateSource = post.updatedAt || post.createdAt;
      const parsed = dateSource ? new Date(dateSource) : new Date();
      const lastModified = Number.isNaN(parsed.getTime()) ? new Date() : parsed;

      return {
        url: `${SITE_URL}/blog/${encodeURIComponent(post.slug)}`,
        lastModified,
        changeFrequency: "weekly",
        priority: 0.8,
        ...(post.coverImage ? { images: [post.coverImage] } : {}),
      };
    });

  return [...staticPages, ...servicePages, ...blogPages];
}