import styles from './ServicesSection.module.css';
import serviceRes from '../../assets/service_res.png';
import servicePhoto from '../../assets/service_photo.png';
import serviceGrid from '../../assets/service_grid.png';
import serviceBattery from '../../assets/service_battery.png';
import serviceEpc from '../../assets/service_epc.png';
import serviceRooftop from '../../assets/service_rooftop.png';

interface ServicesSectionProps {
    showLoadMore?: boolean;
}

const ServicesSection = ({ showLoadMore = true }: ServicesSectionProps) => {
    const services = [
        {
            image: serviceRes,
            title: "Residential and Small Utility",
            desc: "Reliable solar solutions for homes, apartments, and small utility applications. Reduce electricity costs and generate clean, sustainable energy with professionally designed solar systems."
        },
        {
            image: servicePhoto,
            title: "Photovoltaic Modules",
            desc: "High-quality photovoltaic modules designed to deliver efficient and consistent solar power. Our panels are suitable for residential, commercial, and utility-scale installations."
        },
        {
            image: serviceGrid,
            title: "Grid Connected Solar System",
            desc: "Connect your solar system to the power grid and maximize your energy savings. Our grid-connected solutions help reduce electricity bills while efficiently utilizing solar energy."
        },
        {
            image: serviceBattery,
            title: "Battery Based Solar System",
            desc: "Store excess solar energy and use it when you need it. Our battery-based systems provide reliable backup power and help maintain energy availability during power outages."
        },
        {
            image: serviceEpc,
            title: "Solar EPC",
            desc: "Complete Engineering, Procurement, and Construction services for solar projects. From system design and equipment selection to installation and commissioning, we manage the entire project."
        },
        {
            image: serviceRooftop,
            title: "Solar Rooftop Panel",
            desc: "Make the most of your rooftop with an efficient solar power system. Our rooftop solutions are designed to reduce electricity costs and provide clean energy for homes and businesses."
        }
    ];

    return (
        <section className={styles.servicesSection} id="services">
            <div className={styles.container}>
                <div className={styles.headerArea}>
                    <span className={styles.subtitle}>Our Best Services</span>
                    <h2 className={styles.title}>We Ensure Best Services For Our Clients</h2>
                </div>

                <div className={styles.servicesGrid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.serviceCard}>
                            <div className={styles.imageWrapper}>
                                <img src={service.image} alt={service.title} className={styles.cardImage} />
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                                <p className={styles.cardDesc}>{service.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {showLoadMore && (
                    <div className={styles.buttonWrapper}>
                        <button
                            className={styles.scrollBtn}
                            aria-label="Load More Services"
                            onClick={() => {
                                window.location.href = "/?page_id=13";
                            }}
                        >
                            <span className={styles.btnTextContainer}>
                                <span className={styles.btnText}>LOAD MORE</span>
                                <span className={styles.btnText}>OUR SERVICES</span>
                            </span>
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ServicesSection;
