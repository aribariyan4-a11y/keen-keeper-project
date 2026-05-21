"use client";

import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
import { useTimeline } from "@/context/TimelineContext";

const COLORS = {Text: "#7C3AED", Call: "#1D4E4E", Video: "#4ADE80"};

export default function StatsPage() {

    const { timeline } = useTimeline();

    const counts = { Call: 0, Text: 0, Video: 0 };

    timeline.forEach((item) => { if (counts[item.type] !== undefined) {counts[item.type]++;}});

    const chartData = [
        { name: "Text", value: counts.Text },
        { name: "Call", value: counts.Call },
        { name: "Video", value: counts.Video },
    ];

    return (
        <section className="w-11/12 max-w-6xl mx-auto py-10">

            <h1 className="text-4xl font-bold text-black mb-8">
                Friendship Analytics
            </h1>

            <div className="border-2 border-dashed border-blue-400 rounded-2xl p-6">

                <div className="bg-white rounded-xl p-6">

                    <h2 className="text-lg font-semibold text-gray-700 mb-4">
                        By Interaction Type
                    </h2>

                    {timeline.length === 0 ? (
                        <p className="text-gray-400 text-center py-10">
                            No data yet. Start checking in!
                        </p>
                    ) : (

                        <PieChart width={400} height={300}>
                            <Pie data={chartData} cx={200} cy={130} innerRadius={80} outerRadius={120} paddingAngle={3} dataKey="value">
                                {chartData.map((entry) => (
                                    <Cell key={entry.name} fill={COLORS[entry.name]} />
                                ))}
                            </Pie>

                            <Legend />

                        </PieChart>
                    )}

                </div>

            </div>

        </section>
    );
}