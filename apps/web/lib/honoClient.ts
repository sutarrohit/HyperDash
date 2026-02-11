import { hc } from "hono/client";
import type { AppType } from "../../../packages/server/src/index";

const baseServerUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:4000/";

export const client = hc<AppType>(baseServerUrl, {
    init: {
        credentials: "include"
    }
});
