import { Nullable } from "unsplash-js/dist/helpers/typescript";

export interface Image {
  id: string;
  alt: Nullable<string>;
  download: string;
  height: number;
  width: number;
  urls: {
    full: string;
    thumb: string;
  };
}
