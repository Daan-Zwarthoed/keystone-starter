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
    return (
        <div className="fixed top-0 left-0 w-screen bg-red-400 h-12 p-2 flex flex-row justify-between">
            <div className="flex flex-row">
                {header.logo &&
                    <div className="h-full block w-32 relative" >
                        <Image src={header.logo.url} width={header.logo.width} height={header.logo.height} layout='fill'
                            objectFit='contain' objectPosition="left" alt="test" />
                    </div>
                }
                {header.text.document &&
                    <DocumentRenderer document={header.text.document} />
                }
            </div>
            <nav>
                <ul>
                    {header.nav.map(navItem => (
                        <div className="m-1 w-80 flex flex-col center" key={navItem}>
                            {navItem}
                        </div>
                    ))}
                </ul>
            </nav>
        </div>
    );
}