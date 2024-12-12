import { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const ContactPage = () => {
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(email, name, number, message);

        setEmail("");
        setName("");
        setNumber("");
        setMessage("");
    };

    return (
        <section className="py-10 sm:py-12 lg:py-16 bg-black text-white">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-6">
                    <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl text-white">
                        Your questions, Our expertise - Let's talk
                    </h2>
                </div>

                {/* Main Content */}
                <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Global Offices Section */}
                    <div className="col-span-1 space-y-4">
                        <div className="bg-[#1b1b1b] p-4 rounded-lg">
                            <h3 className="text-lg font-semibold">UAE</h3>
                            <p className="text-sm mt-2">
                                Office 501, 05th Floor, Innovation One, DIFC, Dubai, UAE
                            </p>
                        </div>

                        <div className="bg-[#1b1b1b] p-4 rounded-lg">
                            <h3 className="text-lg font-semibold">India</h3>
                            <p className="text-sm mt-2">
                                India Office Nos 206, Parinee I, Veera Desai Road, Andheri West, Mumbai - 400053
                            </p>
                        </div>
                    </div>

                    {/* Contact Us Form Section */}
                    <form
                        onSubmit={onSubmit}
                        className="col-span-2 bg-[#1b1b1b] p-6 rounded-lg space-x-4 ml-60 flex flex-col justify-center"
                    >
                        <div className="grid w-full items-center gap-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                type="text"
                                id="name"
                                placeholder="Your name"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                className="bg-[#2c2c2c] border border-gray-600 text-white"
                                required
                            />
                        </div>

                        <div className="grid w-full items-center gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                type="email"
                                id="email"
                                placeholder="Your email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                className="bg-[#2c2c2c] border border-gray-600 text-white"
                                required
                            />
                        </div>

                        <div className="grid w-full items-center gap-2">
                            <Label htmlFor="tel">Phone Number</Label>
                            <div className="flex border border-gray-600 rounded-md">
                                <span className="flex items-center px-3 bg-[#2c2c2c] border-r border-gray-600">
                                    +971
                                </span>
                                <Input
                                    type="tel"
                                    id="tel"
                                    placeholder="Your phone number"
                                    onChange={(e) => setNumber(e.target.value)}
                                    value={number}
                                    className="bg-[#2c2c2c] text-white border-none"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid w-full items-center gap-2">
                            <Label htmlFor="message">Message</Label>
                            <textarea
                                id="message"
                                placeholder="Your message"
                                onChange={(e) => setMessage(e.target.value)}
                                value={message}
                                className="bg-[#2c2c2c] border border-gray-600 text-white p-3 rounded-md"
                                rows={4}
                                required
                            ></textarea>
                        </div>

                        <button className="w-full h-12 bg-gradient-to-r from-[#3d4957] to-[#282e3a] text-white font-medium rounded-md transition hover:opacity-90">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;


// import { useState } from "react";
// import { Input } from "../ui/input";
// import { Label } from "../ui/label";

// const ContactPage = () => {
//     const [email, setEmail] = useState("");
//     const [number, setNumber] = useState("");
//     const [name, setName] = useState("");

//     const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();

//         console.log(email, name, number);

//         setEmail("");
//         setName("");
//         setNumber("");
//     };

//     return (
//         <section className="py-10 sm:py-16 lg:py-20">
//             <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
//                 <div className="max-w-3xl mx-auto text-center">
//                     <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#dbc7a6] via-[#3d4957] to-[#282e3a]">
//                         Connect with us
//                     </h2>
//                     <p className="max-w-2xl mx-auto mt-4 text-base leading-relaxed text-secondary">
//                         Please visit our Learn section for our{" "}
//                         <a
//                             href="faqs"
//                             className="text-primary underline-offset-4 underline"
//                         >
//                             frequently asked questions
//                         </a>{" "}
//                         on more about Nuqi and investing through our mobile app.
//                         You can share questions about your Nuqi account through
//                         our mobile app.
//                     </p>
//                 </div>
//                 <form
//                     onSubmit={onSubmit}
//                     className="grid md:grid-cols-3 gap-6 md:gap-8 place-items-center mt-10"
//                 >
//                     <div className="grid w-full items-center gap-3">
//                         <Label htmlFor="text">Name</Label>
//                         <Input
//                             type="text"
//                             id="text"
//                             placeholder="Your name"
//                             onChange={(e) => setName(e.target.value)}
//                             value={name}
//                         />
//                     </div>
//                     <div className="grid w-full items-center gap-3">
//                         <Label htmlFor="email">Email</Label>
//                         <Input
//                             type="email"
//                             id="email"
//                             placeholder="Your email"
//                             onChange={(e) => setEmail(e.target.value)}
//                             value={email}
//                             required
//                         />
//                     </div>
//                     <div className="grid w-full items-center gap-3">
//                         <Label htmlFor="tel">Phone number</Label>
//                         <div className="flex border border-gray-300 rounded-md">
//                             <span className="flex items-center border-r px-3">
//                                 +971
//                             </span>
//                             <Input
//                                 type="tel"
//                                 id="tel"
//                                 placeholder="Your phone number"
//                                 className="border-none"
//                                 onChange={(e) => setNumber(e.target.value)}
//                                 value={number}
//                             />
//                         </div>
//                     </div>

//                     <button className="md:col-start-2 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#3d4957,45%,#282e3a,55%,#3d4957)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
//                         Submit
//                     </button>
//                 </form>
//             </div>
//         </section>
//     );
// };

// export default ContactPage;
