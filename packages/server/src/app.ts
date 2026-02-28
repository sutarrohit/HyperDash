import createApp from "@/lib/create-app.js";
import { configureOpenAPI } from "@/lib/configure-open-api.js";
import newsRouter from "./routes/news/news.index.js";

const app = createApp();
const routes = [newsRouter] as const;

configureOpenAPI(app);

routes.forEach((route) => {
  app.route("/api/v1", route);
});

export type AppType = typeof app;
export default app;
