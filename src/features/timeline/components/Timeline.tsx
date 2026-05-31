import { clsx } from "clsx";
import { useMemo } from "react";
import type TimelineItemData from "../types/timelineData";
import styles from "./Timeline.module.scss";
import TimelineItem from "./TimelineItem";

// Adapted from: https://www.florin-pop.com/blog/2019/04/how-to-create-a-timeline-with-react/

type TimelineProps = {
  data: TimelineItemData[];
  filterFunc?: (
    value: TimelineItemData,
    index: number,
    array: TimelineItemData[],
  ) => boolean;
  sortFunc?: (a: TimelineItemData, b: TimelineItemData) => number;
};

/**
 * Displays a timeline of items
 */
const Timeline: React.FC<TimelineProps> = ({
  data: timelineData,
  filterFunc = (value) => value,
  sortFunc = () => 0,
}) => {
  const filteredTimelineData = useMemo(
    () =>
      timelineData
        .filter(filterFunc)
        .sort((a, b) => {
          const endComparison = b.endDate.getTime() - a.endDate.getTime();
          const startComparison = b.startDate.getTime() - a.startDate.getTime();
          return endComparison === 0 ? startComparison : endComparison;
        })
        .sort(sortFunc)
        .map((itemData, index) => (
          <TimelineItem
            data={itemData}
            hasTwoColumns
            index={index}
            key={`${itemData.title}-${itemData.startDate.getTime()}-${itemData.endDate.getTime()}`}
          />
        )),
    [filterFunc, sortFunc, timelineData],
  );

  return filteredTimelineData.length > 0 ? (
    <>
      <hr className={clsx("radial-border", "border-2", "max-md:hidden")} />
      <div className={clsx(styles._timelineContainer, styles._twoColumns)}>
        {filteredTimelineData}
      </div>
    </>
  ) : (
    <div className={clsx("mb-8 text-center text-xl")}>
      <span className={clsx("text-danger")}>No Projects Found</span> - Try a
      different filter
    </div>
  );
};

export default Timeline;
