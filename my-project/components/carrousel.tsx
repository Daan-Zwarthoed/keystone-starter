import { InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import { DocumentRenderer, DocumentRendererProps } from '@keystone-6/document-renderer';

type CarrouselItem = {
    text: { document: any },
    image: {
        url: string,
        width: string,
        height: string,
    },
    id: string
};

export default function Carrousel({ carrousel }: { carrousel: CarrouselItem[] }) {
    if (carrousel.length > 0 && carrousel[0].image && carrousel[0].text) return (
        <div className="w-screen">
            <h1 id="carrousel">Carrousel</h1>
            <div className="relative w-screen overflow-hidden">
                <div className="w-20 absolute top-1/2 -translate-y-2/4 left-2 z-10 cursor-pointer">
                    <Image src="/images/arrowLeft.png" width="64" height="64" layout="responsive" alt="left arrow" />
                </div>
                <div className="flex flex-row mt-12 w-fit">

                    {carrousel.map(carrouselItem => (
                        <div className="m-1 w-80 flex flex-col items-center" key={carrouselItem.id}>
                            <div className="w-full">
                                <Image className="w-max" src={carrouselItem.image.url} width={carrouselItem.image.width} height={carrouselItem.image.height} layout="responsive" alt="test" />
                            </div>
                            <DocumentRenderer document={carrouselItem.text.document} />
                        </div>
                    ))}

                </div>
                <div className="w-20 absolute top-1/2 -translate-y-2/4 right-2 cursor-pointer">
                    <Image src="/images/arrowRight.png" width="64" height="64" layout="responsive" alt="right arrow" />
                </div>
            </div>
        </div>
    );
    return null;
}