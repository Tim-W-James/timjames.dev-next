import type DevdottoArticle from "../types/devdottoArticle";
import {
  type DevdottoArticleMeta,
  devdottoArticleSchema,
  devdottoArticlesMetaSchema,
} from "../types/devdottoArticle";

// Setup API endpoints and queries
const DEV_DOT_TO_USERNAME = "timwjames";
const ARTICLES_API = "https://dev.to/api/articles";

/**
 * Get a single dev.to article
 *
 * @param slug - URL slug (title) for the article
 */
const devdottoArticle =
  (slug: string): (() => Promise<DevdottoArticle | undefined>) =>
  async () => {
    try {
      const articleEndpoint = `${ARTICLES_API}/${DEV_DOT_TO_USERNAME}/${slug}`;
      const response = await fetch(articleEndpoint);
      const maybeArticle = await response.json();
      const validatedArticle = devdottoArticleSchema.safeParse(maybeArticle);
      if (!validatedArticle.success) {
        const newError = new Error(
          `Failed to validate response from [${articleEndpoint}]`,
          {
            cause: validatedArticle.error,
          },
        );
        console.error(newError);
        throw newError;
      }
      return validatedArticle.data;
    } catch (error) {
      // In case JSON parse fails
      const newError = new Error(`Failed to fetch article [${slug}]`, {
        cause: error,
      });
      console.error(newError);
      throw newError;
    }
  };

/**
 * Get all articles from dev.to
 *
 * @param articles - number of articles to return
 * @param page - pagination
 */
export const devdottoArticlesMeta =
  (
    articles: number,
    page?: number,
  ): (() => Promise<DevdottoArticleMeta[] | undefined>) =>
  async () => {
    try {
      // eslint-disable-next-line max-len
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      const articlesMetaEndpoint = `${ARTICLES_API}?${new URLSearchParams({
        username: DEV_DOT_TO_USERNAME,
        // biome-ignore lint/style/useNamingConvention: matches API
        per_page: String(articles),
        page: String(page ?? 1),
      })}`;
      const response = await fetch(articlesMetaEndpoint);
      const maybeArticleMeta = await response.json();
      const validatedArticleMeta =
        devdottoArticlesMetaSchema.safeParse(maybeArticleMeta);
      if (!validatedArticleMeta.success) {
        const newError = new Error(
          `Failed to validate response from [${articlesMetaEndpoint}]`,
          {
            cause: validatedArticleMeta.error,
          },
        );
        console.error(newError);
        throw newError;
      }
      return validatedArticleMeta.data;
    } catch (error) {
      // In case JSON parse fails
      const newError = new Error("Failed to parse article meta", {
        cause: error,
      });
      console.error(newError);
      throw newError;
    }
  };

export default devdottoArticle;
