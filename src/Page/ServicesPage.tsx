import Header from "../components/Header/Header";
import Navbar from "../components/NavBar/NavBar";
import ServiceDetail from "../components/ServiceDetail/ServiceDetail";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import Footer from "../components/Footer/Footer";
import WhatsAppButton from "../components/WhatsAppButton/WhatsAppButton";

const ServicesPage = () => {
    return (
        <>
            <Header />
            <Navbar />

            {/* Typewriter details section */}
            <div style={{ padding: '85px 0 100px', backgroundColor: '#ffffff' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                    <ServiceDetail />
                </div>
            </div>

            {/* Reusable Services Section from Home page */}
            <ServicesSection showLoadMore={false} />

            {/* Reusable Footer */}
            <Footer />

            <WhatsAppButton />
        </>
    );
};

export default ServicesPage;
