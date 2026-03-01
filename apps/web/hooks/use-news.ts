import { useQuery } from "@tanstack/react-query";
import { newsApi } from "@/lib/api";
import type { NewsCategory } from "@/types";

export function useNews(
  category: NewsCategory = "general",
  page: number = 1,
  limit: number = 20,
) {
  return useQuery({
    queryKey: ["news", category, page, limit],
    queryFn: () => newsApi.getNews(category, page, limit),
    staleTime: 5 * 60 * 1000,
  });
}

export function useNewsDetail(id: string) {
  return useQuery({
    queryKey: ["news", "detail", id],
    queryFn: () => newsApi.getNewsDetail(id),
    staleTime: 5 * 60 * 1000,
    enabled: !!id,
  });
}

export function useCompanyNews(symbol: string, days: number = 7) {
  return useQuery({
    queryKey: ["company-news", symbol, days],
    queryFn: () => newsApi.getCompanyNews(symbol, days),
    staleTime: 5 * 60 * 1000,
    enabled: !!symbol,
  });
}
