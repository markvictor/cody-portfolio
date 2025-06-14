export default function Loading() {
    return (
        <>
            <header className="w-full bg-center bg-cover h-200 -mt-21 animate-pulse">
                <div className="flex items-center justify-center w-full h-full bg-gray-600/50">
                    <div className="text-center max-w-600px m-auto">
                        <div className="tags flex items-center justify-center gap-4 animate-pulse">
                            <div className="py-1 px-4 rounded-full mb-16 w-20 h-8 bg-[#ccc] animate-pulse m-auto"></div>
                        </div>
                        <h1 className="text-white mb-4 w-160 h-11 bg-[#ccc] rounded-sm animate-pulse m-auto"></h1>
                        <p className="text-white w-100 h-6 bg-[#ccc] rounded-sm animate-pulse m-auto"></p>
                    </div>
                </div>
            </header>
            <section className="border-b-1 border-gray-300 py-8 text-center sm:flex sm:items-center sm:justify-center sm:gap-x-12 w-full m-auto">
                <div className="my-2 animate-pulse w-50 h-4 bg-[#ddd]"></div>
                <div className="my-2 animate-pulse w-100 h-4 bg-[#ddd]"></div>
                <div className="my-2 animate-pulse w-50 h-4 bg-[#ddd]"></div>
            </section>
        </>
    );
}
