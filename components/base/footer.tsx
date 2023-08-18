import va from '@vercel/analytics';

function Footer() {
    return (
        <footer className="w-full text-center">
            Developed with ❤️ by
            <a href="https://twitter.com/Dbgkinggg" target="_blank" rel="noopener noreferrer" className="text-blue-500"
                onClick={() => va.track('FooterLinkClicked', { source: 'Twitter' })}
            >@Dbgkinggg</a>
        </footer>
    );
}

export default Footer;