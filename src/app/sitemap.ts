import { devdottoArticlesMeta } from "@features/blog/services/devdottoArticle";
import type { MetadataRoute } from "next";

// biome-ignore lint/style/noProcessEnv: allowed for metadata
// biome-ignore lint/correctness/noProcessGlobal: allowed for metadata
const siteUrl = process.env.SITE_URL || "https://timjames.dev";

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const articles = await devdottoArticlesMeta();

  const articleUrls: MetadataRoute.Sitemap =
    articles.success && articles.data
      ? articles.data.map((article) => ({
          url: `${siteUrl}/blog/${article.slug}`,
          lastModified: new Date(
            article.edited_at || article.published_timestamp,
          ),
          changeFrequency: "weekly" as const,
          priority: 0.8,
        }))
      : [];

  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${siteUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
  ];

  return [...staticUrls, ...articleUrls];
};

export default sitemap;
