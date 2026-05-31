"use client";
import { clsx } from "clsx";
import {
  domAnimation,
  LazyMotion,
  m,
  useAnimation,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { isSafari } from "react-device-detect";
import type TimelineItemData from "../types/timelineData";
import ItemLinksList from "./ItemLinksList";
import ItemTechnologyList from "./ItemTechnologyList";
import ItemThumbnail from "./ItemThumbnail";
import ItemTitle from "./ItemTitle";
import styles from "./Timeline.module.scss";

const itemAnimationVariants = {
  visible: {
    opacity: 1,
    rotateX: 0,
    "--rotation-offset": "0deg",
    transition: { duration: 0.25 },
  },
  hidden: {
    opacity: 0,
    rotateX: -50,
    "--rotation-offset": "180deg",
  },
};

type TimelineItemProps = {
  data: TimelineItemData;
  index: number;
  hasTwoColumns: boolean;
};

const TimelineItem: React.FC<TimelineItemProps> = ({
  data: itemData,
  index,
  hasTwoColumns,
}) => {
  const control = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);
  const isOddIndex = index % 2 === 0 && hasTwoColumns;

  useEffect(() => {
    if (isInView || isSafari) {
      // biome-ignore lint/nursery/noFloatingPromises: framer-motion animation control
      control.start("visible");
    } else {
      // biome-ignore lint/nursery/noFloatingPromises: framer-motion animation control
      control.start("hidden");
    }
  }, [control, isInView]);

  return (
    <section
      aria-label={itemData.title}
      className={clsx(styles._timelineItem, {
        // biome-ignore lint/style/noNonNullAssertion: untyped CSS
        [styles._twoColumns!]: hasTwoColumns,
      })}
      id={itemData.title}
    >
      <div>
        <LazyMotion features={domAnimation}>
          <m.div
            animate={control}
            className={clsx(styles._timelineItemContent)}
            initial="hidden"
            ref={ref}
            variants={itemAnimationVariants}
          >
            <div
              className={clsx(
                "flex w-full gap-2",
                isOddIndex ? "flex-wrap" : "flex-wrap-reverse",
                isOddIndex ? "justify-start" : "justify-end",
              )}
            >
              <ItemTitle data={itemData} isOddIndex={isOddIndex} />
            </div>
            <h4 className={clsx("text-main-brand")}>
              <time>
                {itemData.startDate.getFullYear()}
                {itemData.startDate.getFullYear() ===
                itemData.endDate.getFullYear()
                  ? ` - ${itemData.endDate.getFullYear()}`
                  : ""}
              </time>
            </h4>
            <div className={clsx("items-center", "xl:flex", "xl:gap-4")}>
              <ItemThumbnail data={itemData} isOddIndex={isOddIndex} />
              <p className={clsx("hyphens-none")}>{itemData.body}</p>
            </div>
            <ItemTechnologyList data={itemData} isOddIndex={isOddIndex} />
            <ItemLinksList data={itemData} isOddIndex={isOddIndex} />
          </m.div>
        </LazyMotion>
        <span className={clsx(styles._circle)} />
      </div>
    </section>
  );
};

export default TimelineItem;
