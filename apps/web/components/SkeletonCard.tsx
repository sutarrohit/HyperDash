export function SkeletonCard() {
    return (
        <div className='flex flex-col bg-bg-panel border border-border-subtle rounded p-4 h-32 animate-pulse'>
            <div className='flex justify-between items-center mb-3'>
                <div className='h-3 bg-border-strong rounded w-1/4' />
                <div className='h-3 bg-border-strong rounded w-1/5' />
            </div>

            <div className='space-y-2 flex-1'>
                <div className='h-4 bg-border-strong rounded w-full' />
                <div className='h-4 bg-border-strong rounded w-5/6' />
            </div>

            <div className='flex justify-between items-center mt-auto pt-3 border-t border-border-subtle/50'>
                <div className='h-2 bg-border-strong rounded w-1/6' />
                <div className='h-2 bg-border-strong rounded w-1/12' />
            </div>
        </div>
    );
}
