import Button from "@components/buttons/Button";
import HashLink from "@components/HashLink";
import { NAV_ROUTES } from "@constants/routes";
import Timeline from "@features/timeline/components/Timeline";
import timelineData from "@features/timeline/data/timelineData";
import type TimelineItemData from "@features/timeline/types/timelineData";
import { clsx } from "clsx";
import { useCallback } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const MajorProjects: React.FC = () => {
  const featuredFilter = useCallback(
    (item: TimelineItemData) => Boolean(item.isFeatured),
    [],
  );

  return (
    <div className={clsx("mb-8")}>
      <div
        className={clsx(
          "mx-auto flex place-content-center items-center px-8",
          "flex-col",
        )}
      >
        {/** biome-ignore lint/correctness/useUniqueElementIds: explicit fragment */}
        <h2 className={clsx("mt-8 mb-0 max-md:mb-4")} id="projects">
          <HashLink fragment="projects">Major Projects</HashLink>
          <hr className={clsx("radial-border hidden max-md:block")} />
        </h2>
      </div>
      <section aria-labelledby="projects">
        <Timeline data={timelineData} filterFunc={featuredFilter} />
        <div className={clsx("flex justify-center")}>
          <Button
            icon={<BsFillArrowRightCircleFill />}
            iconRight
            isLight
            label="More Projects"
            mode="route"
            to={`${NAV_ROUTES.projects.route}?reset`}
            tooltip="View more projects"
          />
        </div>
      </section>
    </div>
  );
};

export default MajorProjects;
