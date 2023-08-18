import { Web3Button } from '@web3modal/react';
import Image from 'next/image';
import Link from 'next/link';

function NavBar() {
    return (
        <header className="absolute top-0 w-full flex justify-between py-4 px-4">
            <Link href="/" className="flex gap-x-3">
                <Image
                    width={50}
                    height={50}
                    src="logo.svg"
                    alt="logo"
                    className="my-auto"
                />
                <div className="text-xl md:text-2xl font-bold my-auto text-white">L2 Summer</div>
            </Link>
            <Web3Button />
        </header>
    );
}

export default NavBar;