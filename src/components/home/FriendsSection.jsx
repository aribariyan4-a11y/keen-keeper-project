import friends from "@/data/friend.json";

import FriendCard from "./FriendCard";

export default function FriendsSection() {

    return (

        <section className="pb-20">

            <div className="w-11/12 max-w-7xl mx-auto">

                {/* Section Heading */}
                <div className="mb-10">

                    <h2 className="text-4xl font-bold text-gray-900 text-center">

                        Your Friends

                    </h2>

                </div>

                {/* Friends Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {friends.map((friend) => (

                        <FriendCard
                            key={friend.id}
                            friend={friend}
                        />

                    ))}

                </div>

            </div>

        </section>
    );
}