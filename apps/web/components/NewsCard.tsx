import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { NewsArticle } from "@/types";
import { timeAgo } from "@/lib/utils";
import Image from "next/image";

const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
        case "general":
            return "text-blue-500";
        case "crypto":
            return "text-orange-500";
        case "forex":
            return "text-green-500";
        case "merger":
            return "text-red-500";
        default:
            return "text-primary";
    }
};

export function NewsCard({ article }: { article: NewsArticle }) {
    return (
        <Card
            size='sm'
            className='relative w-full max-w-sm cursor-pointer transition-colors duration-200 hover:bg-ring/30 flex flex-col'
        >
            <CardHeader>
                <CardTitle>
                    <p className='flex justify-between w-full'>
                        <span
                            className={`font-bold text-xs uppercase tracking-widest ${getCategoryColor(article.category)}`}
                        >
                            {article?.category}
                        </span>
                        <span className='text-[10px] text-sidebar-ring uppercase font-bold '>{article?.source}</span>
                    </p>
                </CardTitle>
            </CardHeader>
            <CardContent className='flex flex-col flex-1'>
                <div className='flex flex-col flex-1 gap-4'>
                    <p className='text-sm font-medium line-clamp-3 leading-snug'>{article?.summary}</p>
                    <div className='flex justify-between items-center mt-auto pt-3 border-t border-border-subtle/50 w-full'>
                        <span className='text-[10px] font-mono text-sidebar-ring'>{timeAgo(article.datetime)}</span>
                        <div className='flex items-center space-x-1'>
                            <div className='w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse' />
                            <span className='text-[10px] text-green-400 uppercase'>Live</span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
