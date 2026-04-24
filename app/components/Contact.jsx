import ScrollReveal from "./Scrollreveal";
import { HiMail } from "react-icons/hi"

export default function Contact() {

    return (<div className="" id="contact">
            <ScrollReveal>
        <section className="py-16 bg-[#2d3e50] text-white border-b border-white">
            <div className="max-w-[1600px] mx-auto px-10">
                <div className="text-center mb-12 flex flex-col items-center">
                    <h2 className="text-4xl font-bold text-white">Get In Touch</h2>
                    <p className="mt-5 text-lg font-medium">I'm always open to new opportunities and collaborations. Feel free to reach out via email or connect on social media.</p>

                    <button>
            <a href="mailto:favourogbewe@yahoo.com" className="flex items-center mt-10 px-5 py-2 bg-white text-black rounded-lg hover:bg-white/90 transition duration-300">
              <HiMail className="mr-2 h-5 w-5" /> Email Me
            </a>
          </button>
                </div>
            </div>
        </section>
            </ScrollReveal>
            </div>
    );
}
