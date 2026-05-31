import type { DevdottoArticleMeta } from "@features/blog/types/devdottoArticle";

export const sortByPopularity = (
  a: DevdottoArticleMeta,
  b: DevdottoArticleMeta,
) => b.public_reactions_count - a.public_reactions_count;

export const sortByLatest = (a: DevdottoArticleMeta, b: DevdottoArticleMeta) =>
  new Date(b.published_timestamp).getTime() -
  new Date(a.published_timestamp).getTime();
