import { clsx } from "clsx";
import Image from "next/image";
import type TimelineItemData from "../types/timelineData";

type ItemThumbnailProps = {
  data: TimelineItemData;
  isOddIndex: boolean;
};

const ItemThumbnail: React.FC<ItemThumbnailProps> = ({
  data: itemData,
  isOddIndex,
}) =>
  itemData.thumbnail ? (
    <Image
      alt={itemData.title}
      className={clsx(
        "xl:w-1/3",
        "xl:basis-content",
        isOddIndex ? "xl:order-1" : "max-xl:mb-4 max-xl:ml-auto max-xl:w-auto",
      )}
      placeholder="blur"
      src={itemData.thumbnail}
    />
  ) : null;

export default ItemThumbnail;
