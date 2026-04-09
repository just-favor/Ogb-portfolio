import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsappButton from './components/WhatsappButton';


export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <About />
           <Projects />
           <Contact />
            <Footer />
            <WhatsappButton />
        </>
    );
}
