import { clsx } from "clsx";
import type { JSX } from "react";
import { CgSpinner } from "react-icons/cg";
import BlogPostsCarouselWrapper from "./BlogPostsCarouselWrapper";

type BlogArticleWrapperProps = {
  title?: string;
  children: JSX.Element;
  slug?: string;
};

/**
 * Creates the layout for a blog article
 */
const BlogArticleWrapper: React.FC<BlogArticleWrapperProps> = ({
  title,
  children,
  slug,
}) => (
  <>
    <header
      className={clsx(
        "mx-auto flex place-content-center items-center px-8 text-center",
        "flex-col",
      )}
    >
      <h1 className={clsx("font-bold text-light-accent")} id={title}>
        {title ? (
          <>
            {title}
            <hr className={clsx("radial-border")} />
          </>
        ) : (
          <span className={clsx("inline-block", "leading-0", "animate-spin")}>
            <CgSpinner />
            <hr className={clsx("hidden")} />
          </span>
        )}
      </h1>
    </header>
    {children}
    <div className={clsx("container mx-auto pt-4 text-center")}>
      <BlogPostsCarouselWrapper
        excludeSlugs={slug ? [slug] : undefined}
        title="Read More"
      />
    </div>
  </>
);

export default BlogArticleWrapper;
