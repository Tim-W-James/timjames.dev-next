import technologies from "@data/technologies";
import Divider from "@layout/Divider";
import { clsx } from "clsx";
import Link from "next/link";
import type TimelineItemData from "../types/timelineData";

type ItemTechnologyListProps = {
  data: TimelineItemData;
  isOddIndex: boolean;
};

const ItemTechnologyList: React.FC<ItemTechnologyListProps> = ({
  data: itemData,
  isOddIndex,
}) =>
  itemData.technologies ? (
    <>
      <Divider isReversed={!isOddIndex} label="Technologies" />

      <section aria-label="Technologies">
        {itemData.technologies.map((technology, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: Static array
          <span key={index}>
            {" "}
            <Link
              className={clsx("inline-flex", "items-center")}
              href={technologies[technology].link}
              rel="noreferrer"
              target="_blank"
              title={technology}
            >
              {technologies[technology].icon ? (
                <>
                  {technologies[technology].icon}
                  {/** biome-ignore lint/style/useConsistentCurlyBraces: special char */}
                  {"\u00A0"}
                </>
              ) : null}
              {technology}
              {index < (itemData.technologies?.length ?? 0) - 1 ? "," : ""}
            </Link>
          </span>
        ))}
      </section>
    </>
  ) : null;

export default ItemTechnologyList;
