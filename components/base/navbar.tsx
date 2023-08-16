import { Web3Button } from '@web3modal/react';

function NavBar() {
    return (
        <header className="absolute top-0 w-full flex justify-between py-4 px-4">
            <div className="text-xl">L2 Summer</div>
            <Web3Button />
        </header>
    );
}

export default NavBar;