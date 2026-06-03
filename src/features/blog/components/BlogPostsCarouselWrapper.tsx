import { devdottoArticlesMeta } from "../services/devdottoArticle";
import BlogPostsCarousel from "./BlogPostsCarousel";

const articlesToDisplay = 10;

type BlogPostsCarouselProps = {
  /**
   * Title for the carousel widget
   */
  title?: string | undefined;
  /**
   * Slugs for posts to exclude from carousel
   */
  excludeSlugs?: string[] | undefined;
};

/**
 * Carousel to display latest blog posts
 */
const BlogPostsCarouselWrapper: React.FC<BlogPostsCarouselProps> = async ({
  title,
  excludeSlugs,
}) => {
  const latestArticles = await devdottoArticlesMeta(articlesToDisplay);

  return latestArticles.success && latestArticles.data.length > 0 ? (
    <BlogPostsCarousel
      articles={latestArticles.data}
      excludeSlugs={excludeSlugs}
      title={title}
    />
  ) : null;
};

export default BlogPostsCarouselWrapper;
