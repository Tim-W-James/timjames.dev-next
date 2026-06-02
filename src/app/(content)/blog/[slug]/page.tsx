import Button from "@components/buttons/Button";
import { ROUTES } from "@constants/routes";
import BlogArticle from "@features/blog/components/BlogArticle";
import devdottoArticle from "@features/blog/services/devdottoArticle";
import { clsx } from "clsx";
import type { Metadata } from "next";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
  const { slug } = await params;
  // TODO combine calls from this and the page component
  const article = await devdottoArticle(slug)();
  return {
    title:
      article.success && article.data
        ? article.data.title
        : "Article Not Found",
    description:
      article.success && article.data
        ? article.data.description
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
  return article.success && article.data ? (
    <BlogArticle article={article.data} />
  ) : (
    <>
      <header
        className={clsx(
          "mx-auto flex place-content-center items-center px-8 text-center",
          "flex-col",
        )}
      >
        {/** biome-ignore lint/correctness/useUniqueElementIds: explicit fragment */}
        <h1 className={clsx("font-bold text-8xl text-light-accent")} id="404">
          404
        </h1>
        <h2>
          <span className={clsx("text-danger")}>Oops!</span> Article not found.
        </h2>
        <h3>The article you&apos;re looking for doesn&apos;t exist.</h3>
        <br />
      </header>
      <div className={clsx("mb-8 flex justify-center")}>
        <Button
          icon={<BsFillArrowLeftCircleFill />}
          isLight
          label="Article List"
          mode="route"
          to="/blog"
          tooltip="Back to article list"
        />
      </div>
    </>
  );
};

export default Article;
