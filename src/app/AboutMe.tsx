import HashLink from "@components/HashLink";
import FadeInClient from "@layout/FadeInClient";
import { clsx } from "clsx";
import Link from "next/link";
import CredlyBadges from "./CredlyBadges";

const AboutMe: React.FC = () => {
  const badgeIds = [
    "3e2a7963-2ea9-43c4-8550-fac792692b36",
    "389f3969-b65b-4dd3-8df8-537dcb794bca",
    "23372af0-4d55-41e9-a3a3-7d3d55c380fc",
  ] as const;

  return (
    <div
      className={clsx(
        "mx-auto mb-8 flex place-content-center items-center px-8",
        "flex-col",
      )}
    >
      <FadeInClient transitionDuration={200}>
        {/** biome-ignore lint/correctness/useUniqueElementIds: explicit fragment */}
        <h2 id="about">
          <HashLink fragment="about">About Me</HashLink>
          <hr className={clsx("radial-border")} />
        </h2>
        <br />
        <section
          aria-labelledby="about"
          className={clsx("flex", "flex-col", "gap-4")}
        >
          <ul className={clsx("list-disc text-left text-xl")}>
            <li>
              {}💼 <b className={clsx("font-bold")}>Senior Software Engineer</b>{" "}
              at{" "}
              <Link
                aria-label="Agile Digital"
                className={clsx("link")}
                href="https://github.com/agiledigital"
                rel="noreferrer"
                target="_blank"
                title="Agile Digital Website"
              >
                Agile Digital
              </Link>{" "}
              since 2021
            </li>
            <li>
              🎓{" "}
              <b className={clsx("font-bold")}>
                Bachelor of Information Technology{" "}
              </b>
              at the{" "}
              <Link
                aria-label="Australian National University"
                className={clsx("link")}
                href="https://www.anu.edu.au/"
                rel="noreferrer"
                target="_blank"
                title="ANU"
              >
                Australian National University
              </Link>
            </li>
            <li>
              🗺️ Located in{" "}
              <Link
                aria-label="Canberra, Australia"
                className={clsx("link")}
                href="https://www.google.com.au/maps/place/Canberra+ACT"
                rel="noreferrer"
                target="_blank"
                title="Location"
              >
                Canberra, Australia
              </Link>
            </li>
            <li>
              📫 How to reach me:{" "}
              <Link
                className={clsx("link")}
                href="mailto:tim.james.work9800@gmail.com"
                rel="noreferrer"
                target="_blank"
                title="tim.james.work9800@gmail.com"
              >
                tim.james.work9800@gmail.com
              </Link>
            </li>
            <li>🏢 Baseline security clearance and police check (2026)</li>
            <li>
              💻 Member of the{" "}
              <Link
                aria-label="ACS"
                className={clsx("link")}
                href="https://www.acs.org.au/"
                rel="noreferrer"
                target="_blank"
                title="Australian Computer Society"
              >
                Australian Computer Society
              </Link>
            </li>
            <li>
              🏆 View my certifications on{" "}
              <Link
                aria-label="Credly"
                className={clsx("link")}
                href="https://www.credly.com/users/timjames/badges"
                rel="noreferrer"
                target="_blank"
                title="Certifications"
              >
                Credly
              </Link>
            </li>
          </ul>
          <CredlyBadges badgeIds={badgeIds} />
        </section>
      </FadeInClient>
    </div>
  );
};

export default AboutMe;
