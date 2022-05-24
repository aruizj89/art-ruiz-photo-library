import { Request, Response } from "express";
import { Random } from "unsplash-js/dist/methods/photos/types";
import { SearchParams } from "unsplash-js/dist/methods/search";
import { Photos } from "unsplash-js/dist/methods/search/types/response";
import { Image } from "./models/Image.model";
import { transformToImage } from "./util/transform";
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
      const images: Image[] = randoms.map((random) => transformToImage(random));
      response.send(images);
    })
    .catch((e) => response.status(500).send(e));
};

export const search = (request: Request, response: Response) => {
  const { page, perPage, query } = request.body;

  if (page === null || page === undefined) {
    response.status(401).send({ message: "Missing [page] in the body." });
    return;
  }
  if (typeof page !== "number" || page < 0) {
    response.status(401).send({
      message: "Invalid [page] value, must be a number greater than -1.",
    });
    return;
  }

  if (perPage === null || perPage === undefined) {
    response.status(401).send({ message: "Missing [perPage] in the body." });
    return;
  }
  if (typeof perPage !== "number" || perPage < 1) {
    response.status(401).send({
      message: "Invalid [perPage] value, must be a number greater than 0.",
    });
    return;
  }

  if (!query) {
    response.status(401).send({ message: "Missing [page] in the body" });
    return;
  }

  const searchParams: SearchParams = {
    query,
    page,
    perPage,
  };
  unsplashApi.search
    .getPhotos(searchParams)
    .then(({ response: searchResponse }) => {
      if (!searchResponse) {
        response.send([]);
        return;
      }
      const {
        results,
        total,
        total_pages: totalPages,
      } = searchResponse as Photos;
      const images: Image[] = results.map((result) => transformToImage(result));
      response.send({ images, total, totalPages });
    });
};
