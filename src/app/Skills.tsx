/* eslint-disable max-len */
/** biome-ignore-all lint/complexity/noUselessFragments: Required for custom children */
import Accordion from "@components/Accordion";
import HashLink from "@components/HashLink";
import Tooltip from "@components/Tooltip";
import { ROUTES } from "@constants/routes";
import { clsx } from "clsx";
import Link from "next/link";
import { BsFillFileEarmarkCodeFill, BsFillKanbanFill } from "react-icons/bs";
import { GiTalk } from "react-icons/gi";
import { HiMagnifyingGlassCircle } from "react-icons/hi2";

const Skills: React.FC = () => {
  return (
    <div className={clsx("mx-auto mt-8 flex px-8", "flex-col")}>
      {/** biome-ignore lint/correctness/useUniqueElementIds: explicit fragment */}
      <h2 className={clsx("mb-4 self-center")} id="skills">
        <HashLink fragment="skills">Skills</HashLink>
        <hr className={clsx("radial-border")} />
      </h2>
      <br />
      <section aria-labelledby="skills" className={clsx("text-left text-xl")}>
        <Accordion
          heading="Agile Software Development"
          icon={<BsFillKanbanFill />}
        >
          <>
            Familiar with{" "}
            <Tooltip
              isInverted
              text="Agile"
              tooltip="Set of guiding principles for software development"
            />{" "}
            principles and{" "}
            <Tooltip
              isInverted
              text="CI/CD"
              tooltip="Continuous Integration and Delivery"
            />
            . At{" "}
            <Link
              aria-label="Agile Digital"
              className={clsx("link")}
              href={`${ROUTES.projects.route}?categories=Agile%2520Digital`}
              title="View my projects with Agile Digital"
            >
              Agile Digital
            </Link>
            , I have project experience working with teams using{" "}
            <Tooltip isInverted text="Kanban" tooltip="Agile framework" />. I
            collaborate effectively with other developers, frequently practicing
            pair programming and reviewing{" "}
            <Tooltip isInverted text="PR" tooltip="Pull Request" />
            s. View my contributions on{" "}
            <Link
              aria-label="GitHub"
              className={clsx("link")}
              href="https://github.com/Tim-W-James"
              rel="noreferrer"
              target="_blank"
              title="View my contributions"
            >
              GitHub
            </Link>
            .
          </>
        </Accordion>
        <Accordion
          heading="Attention to Detail"
          icon={<HiMagnifyingGlassCircle />}
        >
          <>
            I strive for a exceptional level of quality in my work and
            proactively seek to improve my craft. I apply my creativity when
            building software, and enjoy collaborating with clients to deliver
            the best possible{" "}
            <Tooltip isInverted text="UX" tooltip="User Experience" />. To
            ensure my work is inclusive, I place an emphasis on accessibility.
          </>
        </Accordion>
        <Accordion heading="Concise Communication" icon={<GiTalk />}>
          <>
            I convey ideas clearly in both written and verbal forms, maintaining
            a{" "}
            <Link
              aria-label="blog"
              className={clsx("link")}
              href={ROUTES.blog.route}
              title="View my blog"
            >
              blog
            </Link>{" "}
            and performing tech talks at{" "}
            <Link
              aria-label="Agile Digital"
              className={clsx("link")}
              href={`${ROUTES.projects.route}?categories=Agile%2520Digital`}
              title="View my projects with Agile Digital"
            >
              Agile Digital
            </Link>
            . On a project with{" "}
            <Link
              aria-label="Toyota Finance Australia"
              className={clsx("link")}
              href={`${ROUTES.projects.route}?reset#Toyota Finance Australia`}
              title="View project details"
            >
              Toyota Finance Australia
            </Link>
            , I demonstrated my ability to work with a client of substantial
            scale. As a spokesperson for an{" "}
            <Link
              aria-label="ANU TechLauncher project"
              className={clsx("link")}
              href={`${ROUTES.projects.route}?reset#Siding Spring Observatory VR Experience`}
              title="View project details"
            >
              ANU TechLauncher project
            </Link>
            , I was granted the award for best pitch.
          </>
        </Accordion>
        <Accordion heading="Quality Code" icon={<BsFillFileEarmarkCodeFill />}>
          <>
            I ensure my code is robust and maintainable by adopting a functional
            programming style. I employ strict typing across the tech stack,
            employ code quality tools like{" "}
            <Link
              aria-label="ESLint"
              className={clsx("link")}
              href="https://www.npmjs.com/package/@tim-w-james/eslint-config"
              rel="noreferrer"
              target="_blank"
              title="View my custom ESLint config"
            >
              ESLint
            </Link>
            , and take a layered approach to testing. I take care to document my
            solutions, and continually address technical debt. By taking
            initiative with{" "}
            <Tooltip isInverted text="DX" tooltip="Developer Experience" />{" "}
            tooling and{" "}
            <Tooltip isInverted text="DevOps" tooltip="Developer Operations" />{" "}
            infrastructure I am able to boost my productivity. See my{" "}
            <Link
              aria-label="core tech stack"
              className={clsx("link")}
              href="#technologies"
              replace
              title="View my tech stack"
            >
              core tech stack
            </Link>
            .
          </>
        </Accordion>
        <hr className={clsx("radial-border mt-6")} />
      </section>
    </div>
  );
};

export default Skills;
