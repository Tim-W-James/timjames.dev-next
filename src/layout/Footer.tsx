import { clsx } from "clsx";
import { cacheLife } from "next/cache";

type FooterProps = {
  /**
   * Whether the footer should be fixed on desktop
   */
  allowFixed?: boolean;
};

/**
 * Footer at the bottom of the page
 */

// biome-ignore lint/suspicious/useAwait: must be async to use cache
const Footer: React.FC<FooterProps> = async ({ allowFixed }) => {
  "use cache";
  cacheLife("days");

  return (
    <>
      <footer
        className={clsx(
          "bg-dark-shades p-4 text-center text-dark-accent",
          "bottom-0 left-0 z-50 w-screen",
          { fixed: Boolean(allowFixed) },
        )}
      >
        © <time>{new Date().getFullYear()}</time> Tim James - ABN 31 445 198 482
      </footer>
      {/* Spacer when the footer is fixed on desktop */}
      {allowFixed ? <div className={clsx("invisible p-4")}>&nbsp;</div> : null}
    </>
  );
};

export default Footer;
