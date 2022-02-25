import { InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import { DocumentRenderer, DocumentRendererProps } from '@keystone-6/document-renderer';

type CollageItem = {
    text: { document: any },
    image: {
        url: string,
        width: string,
        height: string,
    },
    id: string
};

export default function Collage({ collage }: { collage: CollageItem[] }) {
    if (collage.length > 0 && collage[0].image && collage[0].text) return (
        <div className="m-4">
            <h1 id="collage">Collage</h1>
            <div className="flex flex-row flex-wrap items-center justify-center">
                {collage.map(collageItem => (
                    <div className="m-1 h-full w-80 flex flex-col justify-between items-stretch" key={collageItem.id}>
                        <DocumentRenderer document={collageItem.text.document} />
                        <Image className="w-max" src={collageItem.image.url} width={collageItem.image.width} height={collageItem.image.height} layout="responsive" alt="test" />
                    </div>
                ))}
            </div>
        </div>
    );
    return null;
}