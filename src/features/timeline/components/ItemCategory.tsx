import Link from "next/link";
import categories from "../data/categories";
import type TimelineItemData from "../types/timelineData";

type ItemCategoryProps = {
  data: TimelineItemData;
  className: string;
};

const ItemCategory: React.FC<ItemCategoryProps> = ({
  data: itemData,
  className,
}) => {
  const { link } = categories[itemData.category];
  const hasLink = link !== undefined;
  return hasLink ? (
    <Link
      className={className}
      href={link}
      rel="noreferrer"
      target="_blank"
      title={itemData.category}
    >
      {itemData.category}
    </Link>
  ) : (
    <span className={className}>{itemData.category}</span>
  );
};

export default ItemCategory;
