"use client";

import { use, useState } from "react";
import Image from "next/image";
import friends from "@/data/friend.json";
import { toast } from "react-toastify";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { GoArchive } from "react-icons/go";
import { MdDeleteSweep } from "react-icons/md";
import { useTimeline } from "@/context/TimelineContext";

export default function FriendDetailsPage({ params }) {
    const resolvedParams = use(params);


    const [timeline, setTimeline] = useState([]);

    const singleFriend = friends.find(
        (friend) => friend.id === parseInt(resolvedParams.id)
    );

    const { addTimeline } = useTimeline();
    const handleInteraction = (type) => {

        const newTimeline = {
            id: Date.now(),
            type: type,
            friend: singleFriend.name,
            date: new Date().toLocaleDateString(),
            title: `${type} with ${singleFriend.name}`,
        };

        addTimeline(newTimeline);

        toast.success(`${type} added to timeline`);
    };

    if (!singleFriend) {
        return (
            <div className="py-20 text-center text-3xl font-bold">
                Friend Not Found
            </div>
        );
    }

    return (

        <section>

            <div className="w-11/12 max-w-7xl mx-auto mt-5">

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                    <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 mb-2">

                        <div>

                            <Image src={singleFriend.picture} alt={singleFriend.name} width={50} height={50}
                                className="mx-auto rounded-2xl object-cover" />

                            <h1 className="text-4xl font-bold text-gray-900 mt-6 text-center">
                                {singleFriend.name}
                            </h1>

                            <div className="mt-5 text-center">

                                <span
                                    className={`px-4 py-2 rounded-full text-sm font-medium
                                    
                                    ${singleFriend.status === "overdue" && "bg-red-700 text-white"}
                                    ${singleFriend.status === "almost due" && "bg-yellow-500 text-white"}
                                    ${singleFriend.status === "on-track" && "bg-green-800 text-white"} `}>
                                    {singleFriend.status}

                                </span>

                            </div>

                            <div className="flex justify-center flex-wrap gap-2 mt-6">

                                {singleFriend.tags.map((tag, index) => (

                                    <span key={index} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                                        {tag}
                                    </span>

                                ))}

                            </div>

                            <p className="text-gray-500 mt-3 text-center">
                                {singleFriend.email}
                            </p>

                            <p className="text-gray-600 leading-7 mt-6 text-center">
                                {singleFriend.bio}
                            </p>

                        </div>

                        <div className="grid grid-cols-1 gap-3 mt-8">

                            <button className="btn bg-gray-200 hover:bg-gray-300 border-none rounded-xl">

                                <RiNotificationSnoozeLine size={18} />
                                Snooze 2 Weeks
                            </button>

                            <button className="btn bg-gray-200 hover:bg-gray-300 border-none rounded-xl">
                                <GoArchive />
                                Archive
                            </button>

                            <button className="btn bg-red-100 hover:bg-red-200 text-red-700 border-none rounded-xl">
                                <MdDeleteSweep /> Delete

                            </button>

                        </div>

                    </div>

                    <div className="lg:col-span-2 space-y-4">

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">

                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">

                                <h2 className="text-4xl font-bold mt-3 text-center text-green-800">
                                    {singleFriend.days_since_contact}
                                </h2>

                                <h3 className="text-gray-500 text-center">
                                    Days Since Contact
                                </h3>

                            </div>

                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">

                                <h2 className="text-4xl font-bold mt-3 text-center text-green-800">
                                    {singleFriend.goal} Days
                                </h2>

                                <h3 className="text-gray-500 text-center">
                                    Goal
                                </h3>

                            </div>

                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">

                                <h2 className="text-2xl font-bold mt-3 text-center text-green-800">
                                    {singleFriend.next_due_date}
                                </h2>

                                <h3 className="text-gray-500 text-center">
                                    Next Due Date
                                </h3>

                            </div>

                        </div>

                        <div className="bg-gray-100 p-8 rounded-xl">

                            <div className="flex justify-between items-center">

                                <h2 className="font-bold text-black text-xl">
                                    Relationship Goal
                                </h2>

                                <button className="btn">Edit</button>

                            </div>

                            <p className="mt-2 text-gray-600">

                                Connect every{" "}

                                <span className="text-black font-semibold">
                                    {singleFriend.goal} days
                                </span>

                            </p>

                        </div>

                        {/* Quick Check-In */}
                        <div className="bg-gray-100 p-4 rounded-xl">

                            <div>

                                <h2 className="mb-5 text-xl font-bold text-black">
                                    Quick Check-In
                                </h2>

                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-5">

                                <button onClick={() => handleInteraction("Call")} className="btn bg-white rounded-xl py-6 border-none hover:bg-green-100">

                                    <Image src="/images/call.png" alt="call icons" height={18} width={18} />
                                    Call
                                </button>

                                <button onClick={() => handleInteraction("Text")} className="btn bg-white rounded-xl py-6 border-none hover:bg-blue-100">

                                    <Image src="/images/text.png" alt="text icons" height={18} width={18} />
                                    Text
                                </button>

                                <button onClick={() => handleInteraction("Video")} className="btn bg-white rounded-xl py-6 border-none hover:bg-purple-100" >

                                    <Image src="/images/video.png" alt="video icons" height={18} width={18} />
                                    Video
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};