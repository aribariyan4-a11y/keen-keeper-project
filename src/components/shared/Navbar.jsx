'use client';
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {

    const pathname = usePathname();

    return (
        <nav className="bg-white shadow-sm">
            <div className="w-11/12 max-w-7xl mx-auto flex items-center justify-between py-3">


                {/* Logo */}
                <div>
                    <Image
                        src="/images/logo.png"
                        alt="keen keeper logo"
                        height={110}
                        width={110}
                    />
                </div>

                {/* Navigation Links */}
                <div className="flex items-center gap-3">

                    <Link href="/" className={`flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300

                            ${pathname === "/"
                            ? "bg-green-700 text-white"
                            : "text-gray-600 hover:bg-gray-100"}
                            `}>

                        <Image
                            src="/images/home.png"
                            alt="home"
                            height={18}
                            width={18}
                        />
                        <span>Home</span>
                    </Link>

                    <Link href="/timeline" className={`flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300

                            ${pathname === "/timeline"
                            ? "bg-green-700 text-white"
                            : "text-gray-600 hover:bg-gray-100"}
                            `}>

                        <Image
                            src="/images/clock.png"
                            alt="clock-icon"
                            height={18}
                            width={18}
                        />
                        <span>Timeline</span>
                    </Link>

                    <Link href="/stats" className={`flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300

                        ${pathname === "/stats"
                            ? "bg-green-700 text-white"
                            : "text-gray-600 hover:bg-gray-100"}
                        `}>
                        <Image
                            src="/images/Vector.png"
                            alt="stats icon"
                            height={18}
                            width={18}
                        />
                        <span>Stats</span>
                    </Link>

                </div>
            </div>
        </nav >
    );
}