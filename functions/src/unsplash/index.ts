import * as express from "express";
import { random, search } from "./random";
import "./util/global-fetch";

export const unsplash = express();

unsplash.post("/random", random);
unsplash.post("/search", search);
