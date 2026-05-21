"use client";
import { useState } from "react";
import Image from "next/image";
import { useTimeline } from "@/context/TimelineContext";

export default function TimelinePage() {

    const { timeline } = useTimeline();
    const [timelineData, setTimelineData] = useState([]);
    const [filter, setFilter] = useState("All");

    const filteredTimeline = filter === "All" ? timeline : timeline.filter(
        (item) => item.type === filter
    );

    return (

        <section className="w-11/12 max-w-6xl mx-auto py-10">

            <div className="mb-8">

                <h1 className="text-4xl font-bold text-black">
                    Timeline
                </h1>

                {/* <p className="text-gray-500 mt-2">
                    dropdown menu
                </p> */}
                <select value={filter} onChange={(e) => setFilter(e.target.value)}
                    className="border border-gray-300 rounded-xl px-4 py-2 text-gray-800 bg-white focus:outline-none">
                        <option value="All">All</option>
                        <option value="Call">Call</option>
                        <option value="Text">Text</option>
                        <option value="Video">Video</option>
                </select>
            </div>

            {timeline.length === 0 && (

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

            <div className="space-y-4">

                {filteredTimeline.map((item) => (

                    <div key={item.id} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex items-center justify-between">

                        <div className="flex items-center gap-4">

                            <div className="bg-gray-100 p-3 rounded-full">

                                {item.type === "Call" && (
                                    <Image src="/images/call.png" alt="call" width={20} height={20} />
                                )
                                }

                                {
                                    item.type === "Text" && (
                                        <Image src="/images/text.png" alt="text" width={20} height={20} />
                                    )
                                }

                                {
                                    item.type === "Video" && (
                                        <Image src="/images/video.png" alt="video" width={20} height={20} />
                                    )
                                }

                            </div>

                            <div>

                                <h2 className="font-bold text-lg text-black">
                                    {item.title}
                                </h2>

                                <p className="text-gray-500 text-sm">
                                    {item.date}
                                </p>

                            </div>

                        </div>

                    </div>
                ))
                }

            </div>

        </section>
    );
};