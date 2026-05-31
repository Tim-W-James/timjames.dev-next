"use client";
import { clsx } from "clsx";
import { useState } from "react";
import styles from "./LazyYoutubeVideo.module.scss";

type LazyYoutubeVideoProps = {
  videoId: string;
  title: string;
  width?: string;
  height?: string;
};

const LazyYoutubeVideo: React.FC<LazyYoutubeVideoProps> = ({
  videoId,
  title,
  width,
  height,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    // biome-ignore lint/a11y/noNoninteractiveElementInteractions: iframe video
    // biome-ignore lint/nursery/useIframeSandbox: required for YouTube embed
    <iframe
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className={clsx(
        "z-10 mb-2",
        styles._videoPlayer,
        isLoading ? "animate-pulse bg-dark-shades" : "",
      )}
      height={height}
      loading="lazy"
      // biome-ignore lint/nursery/noJsxPropsBind: necessary to trigger re-render on load
      onLoad={() => setIsLoading(false)}
      referrerPolicy="strict-origin-when-cross-origin"
      src={`https://www.youtube-nocookie.com/embed/${videoId}`}
      title={title}
      width={width}
    />
  );
};

export default LazyYoutubeVideo;
