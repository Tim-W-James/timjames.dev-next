import Divider from "@layout/Divider";
import { clsx } from "clsx";
import Link from "next/link";
import type TimelineItemData from "../types/timelineData";

type ItemLinksListProps = {
  data: TimelineItemData;
  isOddIndex: boolean;
};

const ItemLinksList: React.FC<ItemLinksListProps> = ({
  data: itemData,
  isOddIndex,
}) =>
  itemData.links ? (
    <>
      <Divider isReversed={!isOddIndex} label="Links" />

      <section aria-label="Links">
        {itemData.links.map((link, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: Static array
          <span key={index}>
            {index !== itemData.links?.length && index !== 0 ? " - " : ""}
            <Link
              className={clsx("link")}
              href={link.url}
              rel="noreferrer"
              target="_blank"
              title={link.text}
            >
              {link.icon ? <>{link.icon} </> : ""}
              {link.text}
            </Link>
          </span>
        ))}
      </section>
    </>
  ) : null;

export default ItemLinksList;
