import Button from "@components/buttons/Button";
import ScrollToTopButton from "@components/ScrollToTopButton";
import { ROUTES } from "@constants/routes";
import Timeline from "@features/timeline/components/Timeline";
import timelineData from "@features/timeline/data/timelineData";
import FadeInClient from "@layout/FadeInClient";
import Header from "@layout/Header";
import { clsx } from "clsx";
import { BsGithub } from "react-icons/bs";

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
