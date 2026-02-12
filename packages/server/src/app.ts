import { OpenAPIHono } from "@hono/zod-openapi";
import { notFound, onError, pinoLogger } from "./middlewares/index.js";
import { PinoLogger } from "hono-pino";

import { config } from "dotenv";
import { expand } from "dotenv-expand";

expand(config());

export interface AppBinding {
    Variables: {
        logger: PinoLogger;
    };
}

const app = new OpenAPIHono<AppBinding>();

app.use(pinoLogger());

app.get("/users", (c) => {
    return c.json([
        { id: 1, name: "Rohit" },
        { id: 2, name: "Alex" }
    ]);
});

app.post("/users", async (c) => {
    const body = await c.req.json();
    return c.json({ success: true, user: body });
});

app.get("/error", () => {
    throw new Error("This is a test error");
});

app.notFound(notFound);
app.onError(onError);

export type AppType = typeof app;
export default app;
