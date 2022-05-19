import { Random } from "unsplash-js/dist/methods/photos/types";
import { Image } from "../models/Image.model";

export const transformRandom = (random: Random): Image => {
  const {
    id,
    height,
    width,
    urls: { full, thumb },
    links: { download },
    description: alt,
  } = random;
  const urls = { full, thumb };

  return {
    id,
    alt,
    height,
    width,
    urls,
    download,
  };
};
