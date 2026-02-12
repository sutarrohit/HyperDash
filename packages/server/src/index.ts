import app from "./app.js";

export type AppType = typeof app;
export default {
    port: 4000,
    fetch: app.fetch
};
