import { clsx } from "clsx";

const Header: React.FC<{ title: string }> = ({ title }) => (
  <header
    className={clsx(
      "mx-auto flex place-content-center items-center",
      "px-8 text-center",
      "flex-col",
    )}
  >
    <h1 className={clsx("font-bold text-light-accent")} id={title}>
      {title}
      <hr className={clsx("radial-border")} />
    </h1>
  </header>
);

export default Header;
