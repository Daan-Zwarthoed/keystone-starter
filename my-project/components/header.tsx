import { DocumentRenderer } from '@keystone-6/document-renderer';
import Image from 'next/image';

type Header = {
    id: string;
    logo: {
        url: string,
        width: string,
        height: string,
    },
    text: { document: any },
    nav: string[]
};

export default function Header({ header }: { header: Header }) {
    if (header.logo || header.text || header.nav.length) return (
        <div className="fixed z-50 top-0 left-0 w-screen bg-red-400 h-12 p-2 flex flex-row justify-between">
            <div className="flex flex-row">
                {header.logo &&
                    <div className="h-full block w-32 relative" >
                        <Image src={header.logo.url} layout='fill'
                            objectFit='contain' objectPosition="left" alt="logo" />
                    </div>
                }
                {header.text.document &&
                    <DocumentRenderer document={header.text.document} />
                }
            </div>
            <nav className="flex justify-center">
                <ul className="flex flex-row align-center w-80">
                    {header.nav.map(navItem => (
                        <li id={"-" + navItem} className="mr-4 flex items-center cursor-pointer" onClick={(event) => {
                            const titel = document.getElementById((event.target as any).id.slice(1)) as HTMLElement;
                            if (titel) scrollTo({ behavior: "smooth", top: titel.offsetTop - 50 });
                        }} key={navItem}>
                            {(navItem.charAt(0).toUpperCase() + navItem.slice(1)).replace("-", " ")}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
    return null;
}