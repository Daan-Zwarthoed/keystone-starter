import Image from 'next/image';
import { DocumentRenderer } from '@keystone-6/document-renderer';
import { query } from '.keystone/api';
// import { context } from '.keystone/carrousels';

import type { KeystoneContext } from '@keystone-6/core/types';

function handleSubmit(event: any) {
    event.preventDefault()
    console.log(event);
    console.log(event.target.name.value);


    // query.ContactForm.createOne({
    //     data: {
    //         name: event.target.name.value,
    //         email: event.target.email.value,
    //         message: event.target.message.value,
    //     },
    //     query: 'id name email message',
    // });
}

export default function ContactForm({ contactFormExists }: { contactFormExists: any }) {
    if (contactFormExists) return (
        <div className="m-4">
            <form className="flex flex-col" onSubmit={(event) => handleSubmit(event)}>
                <label htmlFor="name">Naam:</label>
                <input className="border-solid border-2" type="text" id="name" name="name" />
                <label htmlFor="email">Email:</label>
                <input className="border-solid border-2" type="text" id="email" name="email" />
                <label htmlFor="message">Bericht:</label>
                <textarea className="border-solid border-2" id="message" name="message" />
                <button>Verstuur bericht</button>
            </form>
        </div>
    );
    return null;
}