import * as functions from "firebase-functions";
import * as cors from "cors";
import * as express from "express";
import { unsplash } from "./unsplash";

const prodOnly = process.env.NODE_ENV === "production";
const whitelist = [
  "https://react-mfe-shell.web.app",
  "https://art-ruiz-photo-library.web.app",
];

const app = express();
app.use(
  cors({
    origin: prodOnly ? whitelist : "*",
  })
);

app.use("/unsplash", unsplash);

export const api = functions.https.onRequest(app);
