import { Basic, Random } from "unsplash-js/dist/methods/photos/types";
import { Image } from "../models/Image.model";

export const transformToImage = (random: Random | Basic): Image => {
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
