import { ROUTES } from "@constants/routes";
import BlogArticle from "@features/blog/components/BlogArticle";
import devdottoArticle from "@features/blog/services/devdottoArticle";
import type { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
  const { slug } = await params;
  // TODO combine calls from this and the page component
  const article = await devdottoArticle(slug)();
  return {
    title: article ? article.title : "Article Not Found",
    description: article
      ? article.description
      : "The requested article could not be found. Please check the URL and try again.",
    alternates: {
      canonical: `${ROUTES.blog.route}/${slug}`,
    },
  };
};

const Article: React.FC<{
  params: Promise<{ slug: string }>;
}> = async ({ params }) => {
  const { slug } = await params;
  const article = await devdottoArticle(slug)();
  return article && <BlogArticle article={article} />;
};

export default Article;
