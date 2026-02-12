import { Scalar } from "@scalar/hono-api-reference";
import { AppOpenAPI } from "./types.js";
import packageJSON from "../../package.json" with { type: "json" };

export function configureOpenAPI(app: AppOpenAPI) {
    app.doc("/doc", {
        openapi: "3.0.0",
        info: {
            version: packageJSON.version,
            title: "Hyperdash API"
        }
    });

    app.get(
        "/scalar",

        Scalar({ url: "/doc", theme: "kepler" })
    );
}
