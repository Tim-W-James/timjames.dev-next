"use client";
import Button from "@components/buttons/Button";
import HashLink from "@components/HashLink";
import { ROUTES } from "@constants/routes";
import { sortByLatest } from "@utils/sortFuncs";
import { clsx } from "clsx";
import { useCallback } from "react";
import { isSafari } from "react-device-detect";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { MdArticle } from "react-icons/md";
import type { DevdottoArticleMeta } from "../types/devdottoArticle";
import BlogCard from "./BlogCard";
import styles from "./BlogPostsCarousel.module.scss";

type BlogPostsCarouselProps = {
  /**
   * Title for the carousel widget
   */
  title?: string | undefined;
  /**
   * Slugs for posts to exclude from carousel
   */
  excludeSlugs?: string[] | undefined;
  /**
   * Articles to display in the carousel
   */
  articles: DevdottoArticleMeta[];
};

/**
 * Carousel to display latest blog posts
 */
const BlogPostsCarousel: React.FC<BlogPostsCarouselProps> = ({
  title,
  articles,
  excludeSlugs,
}) => {
  const goNext = useCallback(() => {
    // biome-ignore lint/nursery/useDomQuerySelector: allow scroll
    document.getElementById("carousel")?.scrollBy({
      left: 384,
      behavior: "smooth",
    });
  }, []);

  const goPrev = useCallback(() => {
    // biome-ignore lint/nursery/useDomQuerySelector: allow scroll
    document.getElementById("carousel")?.scrollBy({
      left: -384,
      behavior: "smooth",
    });
  }, []);

  return (
    <div>
      {/** biome-ignore lint/correctness/useUniqueElementIds: explicit fragment */}
      <h2 className={clsx("mb-4 self-center")} id="blog">
        <HashLink className={clsx("hash-link")} fragment="blog">
          {title ?? "Latest Blog Posts"}{" "}
        </HashLink>
        <hr className={clsx("radial-border")} />
      </h2>
      <section aria-labelledby="blog">
        {/** biome-ignore lint/correctness/useUniqueElementIds: explicit fragment */}
        <div
          className={clsx(
            "mx-2 p-0 pb-4",
            "px-1/10",
            "max-sm:px-1",
            "snap-x overflow-auto",
            "flex gap-4",
            // biome-ignore lint/style/noNonNullAssertion: untyped CSS
            { [styles._carousel!]: !isSafari },
          )}
          data-chromatic="ignore"
          id="carousel"
        >
          {articles
            .filter((articleMeta) => !excludeSlugs?.includes(articleMeta.slug))
            .sort(sortByLatest)
            .map((articleMeta, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: stable list
              <BlogCard article={articleMeta} isCarouselItem key={index} />
            ))}
        </div>
        <div
          className={clsx(
            "mx-auto mt-8 flex items-center justify-center gap-4",
          )}
        >
          <Button
            childProps={{ onClick: goPrev }}
            icon={<BsFillArrowLeftCircleFill />}
            isIconOnly
            isLight
            label="Scroll carousel left"
            mode="button"
            tooltip="Scroll carousel left"
          />
          <Button
            icon={<MdArticle />}
            iconRight
            isLight
            label="View All"
            mode="route"
            to={ROUTES.blog.route}
            tooltip="View more articles"
          />
          <Button
            childProps={{ onClick: goNext }}
            icon={<BsFillArrowRightCircleFill />}
            isIconOnly
            isLight
            label="Scroll carousel right"
            mode="button"
            tooltip="Scroll carousel right"
          />
        </div>
      </section>
    </div>
  );
};

export default BlogPostsCarousel;
