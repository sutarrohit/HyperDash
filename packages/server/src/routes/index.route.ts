import { createRoute } from "@hono/zod-openapi";
import * as HttpStatusCodes from "@/constants/http-status-codes.js";
import { jsonContent } from "stoker/openapi/helpers";
import { createMessageObjectSchema } from "stoker/openapi/schemas";

import { createRouter } from "@/lib/create-app.js";

const router = createRouter();

router.openapi(
    createRoute({
        tags: ["Index"],
        method: "get",
        path: "/",
        responses: {
            [HttpStatusCodes.OK]: jsonContent(createMessageObjectSchema("Tasks API"), "Tasks API Index")
        }
    }),
    (c) => {
        return c.json(
            {
                message: "Tasks API"
            },
            HttpStatusCodes.OK
        );
    }
);

export default router;
