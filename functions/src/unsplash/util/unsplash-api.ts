import { createApi } from "unsplash-js";

const accessKey = process.env.UNSPLASH_ACCESS_KEY || "";

export const unsplashApi = createApi({ accessKey });
