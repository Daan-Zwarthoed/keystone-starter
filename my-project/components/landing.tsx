import { InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import { DocumentRenderer, DocumentRendererProps } from '@keystone-6/document-renderer';

type Landing = {
    text: { document: any },
    background: {
        url: string,
        width: string,
        height: string,
    },
    id: string
};

export default function Landing({ landing }: { landing: Landing }) {
    if (landing && landing.background && landing.text) return (
        <div className="relative w-screen max-h-screen overflow-hidden">
            <div className="absolute w-fit h-fit bg-red-500/50 p-5 z-10 inset-2/4 -translate-x-2/4 -translate-y-2/4">
                <DocumentRenderer document={landing.text.document} />
            </div>
            <Image className="w-screen" src={landing.background.url} width={landing.background.width} height={landing.background.height} layout="responsive" alt="test" />
        </div>
    );
    return null
}