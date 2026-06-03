import Button from "@components/buttons/Button";
import { ROUTES } from "@constants/routes";
import BlogArticle from "@features/blog/components/BlogArticle";
import devdottoArticle, {
  devdottoArticlesMeta,
} from "@features/blog/services/devdottoArticle";
import { clsx } from "clsx";
import type { Metadata } from "next";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

export const generateStaticParams = async () => {
  const articles = await devdottoArticlesMeta();
  return articles.success && articles.data
    ? articles.data.map((article) => ({ slug: article.slug }))
    : [];
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
  const { slug } = await params;
  // Note: relies on data-level caching to avoid duplicate requests between
  // metadata and page
  const article = await devdottoArticle(slug);
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

    ...(article.success && article.data
      ? {
          openGraph: {
            title: article.data.title,
            description: article.data.description,
            images: [
              {
                url: article.data.social_image,
                width: 1000,
                height: 500,
              },
            ],
            type: "article",
            countryName: "Australia",
            locale: "en-AU",
          },
          twitter: {
            card: "summary_large_image",
            title: article.data.title,
            description: article.data.description,
            creator: "@TimWJames",
            images: [
              {
                url: article.data.social_image,
                width: 1000,
                height: 500,
              },
            ],
          },
        }
      : {}),
  };
};

const Article: React.FC<{
  params: Promise<{ slug: string }>;
}> = async ({ params }) => {
  const { slug } = await params;
  const article = await devdottoArticle(slug);
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
