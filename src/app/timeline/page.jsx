"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function TimelinePage() {

    const [timelineData, setTimelineData] = useState([]);

    useEffect(() => {

        const storedTimeline =
            JSON.parse(localStorage.getItem("timeline")) || [];

        setTimelineData(storedTimeline);

    }, []);

    return (

        <section className="w-11/12 max-w-6xl mx-auto py-10">

            {/* Heading */}
            <div className="mb-8">

                <h1 className="text-4xl font-bold text-black">

                    Timeline

                </h1>

                <p className="text-gray-500 mt-2">

                    Track all your friendship interactions.

                </p>

            </div>

            {/* Empty State */}
            {
                timelineData.length === 0 && (

                    <div className="bg-white rounded-2xl p-10 text-center shadow-sm border border-gray-100">

                        <h2 className="text-2xl font-bold text-gray-700">

                            No Timeline Found

                        </h2>

                        <p className="text-gray-500 mt-2">

                            Start checking in with your friends.

                        </p>

                    </div>
                )
            }

            {/* Timeline Cards */}
            <div className="space-y-4">

                {
                    timelineData.map((item) => (

                        <div
                            key={item.id}
                            className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex items-center justify-between"
                        >

                            {/* Left */}
                            <div className="flex items-center gap-4">

                                {/* Icon */}
                                <div className="bg-gray-100 p-3 rounded-full">

                                    {
                                        item.type === "Call" && (
                                            <Image
                                                src="/images/call.png"
                                                alt="call"
                                                width={20}
                                                height={20}
                                            />
                                        )
                                    }

                                    {
                                        item.type === "Text" && (
                                            <Image
                                                src="/images/text.png"
                                                alt="text"
                                                width={20}
                                                height={20}
                                            />
                                        )
                                    }

                                    {
                                        item.type === "Video" && (
                                            <Image
                                                src="/images/video.png"
                                                alt="video"
                                                width={20}
                                                height={20}
                                            />
                                        )
                                    }

                                </div>

                                {/* Title */}
                                <div>

                                    <h2 className="font-bold text-lg text-black">

                                        {item.title}

                                    </h2>

                                    <p className="text-gray-500 text-sm">

                                        {item.date}

                                    </p>

                                </div>

                            </div>

                            {/* Type Badge */}
                            <div>

                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">

                                    {item.type}

                                </span>

                            </div>

                        </div>
                    ))
                }

            </div>

        </section>
    );
}