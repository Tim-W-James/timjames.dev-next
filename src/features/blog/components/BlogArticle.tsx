import ImageWithLoading from "@components/ImageWithLoading";
import ScrollToTopButton from "@components/ScrollToTopButton";
import { clsx } from "clsx";
import Image from "next/image";
import { BsChatLeftText, BsHeart } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import type DevdottoArticle from "../types/devdottoArticle";
import BlogArticleWrapper from "./BlogArticleWrapper";
import MarkdownRenderer from "./MarkdownRenderer";

type BlogArticleContentProps = { article: DevdottoArticle };

const BlogArticle: React.FC<BlogArticleContentProps> = ({ article }) => {
  const sharableUrl = `https://timjames.dev/blog/${article.slug}`;
  return (
    <BlogArticleWrapper slug={article.slug} title={article.title || ""}>
      <div className={clsx("mx-auto flex", "flex-col")}>
        <div className={clsx("mr-4 text-right text-lg")}>
          {new Date(article.published_timestamp).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </div>
        <ImageWithLoading
          alt="Blog cover"
          height={420}
          src={article.cover_image}
          width={1000}
        />
        <div
          className={clsx("mx-4 mb-8 flex justify-between gap-4", "flex-wrap")}
        >
          <div className={clsx("flex gap-4 text-xl", "flex-wrap")}>
            <a
              className={clsx(
                "hover:text-light-accent active:text-dark-accent",
                "flex items-center gap-1",
              )}
              href={article.url}
              rel="noreferrer"
              target="_blank"
              title="Like on dev.to"
            >
              <BsHeart />
              {article.public_reactions_count === 0
                ? ""
                : article.public_reactions_count}
            </a>
            <a
              className={clsx(
                "hover:text-light-accent active:text-dark-accent",
                "flex items-center gap-2",
              )}
              href={`${article.url}#comments`}
              rel="noreferrer"
              target="_blank"
              title="Comment on dev.to"
            >
              <BsChatLeftText />
              {article.comments_count === 0 ? "" : article.comments_count}
            </a>
            <a
              className={clsx(
                "hover:text-light-accent active:text-dark-accent",
                "flex items-center",
              )}
              href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20post%3A%20${
                sharableUrl
              }`}
              rel="noreferrer"
              target="_blank"
              title="Share on X (Twitter)"
            >
              <FaXTwitter />
            </a>
          </div>
          <div className={clsx("text-lg")}>
            {article.reading_time_minutes} min read
          </div>
        </div>
        <MarkdownRenderer markdown={article.body_markdown} />

        <div className={clsx("flex w-full justify-center")}>
          <a
            href="https://ko-fi.com/D1D4UM8D0"
            rel="noreferrer"
            target="_blank"
          >
            <Image
              alt="Buy Me a Coffee at ko-fi.com"
              height={30}
              src="https://storage.ko-fi.com/cdn/kofi5.png?v=3"
              style={{ border: "0px" }}
              width={120}
            />
          </a>
        </div>
        <div className={clsx("radial-border mt-4 flex justify-center gap-2")}>
          <a
            className={clsx(
              "flex items-center gap-2 hover:text-light-accent",
              "border-r",
              "pr-2",
              "active:text-dark-accent",
            )}
            href={article.url}
            rel="noreferrer"
            target="_blank"
            title="Like on dev.to"
          >
            Like <BsHeart />{" "}
            {article.public_reactions_count === 0
              ? ""
              : article.public_reactions_count}
          </a>
          <a
            className={clsx(
              "flex items-center gap-2 hover:text-light-accent",
              "border-r",
              "pr-2",
              "active:text-dark-accent",
            )}
            href={`${article.url}#comments`}
            rel="noreferrer"
            target="_blank"
            title="Comment on dev.to"
          >
            Comment <BsChatLeftText />{" "}
            {article.comments_count === 0 ? "" : article.comments_count}
          </a>
          <ScrollToTopButton isArticle />
        </div>
      </div>
    </BlogArticleWrapper>
  );
};

export default BlogArticle;
