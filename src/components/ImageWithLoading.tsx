import { clsx } from "clsx";
import Image from "next/image";

const ImageWithLoading: React.FC<
  React.ComponentProps<typeof Image> & { borderClassNames?: string }
> = ({ borderClassNames, ...props }) => (
  <div
    className={clsx(
      "relative mb-0 overflow-hidden",
      "border",
      borderClassNames ? borderClassNames : "rounded-xl border-dark-accent",
    )}
  >
    <div
      aria-hidden
      className={clsx(
        "pointer-events-none absolute inset-0",
        "animate-pulse bg-dark-accent/20",
      )}
    />
    <Image
      {...props}
      className={clsx(
        "relative z-10 block h-auto w-full text-center",
        props.className,
      )}
      placeholder="empty"
    />
  </div>
);

export default ImageWithLoading;
