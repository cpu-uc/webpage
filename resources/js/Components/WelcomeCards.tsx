import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

interface Card {
    Title: string;
    Description: string;
    Images: { original: string }[];
    Icon: any;
    Link: string;
}

interface WelcomeCardsProps {
    handleImageError: () => void;
    Cards: [Card, Card]; // Definir Cards como una tupla de dos objetos Card
}
// Las tarjetas a mostrar en la página de inicio
export default function WelcomeCards({ handleImageError, Cards }: WelcomeCardsProps) {

    return (
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            {Cards.map((card, index) => (
                <a
                    href={card.Link}
                    id="docs-card"
                    className="flex flex-col items-start gap-6 overflow-hidden rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] md:row-span-3 lg:p-10 lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                >
                    <div
                        id="screenshot-container"
                        className="relative flex w-full flex-1 items-stretch"
                    >

                        <ImageGallery
                            items={card.Images}
                            infinite={true}
                            showFullscreenButton={false}
                            showPlayButton={false}
                            showThumbnails={false}
                            showBullets={false}
                            showNav={false}
                            autoPlay={true}
                        />

                        {/*<div className="absolute -bottom-16 -left-16 h-40 w-[calc(100%+8rem)] bg-gradient-to-b from-transparent via-white to-white dark:via-zinc-900 dark:to-zinc-900">
                        </div>*/}
                    </div>

                    <div className="relative flex items-center gap-6 lg:items-end">
                        <div
                            id="docs-card-content"
                            className="flex items-start gap-6 lg:flex-col"
                        >
                            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
                                {card.Icon}
                            </div>

                            <div className="pt-3 sm:pt-5 lg:pt-0">
                                <h2 className="text-xl font-semibold text-black dark:text-white">
                                    {card.Title}
                                </h2>

                                <p className="mt-4 text-sm/relaxed">
                                    {card.Description}
                                </p>
                            </div>
                        </div>

                        <svg
                            className="size-6 shrink-0 stroke-[#FF2D20]"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                            />
                        </svg>
                    </div>
                </a>
            ))}
        </div>
    );
}


        {/*
                    <a
                        href="https://laravel-news.com"
                        className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                    >
                        <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
                            <svg
                                className="size-5 sm:size-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <g fill="#FF2D20">
                                    <path d="M8.75 4.5H5.5c-.69 0-1.25.56-1.25 1.25v4.75c0 .69.56 1.25 1.25 1.25h3.25c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25Z" />
                                    <path d="M24 10a3 3 0 0 0-3-3h-2V2.5a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2V20a3.5 3.5 0 0 0 3.5 3.5h17A3.5 3.5 0 0 0 24 20V10ZM3.5 21.5A1.5 1.5 0 0 1 2 20V3a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 .5.5v17c0 .295.037.588.11.874a.5.5 0 0 1-.484.625L3.5 21.5ZM22 20a1.5 1.5 0 1 1-3 0V9.5a.5.5 0 0 1 .5-.5H21a1 1 0 0 1 1 1v10Z" />
                                    <path d="M12.751 6.047h2a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-2A.75.75 0 0 1 12 7.3v-.5a.75.75 0 0 1 .751-.753ZM12.751 10.047h2a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-2A.75.75 0 0 1 12 11.3v-.5a.75.75 0 0 1 .751-.753ZM4.751 14.047h10a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-10A.75.75 0 0 1 4 15.3v-.5a.75.75 0 0 1 .751-.753ZM4.75 18.047h7.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-7.5A.75.75 0 0 1 4 19.3v-.5a.75.75 0 0 1 .75-.753Z" />
                                </g>
                            </svg>
                        </div>

                        <div className="pt-3 sm:pt-5">
                            <h2 className="text-xl font-semibold text-black dark:text-white">
                                Laravel News
                            </h2>

                            <p className="mt-4 text-sm/relaxed">
                                Laravel News is a community driven
                                portal and newsletter aggregating
                                all of the latest and most important
                                news in the Laravel ecosystem,
                                including new package releases and
                                tutorials.
                            </p>
                        </div>

                        <svg
                            className="size-6 shrink-0 self-center stroke-[#FF2D20]"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                            />
                        </svg>
                    </a>
        */}
