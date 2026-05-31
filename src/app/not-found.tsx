import Button from "@components/buttons/Button";
import { clsx } from "clsx";
import { BsFillHouseDoorFill } from "react-icons/bs";

const NotFound: React.FC = () => (
  <div>
    <div
      className={clsx("fixed -z-10 -mt-5 h-screen w-screen bg-dark-shades")}
    />
    <div className={clsx("mt-8 text-center")}>
      {/** biome-ignore lint/correctness/useUniqueElementIds: explicit fragment */}
      <h1 className={clsx("font-bold text-8xl text-light-accent")} id="404">
        404
      </h1>
      <h2>
        <span className={clsx("text-danger")}>Oops!</span> Page not found.
      </h2>
      <h3>The page you&apos;re looking for doesn&apos;t exist.</h3>
      <br />
      <div className="flex items-center justify-center">
        <Button
          icon={<BsFillHouseDoorFill />}
          isLight
          label="Return Home"
          mode="route"
          to="/"
          tooltip="Return to the homepage"
        />
      </div>
    </div>
  </div>
);

export default NotFound;
