import { OpenAPIHono } from "@hono/zod-openapi";
import { notFound, onError, pinoLogger } from "@/middlewares/index.js";
import { AppBinding } from "./types.js";
import { defaultHook } from "stoker/openapi";

export function createRouter() {
    return new OpenAPIHono<AppBinding>({ strict: false, defaultHook });
}

export default function createApp() {
    const app = createRouter();
    app.use(pinoLogger());

    app.notFound(notFound);
    app.onError(onError);

    return app;
}
