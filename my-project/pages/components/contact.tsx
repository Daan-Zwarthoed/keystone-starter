import Image from 'next/image';
import { DocumentRenderer } from '@keystone-6/document-renderer';
import ContactForm from './contactForm';

type contact = {
    text: { document: any },
    logo: {
        url: string,
        width: string,
        height: string,
    },
    contactForm: any,
    id: string
};

export default function Contact({ contact }: { contact: contact }) {
    if (contact) return (
        <div className="m-4">
            <h1 id="contact">contact</h1>
            <div className="flex flex-row flex-wrap items-center justify-center">
                <div className="m-1 h-full w-80 flex flex-col justify-between items-stretch">
                    <DocumentRenderer document={contact.text.document} />
                    <Image className="w-max" src={contact.logo.url} width={contact.logo.width} height={contact.logo.height} layout="responsive" alt="test" />
                </div>
                {contact.contactForm &&
                    <ContactForm contactFormExists={contact.contactForm}></ContactForm>
                }
            </div>
        </div>
    );
    return null;
}