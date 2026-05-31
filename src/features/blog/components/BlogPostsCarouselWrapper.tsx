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
  const latestArticles = await devdottoArticlesMeta(articlesToDisplay)();
  if (!latestArticles) {
    return null;
  }

  return (
    <BlogPostsCarousel
      articles={latestArticles}
      excludeSlugs={excludeSlugs}
      title={title}
    />
  );
};

export default BlogPostsCarouselWrapper;
