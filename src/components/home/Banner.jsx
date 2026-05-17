import React from 'react';

const BannerPage = () => {
    return (
        <div className='bg-white'>
            <section className="py-10">
                <div className="w-11/12 max-w-6xl mx-auto text-center">
                    {/* front lien */}
                    <h1 className="font-bold text-5xl">Friends to keep close in your life</h1>
                    <p className="mt-4">Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                        relationships that matter most.</p>
                    <div className="">
                        <button className="btn mt-3 bg-green-800 text-white rounded-xl">
                            <span className="font-bold text-xl text-center">+ </span>
                            Add a Friend</button>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default BannerPage;