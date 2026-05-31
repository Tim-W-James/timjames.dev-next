import type technologies from "@data/technologies";
import type { StaticImageData } from "next/image";
import type { JSX } from "react";
import type categories from "../data/categories";

type TimelineItemData = {
  startDate: Date;
  endDate: Date;
  title: string;
  body: JSX.Element;
  thumbnail?: StaticImageData;
  category: keyof typeof categories;
  technologies?: (keyof typeof technologies)[];
  isFeatured?: boolean;
  links?: {
    text: string;
    url: string;
    icon?: JSX.Element;
  }[];
  searchOnly?: boolean;
};

export default TimelineItemData;
