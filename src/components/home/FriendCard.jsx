import Image from "next/image";
import Link  from 'next/link';

export default function FriendCard({ friend }) {

    const { name, picture, days_since_contact, status, tags } = friend;

    return (
        <Link href={`/friends/${friend.id}`}>
            <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md">

                <Image
                    src={picture}
                    alt={name}
                    width={50}
                    height={50}
                    className="mx-auto mb-1.5"
                />

                <h2 className="text-2xl text-center font-bold text-gray-900 mb-3">
                    {name}
                </h2>

                <p className="text-gray-500 text-center mb-4">
                    {days_since_contact}d ago
                </p>

                <div className="flex flex-wrap gap-2 justify-center">

                    {tags.map((tag, index) => (
                        <span key={index} className="bg-green-100 text-green-900 px-3 py-1 rounded-full text-sm">
                            {tag}
                        </span>
                    ))}

                </div>
                <div className="mt-4 text-center">

                    <span
                        className={`px-3 py-1 rounded-full text-sm font-medium
                        
                        ${status === "overdue" && "bg-red-700 text-white"}
                        ${status === "almost due" && "bg-yellow-500 text-white"}
                        ${status === "on-track" && "bg-green-800 text-white"}`}>

                        {status}

                    </span>

                </div>

            </div>
        </Link>
    );
}