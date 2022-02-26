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

const handleClick = (left: boolean) => {
    const carrousel = document.querySelector(".carrousel")
    if (!carrousel?.children.length) return;
    if (left) {
        const lastChild =
            carrousel.children[carrousel.children.length - 1];
        lastChild.classList.remove("w-80");
        lastChild.classList.add("w-0");
        carrousel.prepend(lastChild);
        setTimeout(() => {
            lastChild.classList.add("w-80");
            lastChild.classList.remove("w-0");
        });
    } else {
        for (let index = 0; index < carrousel.children.length; index++) {
            if (carrousel.children[index].classList.contains("w-80")) {
                const element = carrousel.children[index];
                index = 100000;
                element.classList.remove("w-80");
                element.classList.add("w-0");
                const clone = element.cloneNode(true) as Element;
                carrousel.appendChild(clone);
                clone.classList.remove("w-0");
                clone.classList.add("w-80");
                setTimeout(() => {
                    carrousel.removeChild(element);
                }, 1500);
            }
        }
    }
}

export default function Carrousel({ carrousel }: { carrousel: CarrouselItem[] }) {
    if (carrousel.length <= 0) return null;
    if (carrousel[0].image && carrousel[0].text) return (
        <div className="w-screen">
            <h1 id="carrousel">Carrousel</h1>
            <div className="relative w-screen overflow-hidden h-max">
                <div className="w-20 absolute top-1/2 -translate-y-2/4 left-2 z-10 cursor-pointer" onClick={() => handleClick(true)}>
                    <Image src="/images/arrowLeft.png" width="64" height="64" layout="responsive" alt="left arrow" />
                </div>
                <div className="carrousel flex flex-row w-fit -translate-x-72 tablet:-translate-x-40">
                    {carrousel.map(carrouselItem => (
                        <div className="w-80 flex flex-col items-center" style={{ transition: "1.5s" }} key={carrouselItem.id}>
                            <div className="w-full px-1 h-40 overflow-hidden">
                                <Image className="w-max h-max" src={carrouselItem.image.url} width={carrouselItem.image.width} height={carrouselItem.image.height} layout="responsive" alt="test" />
                            </div>
                            <div className="w-80 overflow-hidden">
                                <DocumentRenderer document={carrouselItem.text.document} />
                            </div>
                        </div>
                    ))}

                </div>
                <div className="w-20 absolute top-1/2 -translate-y-2/4 right-2 cursor-pointer" onClick={() => handleClick(false)}>
                    <Image src="/images/arrowRight.png" width="64" height="64" layout="responsive" alt="right arrow" />
                </div>
            </div>
        </div>
    );
    return null;
}