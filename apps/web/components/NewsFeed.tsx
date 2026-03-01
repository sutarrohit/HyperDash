"use client";

import { useState } from "react";
import { NewsCard } from "@/components/NewsCard";
import { SkeletonCard } from "./SkeletonCard";
import { useNews } from "@/hooks/use-news";
import { NewsCategory } from "@/types";
import { AlertCircle } from "lucide-react";

const NewsFeed = () => {
    const [category, setCategory] = useState<NewsCategory>("general");
    const [searchQuery, setSearchQuery] = useState("");
    const { data, isLoading, isError } = useNews(category);

    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mt-10'>
            {isError && (
                <div className='bg-bg-panel border border-accent-red rounded p-4 flex items-center text-accent-red mb-6 font-mono text-sm'>
                    <AlertCircle className='h-4 w-4 mr-3' />
                    <p>ERR_FETCH_FAILED: Unable to load news stream.</p>
                </div>
            )}

            {isLoading ? (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                    {Array.from({ length: 8 }).map((_, i) => (
                        <SkeletonCard key={i} />
                    ))}
                </div>
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                    {data?.data?.map((article) => (
                        <NewsCard key={article.id} article={article} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default NewsFeed;
