import Button from "@components/buttons/Button";
import { clsx } from "clsx";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

const SocialLinks: React.FC = () => (
  <section
    aria-label="Social Links"
    className={clsx(
      "mx-auto mt-4 flex max-w-xl items-center justify-around gap-4",
      "flex-row",
    )}
  >
    <Button
      icon={<BsLinkedin />}
      isLight
      label="Linkedin"
      shrinkLabelOnMobile
      to="https://www.linkedin.com/in/timothy-william-james/"
      tooltip="Find me on Linkedin"
    />
    <Button
      icon={<FaXTwitter />}
      isIconOnly
      isLight
      label="X (Twitter)"
      to="https://twitter.com/TimWJames"
      tooltip="Follow me on X (Twitter) @TimWJames"
    />
    <Button
      icon={<BsGithub />}
      isLight
      label="GitHub"
      shrinkLabelOnMobile
      to="https://github.com/Tim-W-James"
      tooltip="Find my projects on GitHub"
    />
  </section>
);

export default SocialLinks;
