import { client } from "./honoClient";
import type { NewsArticle, PaginatedResponse, NewsCategory } from "@/types";

export const newsApi = {
    getNews: async (category: NewsCategory = "general", page: number = 1, limit: number = 20) => {
        const response = await client.api.v1.news.$get({
            query: { category, page, limit }
        });

        if (!response.ok) throw new Error("Failed to fetch news");
        return response.json() as Promise<PaginatedResponse<NewsArticle>>;
    },

    getNewsDetail: async (id: string) => {
        const response = await client.api.v1.news[":id"].$get({
            param: { id }
        });

        if (!response.ok) throw new Error("Failed to fetch news detail");
        return response.json() as Promise<NewsArticle | null>;
    },

    getCompanyNews: async (symbol: string, days: number = 7) => {
        const response = await client.api.v1.ticker[":symbol"].$get({
            param: { symbol },
            query: { days: String(days) }
        });

        if (!response.ok) throw new Error("Failed to fetch company news");
        return response.json() as Promise<NewsArticle[]>;
    }
};
