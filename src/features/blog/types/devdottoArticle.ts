/** biome-ignore-all lint/style/useNamingConvention: align with API */
import { z } from "zod";

const devdottoArticleMetaSchema = z.object({
  type_of: z.string(),
  id: z.number(),
  title: z.string(),
  description: z.string(),
  readable_publish_date: z.string(),
  slug: z.string(),
  path: z.string(),
  url: z.string(),
  reading_time_minutes: z.number(),
  comments_count: z.number(),
  public_reactions_count: z.number(),
  positive_reactions_count: z.number(),
  collection_id: z.number().nullable().optional(),
  published_timestamp: z.string(),
  edited_at: z.string().nullable().optional(),
  cover_image: z.string(),
  social_image: z.string(),
  tag_list: z.union([z.array(z.string()), z.string()]),
});

type DevdottoArticle = z.infer<typeof devdottoArticleSchema>;

export const devdottoArticlesMetaSchema = z.array(devdottoArticleMetaSchema);

export type DevdottoArticleMeta = z.infer<typeof devdottoArticleMetaSchema>;

export const devdottoArticleSchema = devdottoArticleMetaSchema.extend({
  body_html: z.string(),
  body_markdown: z.string(),
});

export default DevdottoArticle;
