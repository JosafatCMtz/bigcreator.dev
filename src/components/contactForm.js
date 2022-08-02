import * as React from 'react'
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm("xwkzeqvj");
    if (state.succeeded) {
        return <p className='text-xl font-subheadline text-smoky-black'>Thank you for contacting us, we will be in contact with you!🫶🏻 🤗</p>;
    }
    return (
        <form onSubmit={handleSubmit}>
            <input id='name' name='name' type="text" placeholder="Your Name" className='text-xl mb-2 rounded-lg w-[540px] bg-cyber-yellow/30 text-smoky-black h-[45px] pl-2' />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <input id='email' name='email' type="email" placeholder="Mail" className='text-xl mb-2 rounded-lg w-[540px]  bg-cyber-yellow/30 text-smoky-black h-[45px] pl-2' />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            <textarea id='message' name="message" className='text-xl mb-2 rounded-lg w-[540px] bg-cyber-yellow/30 text-smoky-black pl-2' rows="3" placeholder="Your message"></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
            <input type="submit" value="Send Message" className='cursor-pointer text-xl mb-2 rounded-lg w-[540px] h-[45px] bg-smoky-black text-cyber-yellow ' disabled={state.submitting} />
        </form>
    );
}
export default ContactForm