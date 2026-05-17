

export default function SummaryCards() {

    const summaryData = [
        {
            id: 1,
            title: "Total Friends",
            value: "10"
        },
        {
            id: 2,
            title: "On Track",
            value: "3"
        },
        {
            id: 3,
            title: "Need Attention",
            value: "6"
        },
        {
            id: 4,
            title: "Interactions This Month",
            value: "12"
        },
    ];

    return (

        <section className="pb-14">

            <div className="w-11/12 max-w-5xl mx-auto">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 shadow-xl">

                    {summaryData.map((card) => (

                        <div key={card.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <h2 className="text-3xl font-bold text-center text-green-900">
                                {card.value}
                            </h2>

                            <p className="text-gray-500 font-semibold mt-2 text-center">
                                {card.title}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}