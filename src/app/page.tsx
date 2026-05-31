import Button from "@components/buttons/Button";
import BlogPostsCarouselWrapper from "@features/blog/components/BlogPostsCarouselWrapper";
import FadeInClient from "@layout/FadeInClient";
import ParallaxProviderClient from "@layout/ParallaxProviderClient";
import clsx from "clsx";
import { headers } from "next/headers";
import { getSelectorsByUserAgent } from "react-device-detect";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import AboutMe from "./AboutMe";
import CoreTechnologies from "./CoreTechnologies";
import MajorProjects from "./MajorProjects";
import styles from "./page.module.scss";
import Skills from "./Skills";
import SocialLinks from "./SocialLinks";

const Home: React.FC = async () => {
  const headersList = headers();
  const userAgent = (await headersList).get("user-agent") || "";
  const { isMobile: isDeviceMobile, isMobileSafari } =
    getSelectorsByUserAgent(userAgent);

  return (
    <ParallaxProviderClient>
      <div
        className={clsx("text-center")}
        /* Force Google to use custom meta description for snippets */
        data-nosnippet
      >
        <FadeInClient transitionDuration={400}>
          <header
            className={clsx(
              "flex place-content-center items-center",
              "flex-col",
              isDeviceMobile
                ? isMobileSafari
                  ? ""
                  : styles._textAlignmentMobile
                : styles._textAlignment,
            )}
          >
            {/** biome-ignore lint/correctness/useUniqueElementIds: explicit fragment */}
            <h1
              className={clsx(isMobileSafari ? "mt-32" : "mt-20")}
              id="timjames"
            >
              <span>
                <span className={clsx("rounded-lg", "bg-dark-shades")}>
                  👋 Hello,
                </span>
                <br />
                <span className={clsx("rounded-lg", "bg-dark-shades")}>
                  I&apos;m{" "}
                  <b className={clsx("text-light-accent")}>Tim James</b>
                </span>
                <hr className={clsx("radial-border")} />
                <span className={clsx("rounded-lg", "bg-dark-shades")}>
                  Full-Stack Developer
                </span>
              </span>
            </h1>
          </header>
        </FadeInClient>
        <main>
          <FadeInClient transitionDuration={400}>
            <SocialLinks />
          </FadeInClient>
          <CoreTechnologies />
          <div
            className={clsx(
              isDeviceMobile ? "mobile-solid-background" : "solid-background",
            )}
          >
            <div className={clsx("container mx-auto pt-8")}>
              <FadeInClient transitionDuration={400}>
                <AboutMe />
                <BlogPostsCarouselWrapper />
                <MajorProjects />
                <Skills />
                <div className={clsx("mt-8 flex justify-center")}>
                  <Button
                    icon={<BsFillArrowRightCircleFill />}
                    iconRight
                    isLight
                    label="Contact Me"
                    mode="route"
                    to="/contact"
                    tooltip="Get in touch"
                  />
                </div>
              </FadeInClient>
            </div>
            <div className={clsx("pb-16")} />
          </div>
        </main>
      </div>
    </ParallaxProviderClient>
  );
};

export default Home;
