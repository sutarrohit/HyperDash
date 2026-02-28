// import { createRoute } from "@hono/zod-openapi";
// import { z } from "@hono/zod-openapi";
// import * as HttpStatusCodes from "@/constants/http-status-codes.js";
// import { jsonContent } from "stoker/openapi/helpers";
// import { createRouter } from "@/lib/create-app.js";

// const NewsArticleSchema = z.object({
//     id: z.string(),
//     headline: z.string(),
//     summary: z.string(),
//     source: z.string(),
//     url: z.string(),
//     image: z.string(),
//     datetime: z.number(),
//     category: z.string(),
//     related: z.string()
// });

// const router = createRouter();

// router.openapi(
//     createRoute({
//         tags: ["news"],
//         method: "get",
//         path: "/news",
//         request: {
//             query: z.object({
//                 category: z.enum(["general", "forex", "crypto", "merger"]).default("general")
//             })
//         },
//         responses: {
//             [HttpStatusCodes.OK]: jsonContent(NewsArticleSchema.array(), "Array of news articles")
//         }
//     }),
//     async (c) => {
//         const { category } = c.req.valid("query");
//         const articles = await finnhubService.getMarketNews(category);
//         return c.json(articles, HttpStatusCodes.OK);
//     }
// );

// export default router;
