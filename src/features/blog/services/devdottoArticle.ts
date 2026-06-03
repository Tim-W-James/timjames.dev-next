import { cacheLife, cacheTag } from "next/cache";
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
const devdottoArticle = async (
  slug: string,
): Promise<
  | { success: true; data: DevdottoArticle | undefined }
  | { success: false; error: Error }
> => {
  "use cache";
  cacheLife("default");
  cacheTag("all-articles", `article-${slug}`);

  try {
    const articleEndpoint = `${ARTICLES_API}/${DEV_DOT_TO_USERNAME}/${slug}`;
    const response = await fetch(articleEndpoint);
    if (!response.ok) {
      const newError = new Error(
        `Failed to fetch article [${slug}] from [${articleEndpoint}]. Received status [${response.status} - ${response.statusText}] and body [${await response.text()}]`,
      );
      console.error(newError);
      return { success: false, error: newError };
    }

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
      return { success: false, error: newError };
    }
    return { success: true, data: validatedArticle.data };
  } catch (error) {
    // In case JSON parse fails
    const newError = new Error(`Failed to fetch article [${slug}]`, {
      cause: error,
    });
    console.error(newError);
    return { success: false, error: newError };
  }
};

const maxArticlesToFetch = 50;

/**
 * Get all articles from dev.to
 *
 * @param articles - number of articles to return
 * @param page - pagination
 */
export const devdottoArticlesMeta = async (
  articles: number = maxArticlesToFetch,
  page?: number,
): Promise<
  | { success: true; data: DevdottoArticleMeta[] }
  | { success: false; error: Error }
> => {
  "use cache";
  cacheLife("default");
  cacheTag(`article-list-${articles}-${page ?? 1}`);

  try {
    const articlesMetaEndpoint = `${ARTICLES_API}?${new URLSearchParams({
      username: DEV_DOT_TO_USERNAME,
      // biome-ignore lint/style/useNamingConvention: matches API
      per_page: String(articles),
      page: String(page ?? 1),
    })}`;
    const response = await fetch(articlesMetaEndpoint);
    if (!response.ok) {
      const newError = new Error(
        `Failed to fetch articles from [${articlesMetaEndpoint}]. Received status [${response.status} - ${response.statusText}] and body [${await response.text()}]`,
      );
      console.error(newError);
      return { success: false, error: newError };
    }

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
      return { success: false, error: newError };
    }
    return { success: true, data: validatedArticleMeta.data };
  } catch (error) {
    // In case JSON parse fails
    const newError = new Error("Failed to parse article meta", {
      cause: error,
    });
    console.error(newError);
    return { success: false, error: newError };
  }
};

export default devdottoArticle;
