import * as functions from "firebase-functions";
import * as cors from "cors";
import * as express from "express";
import { unsplash } from "./unsplash";

const app = express();
app.use(
  cors({
    origin: [
      "https://react-mfe-shell.web.app",
      "https://art-ruiz-photo-library.web.app",
    ],
  })
);

app.use("/unsplash", unsplash);

export const api = functions.https.onRequest(app);
