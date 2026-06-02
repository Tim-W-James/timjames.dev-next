import Button from "@components/buttons/Button";
import ScrollToTopButton from "@components/ScrollToTopButton";
import { ROUTES } from "@constants/routes";
import Timeline from "@features/timeline/components/Timeline";
import timelineData from "@features/timeline/data/timelineData";
import FadeInClient from "@layout/FadeInClient";
import Header from "@layout/Header";
import { clsx } from "clsx";
import type { Metadata } from "next";
import { BsGithub } from "react-icons/bs";

export const metadata: Metadata = {
  title: ROUTES.projects.title,
  description: ROUTES.projects.description,
  alternates: {
    canonical: ROUTES.projects.route,
  },
};

const Projects: React.FC = () => {
  return (
    <>
      <Header title={ROUTES.projects.title} />
      <main>
        <FadeInClient transitionDuration={200}>
          <div className={clsx("mb-8 flex justify-center")}>
            <Button
              icon={<BsGithub />}
              isLight
              label="GitHub"
              to="https://github.com/Tim-W-James"
              tooltip="Find more projects on GitHub"
            />
          </div>
          {/** biome-ignore lint/correctness/useUniqueElementIds: explicit fragment */}
          <section aria-label="Timeline" className={clsx("mb-8")} id="timeline">
            <h2 className={clsx("sr-only")}>Timeline</h2>
            <Timeline data={timelineData} />
            <div className={clsx("flex justify-center")}>
              <ScrollToTopButton />
            </div>
          </section>
        </FadeInClient>
      </main>
    </>
  );
};

export default Projects;
