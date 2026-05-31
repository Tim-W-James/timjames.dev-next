import HashLink from "@components/HashLink";
import { ROUTES } from "@constants/routes";
import FadeInClient from "@layout/FadeInClient";
import Header from "@layout/Header";
import { clsx } from "clsx";
import type { Metadata } from "next";
import Link from "next/link";
import type { JSX } from "react";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SiSpotify, SiSteam } from "react-icons/si";

export const metadata: Metadata = {
  title: ROUTES.contact.title,
  description: ROUTES.contact.description,
  alternates: {
    canonical: ROUTES.contact.route,
  },
};

type SocialLinkProps = {
  icon: JSX.Element;
  body?: string;
  url: `https://${string}`;
  tooltip: string;
};

const SocialLink: React.FC<SocialLinkProps> = ({
  icon,
  body,
  url,
  tooltip,
}) => (
  <Link
    aria-label={body}
    href={url}
    rel="noreferrer"
    target="_blank"
    title={tooltip}
  >
    <div
      className={clsx(
        "hover:text-light-accent active:text-dark-accent active:underline",
        "inline-flex",
        "items-center gap-1",
      )}
    >
      {icon}
      <p className={clsx("hyphens-none")}>{body}</p>
    </div>
  </Link>
);

const Contact = () => {
  return (
    <>
      <Header title={ROUTES.contact.title} />
      <main>
        <div>
          <FadeInClient transitionDuration={200}>
            {/** biome-ignore lint/correctness/useUniqueElementIds: explicit fragment */}
            <h2
              className={clsx("mx-auto mt-8 w-fit self-center text-center")}
              id="social-links"
            >
              <HashLink fragment="social-links">Social Links </HashLink>
              <hr className={clsx("radial-border mb-4")} />
            </h2>
            <section
              aria-labelledby="social-links"
              className={clsx(
                "mx-auto mt-8 grid w-fit gap-4 self-center text-center text-xl",
                "grid-cols-2",
              )}
            >
              <SocialLink
                body="LinkedIn"
                icon={<BsLinkedin />}
                tooltip="timothy-william-james"
                url="https://www.linkedin.com/in/timothy-william-james/"
              />
              <SocialLink
                body="GitHub"
                icon={<BsGithub />}
                tooltip="Tim-W-James"
                url="https://github.com/Tim-W-James"
              />
              <SocialLink
                body="Twitter"
                icon={<FaXTwitter />}
                tooltip="@TimWJames"
                url="https://twitter.com/TimWJames"
              />
              <SocialLink
                body="Facebook"
                icon={<BsFacebook />}
                tooltip="TimJames9800"
                url="https://www.facebook.com/TimJames9800/"
              />
              <SocialLink
                body="Steam"
                icon={<SiSteam />}
                tooltip="ExplosiveFridge"
                url="https://steamcommunity.com/id/ExplosiveFridge"
              />
              <SocialLink
                body="Spotify"
                icon={<SiSpotify />}
                tooltip="TimJ"
                url="https://open.spotify.com/user/22xzbbohotkdpq5wfipvefk4y"
              />
            </section>
            <div
              className={clsx("mt-4 text-center text-xl", "basis-min-content")}
            >
              <MdEmail /> Send me an email:{" "}
              <Link
                className={clsx("link", "hyphens-none")}
                href="mailto:tim.james.work9800@gmail.com"
                rel="noreferrer"
                target="_blank"
                title="tim.james.work9800@gmail.com"
              >
                tim.james.work9800@gmail.com
              </Link>
            </div>
            <div
              className={clsx("mt-4 text-center text-xl", "basis-min-content")}
            >
              ABN:{" "}
              <Link
                className={clsx("link", "hyphens-none")}
                href="https://abr.business.gov.au/ABN/View?id=31445198482"
                rel="noreferrer"
                target="_blank"
                title="ABN Lookup"
              >
                31 445 198 482
              </Link>
            </div>
          </FadeInClient>
        </div>
      </main>
    </>
  );
};

export default Contact;
