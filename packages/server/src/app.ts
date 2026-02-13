import createApp from "@/lib/create-app.js";
import { configureOpenAPI } from "@/lib/configure-open-api.js";
import index from "@/routes/index.route.js";

const app = createApp();
const routes = [index] as const;

configureOpenAPI(app);

routes.forEach((route) => {
    app.route("/", route);
});

export type AppType = typeof app;
export default app;
