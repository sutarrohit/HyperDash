import { Hono } from "hono";

const app = new Hono()
  .get("/users", (c) => {
    return c.json([
      { id: 1, name: "Rohit" },
      { id: 2, name: "Alex" },
    ]);
  })
  .post("/users", async (c) => {
    const body = await c.req.json();
    return c.json({ success: true, user: body });
  });

export type AppType = typeof app;
export default {
  port: 4000,
  fetch: app.fetch,
};
