import Button from "@components/buttons/Button";
import { ROUTES } from "@constants/routes";
import BlogCard from "@features/blog/components/BlogCard";
import { devdottoArticlesMeta } from "@features/blog/services/devdottoArticle";
import FadeInClient from "@layout/FadeInClient";
import Header from "@layout/Header";
import { sortByPopularity } from "@utils/sortFuncs";
import { clsx } from "clsx";
import type { Metadata } from "next";
import { SiDevdotto, SiMedium } from "react-icons/si";

export const metadata: Metadata = {
  title: ROUTES.blog.title,
  description: ROUTES.blog.description,
  alternates: {
    canonical: ROUTES.blog.route,
  },
};

const articlesToDisplay = 30;

const Blog: React.FC = async () => {
  const articles = await devdottoArticlesMeta(articlesToDisplay)();
  const hasNoArticles =
    !articles.success || (articles.success && articles.data.length === 0);
  return (
    <>
      <Header title={ROUTES.blog.title} />
      <main>
        <h2 className={clsx("sr-only")}>Articles</h2>
        <div>
          <FadeInClient transitionDuration={200}>
            <div
              className={clsx(
                "mx-auto mb-8 flex max-w-2xl items-center justify-center gap-4",
                "flex-row",
                "flex-wrap",
              )}
            >
              <Button
                icon={<SiDevdotto />}
                isLight
                label="DEV.to"
                shrinkLabelOnMobile
                to="https://dev.to/timwjames"
                tooltip="Find my personal blog @timwjames"
              />
              <Button
                icon={<SiMedium />}
                isLight
                label="Medium"
                shrinkLabelOnMobile
                to="https://medium.com/@twjames"
                tooltip="Find my professional @twjames"
              />
            </div>
            <section
              aria-label="Blogs"
              className={clsx("flex justify-center gap-4 p-0", "flex-wrap")}
              data-chromatic="ignore"
            >
              {hasNoArticles
                ? null
                : articles.data
                    .sort(sortByPopularity)
                    .map((articleMeta, index) => (
                      // biome-ignore lint/suspicious/noArrayIndexKey: stable list
                      <BlogCard article={articleMeta} key={index} />
                    ))}
            </section>
          </FadeInClient>
        </div>
      </main>
    </>
  );
};

export default Blog;
