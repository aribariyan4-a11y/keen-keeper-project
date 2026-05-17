import Link from "next/link";
import Image from "next/image"

export default function Footer() {
    return (
        <footer className="bg-green-900 text-white py-10 px-6 text-center">

            {/* Logo */}
            <h2 className="text-6xl text-white font-bold mb-2">
                Keen Keeper
            </h2>

            {/* Tagline */}
            <p className="text-gray-300 text-xl mb-6">
                Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
            </p>

            {/* Social Links */}
            <p className="text-xl font-semibold mb-3">Social Links</p>
            <div className="flex justify-center gap-4 mb-8">

                {/* YouTube */}
                <a href="" target="_blank" className="bg-white text-green-900 w-9 h-9 rounded-full flex items-center justify-center hover:opacity-80">
                    <Image
                        src="/images/instagram.png"
                        alt="instagram icon"
                        width={40}
                        height={40}
                    />
                </a>

                {/* Facebook */}
                <a href="https://facebook.com" target="_blank" className="bg-white text-green-900 w-9 h-9 rounded-full flex items-center justify-center hover:opacity-80">
                    <Image
                        src="/images/facebook.png"
                        alt="facebook icon"
                        width={40}
                        height={40}
                    />
                </a>

                {/* Twitter/X */}
                <a href="https://x.com" target="_blank" className="bg-white text-green-900 w-9 h-9 rounded-full flex items-center justify-center hover:opacity-80">
                    <Image
                        src="/images/twitter.png"
                        alt="twitter icon"
                        width={40}
                        height={40}
                    />
                </a>

            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-green-700 pt-4 text-sm text-gray-400">
                <span>© 2026 KeenKeeper. All rights reserved.</span>
                <div className="flex gap-4">
                    <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-white">Terms of Service</Link>
                    <Link href="/cookies" className="hover:text-white">Cookies</Link>
                </div>
            </div>

        </footer>
    );
}