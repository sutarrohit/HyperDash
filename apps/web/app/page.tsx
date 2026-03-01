import Header from "@/components/Header";
import NewsFeed from "@/components/NewsFeed";

export default function Home() {
    return (
        <div className='flex min-h-screen items-center justify-center'>
            <main className='flex flex-col min-h-screen w-full border border-yellow-500'>
                <Header />

                <div className='border flex flex-start'>
                    <NewsFeed />
                </div>
            </main>
        </div>
    );
}
