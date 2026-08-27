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
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        },
        {
            image: servicePhoto,
            title: "Photovoltaic Modules",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        },
        {
            image: serviceGrid,
            title: "Grid Connected Solar System",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        },
        {
            image: serviceBattery,
            title: "Battery Based Solar System",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        },
        {
            image: serviceEpc,
            title: "Solar EPC",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        },
        {
            image: serviceRooftop,
            title: "Solar Rooftop Panel",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
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
