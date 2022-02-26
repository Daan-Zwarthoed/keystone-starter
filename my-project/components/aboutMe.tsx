import Image from 'next/image';
import { DocumentRenderer } from '@keystone-6/document-renderer';
import { query } from '.keystone/api';

type AboutMe = {
    text: { document: any },
    image: {
        url: string,
        width: string,
        height: string,
    },
    id: string
};

export default function AboutMe({ aboutMe }: { aboutMe: AboutMe }) {
    if (aboutMe && aboutMe.image && aboutMe.text) return (
        <div className="m-4">
            <h1 id="over-mij">Over mij</h1>
            <div className="relative w-100% flex flex-row flex-wrap tablet:flex-nowrap overflow-hidden">
                <div className="w-full">
                    <DocumentRenderer document={aboutMe.text.document} />
                </div>
                <div className="w-full">
                    <Image src={aboutMe.image.url} width={aboutMe.image.width} height={aboutMe.image.height} layout="responsive" alt="test" />
                </div>
            </div>
        </div>
    );
    return null
}
