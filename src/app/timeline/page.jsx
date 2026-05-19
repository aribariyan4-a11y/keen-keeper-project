import timelineData from "@/data/timeline.json";

export default function TimelinePage() {

    return (

        <section className="py-10 min-h-screen">

            <div className="w-11/12 max-w-5xl mx-auto">

                {/* Heading */}
                <div className="mb-8">

                    <h1 className="text-5xl font-bold text-gray-900">

                        Timeline

                    </h1>

                </div>

                {/* Filter */}
                <div className="mb-8">

                    <select className="select select-bordered w-full max-w-xs bg-white">

                        <option>Filter timeline</option>
                        <option>Call</option>
                        <option>Text</option>
                        <option>Video</option>

                    </select>

                </div>

                {/* Timeline List */}
                <div className="space-y-4">

                    {timelineData.map((item) => (

                        <div
                            key={item.id}
                            className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex items-center gap-4"
                        >

                            {/* Icon */}
                            <div className="text-3xl">

                                {item.type === "call" && "📞"}
                                {item.type === "text" && "💬"}
                                {item.type === "video" && "🎥"}

                            </div>

                            {/* Content */}
                            <div>

                                <h2 className="text-lg font-semibold text-gray-900">

                                    {item.title}

                                </h2>

                                <p className="text-gray-500 text-sm mt-1">

                                    {item.date}

                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}