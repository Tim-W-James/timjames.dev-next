import HashLink from "@components/HashLink";
import { clsx } from "clsx";
import type TimelineItemData from "../types/timelineData";
import ItemCategory from "./ItemCategory";

type ItemTitleProps = {
  isOddIndex: boolean;
  data: TimelineItemData;
};

const ItemTitle: React.FC<ItemTitleProps> = ({ isOddIndex, data: itemData }) =>
  isOddIndex ? (
    <>
      <h3
        className={clsx(
          "mb-0 text-main-brand uppercase leading-snug",
          "flex-grow",
          "basis-min-content hyphens-none",
        )}
      >
        <HashLink className={clsx("hash-link-right")} fragment={itemData.title}>
          {itemData.title}
        </HashLink>
      </h3>
      <ItemCategory
        className={clsx("text-right text-main-brand")}
        data={itemData}
      />
    </>
  ) : (
    <>
      <ItemCategory
        className={clsx("text-left text-main-brand")}
        data={itemData}
      />
      <h3
        className={clsx(
          "mb-0 text-main-brand uppercase leading-snug",
          "flex-grow",
          "hyphens-none",
        )}
      >
        <HashLink className={clsx("hash-link-left")} fragment={itemData.title}>
          {" "}
          {itemData.title}
        </HashLink>
      </h3>
    </>
  );

export default ItemTitle;
