import * as express from "express";
import { random } from "./random";
import "./util/global-fetch";

export const unsplash = express();

unsplash.post("/random", random);
