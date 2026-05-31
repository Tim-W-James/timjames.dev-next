import BlogArticle from "@features/blog/components/BlogArticle";
import devdottoArticle from "@features/blog/services/devdottoArticle";

const Article: React.FC<{
  params: Promise<{ slug: string }>;
}> = async ({ params }) => {
  const { slug } = await params;
  const article = await devdottoArticle(slug)();
  return article && <BlogArticle article={article} />;
};

export default Article;
