import { PrimeReactPTOptions } from "primereact/api";
import Tailwind from "primereact/passthrough/tailwind";
import { classNames } from "primereact/utils";

export const TailwindComponents: PrimeReactPTOptions = {
  ...Tailwind,
  galleria: {
    ...Tailwind.galleria,
    previousThumbnailButton: {
      className: classNames(
        "self-center flex shrink-0 justify-center items-center overflow-hidden relative",
        "m-2 bg-accentPurple-500/100 text-white w-8 h-8 transition duration-200 ease-in-out rounded-full",
        "hover:bg-accentPurple-500/80 hover:text-white",
        "focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]",
      ),
    },
    nextThumbnailButton: {
      className: classNames(
        "self-center flex shrink-0 justify-center items-center overflow-hidden relative",
        "m-2 bg-accentPurple-500/100 text-white w-8 h-8 transition duration-200 ease-in-out rounded-full",
        "hover:bg-accentPurple-500/80 hover:text-white",
        "focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]",
      ),
    },
    thumbnailContainer: {
      className: classNames("flex flex-row", "p-4"),
    },
    thumbnailItems: {
      className: classNames("flex gap-4"),
    },
  },
};
