import { Request, Response } from "express";
import { Random } from "unsplash-js/dist/methods/photos/types";
import { Image } from "./models/Image.model";
import { transformRandom } from "./util/transform";
import { unsplashApi } from "./util/unsplash-api";

export const random = (request: Request, response: Response) => {
  const count = request.body.count || 5;
  unsplashApi.photos
    .getRandom({ count })
    .then((res) => {
      if (!res.response) return [];

      if (count === 1) return [res.response as Random];

      return [...(res.response as Random[])];
    })
    .then((randoms: Random[]) => {
      const images: Image[] = randoms.map((random) => transformRandom(random));
      response.send(images);
    });
};
