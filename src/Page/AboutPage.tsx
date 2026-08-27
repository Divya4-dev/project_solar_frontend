import Header from "../components/Header/Header";
import Navbar from "../components/NavBar/NavBar";
import SsbDetail from "../components/SsbDetail/SsbDetail";
import WhatWeOffer from "../components/WhatWeOffer/WhatWeOffer";
import AboutStats from "../components/AboutStats/AboutStats";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";
import WhatsAppButton from "../components/WhatsAppButton/WhatsAppButton";

const AboutPage = () => {
    return (
        <>
            <Header />
            <Navbar />
            {/* Reusable Detailing of the SSB Section */}
            <div style={{ padding: '85px 0 100px', backgroundColor: '#ffffff' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                    <SsbDetail />
                </div>
            </div>
            <WhatWeOffer />
            <AboutStats />
            <Testimonials />
            <div style={{ height: '60px', backgroundColor: '#ffffff' }} />
            <Footer />
            <WhatsAppButton />
        </>
    );
};

export default AboutPage;
