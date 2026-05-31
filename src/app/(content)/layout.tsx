import "@styles/main.scss";
import { clsx } from "clsx";

const RootLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => (
  <div>
    <div
      className={clsx("fixed -z-10 -mt-5 h-screen w-screen bg-dark-shades")}
    />
    <div
      className={clsx("container mx-auto my-10 px-8")}
      /* Force Google to use custom meta description for snippets */
      data-nosnippet
    >
      {children}
    </div>
  </div>
);

export default RootLayout;
