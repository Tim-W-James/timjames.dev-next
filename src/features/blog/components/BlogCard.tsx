import ImageWithLoading from "@components/ImageWithLoading";
import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";
import { BsChatLeftTextFill, BsHeartFill } from "react-icons/bs";
import type { DevdottoArticleMeta } from "../types/devdottoArticle";

type BlogCardProps = {
  article: DevdottoArticleMeta;
  isCarouselItem?: boolean;
};

/**
 * Card to preview a blog article
 */
const BlogCard: React.FC<BlogCardProps> = ({ article, isCarouselItem }) => {
  return (
    <section
      aria-label={article.title}
      className={clsx(
        "border p-4",
        "border-dark-accent",
        "acrylic-light",
        "rounded-lg",
        isCarouselItem
          ? "min-w-sm snap-center max-sm:min-w-[340px]"
          : "w-full max-w-sm",
      )}
    >
      <div className={clsx("flex h-full justify-between gap-4", "flex-col")}>
        <Link href={`/blog/${article.slug}`}>
          <ImageWithLoading
            alt="Thumbnail"
            borderClassNames={clsx("rounded-lg", "border-dark-accent")}
            className={clsx("aspect-wide")}
            height={175}
            src={article.social_image}
            width={350}
          />
          <div className={clsx("mr-2 text-right")}>
            {new Date(article.published_timestamp).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </div>
        </Link>
        <div className={clsx("flex gap-4", "flex-col")}>
          <div>
            <Link
              aria-labelledby={article.title}
              href={`/blog/${article.slug}`}
              title="Read blog"
            >
              <h3
                className={clsx("mb-0 text-center font-bold text-light-accent")}
                id={article.title}
              >
                {article.title}
              </h3>
            </Link>
            <hr className={clsx("radial-border")} />
          </div>
          <div className={clsx("flex justify-center gap-2", "flex-wrap")}>
            {typeof article.tag_list === "string"
              ? null
              : article.tag_list.map((tag, index) => (
                  <div
                    className={clsx(
                      "bg-main-brand px-2 font-bold",
                      "rounded-md",
                    )}
                    // biome-ignore lint/suspicious/noArrayIndexKey: stable list
                    key={index}
                  >
                    {tag}
                  </div>
                ))}
          </div>
        </div>
        <div className={clsx("mx-2 flex justify-between gap-4", "flex-wrap")}>
          <div className={clsx("flex gap-4 text-xl", "flex-wrap")}>
            <a
              className={clsx(
                "hover:text-light-accent active:text-dark-accent",
                "flex items-center gap-2",
              )}
              href={article.url}
              rel="noreferrer"
              target="_blank"
              title="Like on dev.to"
            >
              <BsHeartFill />
              {article.public_reactions_count > 0
                ? article.public_reactions_count
                : ""}
            </a>
            <a
              className={clsx(
                "hover:text-light-accent active:text-dark-accent",
                "flex items-center gap-2",
              )}
              href={article.url}
              rel="noreferrer"
              target="_blank"
              title="Comment on dev.to"
            >
              <BsChatLeftTextFill />
              {article.comments_count > 0 ? article.comments_count : ""}
            </a>
          </div>
          <Link href={`/blog/${article.slug}`}>
            <div>{article.reading_time_minutes} min read</div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogCard;
