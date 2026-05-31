import HashLink from "@components/HashLink";
import { NAV_ROUTES } from "@constants/routes";
import technologies from "@data/technologies";
import FadeInClient from "@layout/FadeInClient";
import { clsx } from "clsx";
import { headers } from "next/headers";
import Link from "next/link";
import { getSelectorsByUserAgent } from "react-device-detect";

const CoreTechnologies: React.FC = async () => {
  const headersList = headers();
  const userAgent = (await headersList).get("user-agent") || "";
  const { isMobile: isDeviceMobile } = getSelectorsByUserAgent(userAgent);

  return (
    <div
      className={clsx(
        "mx-auto mt-8 flex max-w-xl place-content-center items-center",
        isDeviceMobile ? "mobile-solid-background" : "solid-background",
        "flex-col",
      )}
    >
      <FadeInClient transitionDuration={200}>
        {/** biome-ignore lint/correctness/useUniqueElementIds: explicit fragment */}
        <h2 id="technologies">
          <HashLink fragment="technologies">Core Technologies</HashLink>
          <hr className={clsx("radial-border")} />
        </h2>
        <br />
        <section
          aria-labelledby="technologies"
          className={clsx(
            "flex place-content-center items-center gap-4 text-xl",
            "flex-row",
            "flex-wrap",
          )}
        >
          {Object.entries(technologies)
            .filter(([_, value]) => value.isCore)
            .map(([key, value], index) => (
              <Link
                className={clsx(
                  "inline-flex",
                  "items-center",
                  "hover:text-light-accent active:text-dark-accent",
                  "active:underline",
                )}
                href={`${NAV_ROUTES.projects.route}?${new URLSearchParams({
                  technologies: key.toLowerCase(),
                }).toString()}`}
                // biome-ignore lint/suspicious/noArrayIndexKey: Static array
                key={index}
                title={`View all my projects that use ${key}`}
              >
                {value.icon ? (
                  <>
                    {value.icon}
                    {/** biome-ignore lint/style/useConsistentCurlyBraces: Special char */}
                    {"\u00A0"}
                  </>
                ) : null}
                {key}
              </Link>
            ))}
        </section>
      </FadeInClient>
    </div>
  );
};

export default CoreTechnologies;
