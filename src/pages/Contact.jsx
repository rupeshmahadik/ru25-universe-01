import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,      // replace with your actual EmailJS service ID
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,     // replace with your template ID
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY       // replace with your public key
            )
            .then(
                (result) => {
                    console.log(result.text);
                    // alert("Message sent successfully 🚀");
                    toast.success("🚀 Message sent successfully!");
                    form.current.reset();
                },
                (error) => {
                    console.log(error.text);
                    // alert("Oops! Something went wrong 😬");
                    toast.error("😬 Oops! Something went wrong.");
                }
            );
    };

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">📡 Contact</h1>

            <form ref={form} onSubmit={sendEmail} className="w-full max-w-md space-y-4">
                <input type="text" name="from_name" placeholder="Your Name" required className="w-full p-3 rounded bg-white text-black" />
                <input type="email" name="reply_to" placeholder="Your Email" required className="w-full p-3 rounded bg-white text-black" />
                <textarea name="message" rows="4" placeholder="Your Message" required className="w-full p-3 rounded bg-white text-black" />
                <button type="submit" className="planet-button">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;
