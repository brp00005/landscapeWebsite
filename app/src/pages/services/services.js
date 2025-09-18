import React from 'react';
import './services.css'; // This line imports the CSS styles below

// Data for the services section, making it easy to manage.
const servicesData = [
    {
        icon: 'fas fa-leaf',
        title: 'Lawn Maintenance',
        text: 'We can handle routine lawn care including edging, patching bare spots, and maintaining irrigation systems.',
    },
    {
        icon: 'fas fa-seedling',
        title: 'Hydroseeding',
        text: 'We offer hydroseeding services available for residential and commercial properties—ideal for erosion control & new lawns.',
    },
    {
        icon: 'fas fa-tree',
        title: 'Landscaping',
        text: 'We offer landscape installation, including planting, hardscaping, and outdoor features for your space.',
    },
    {
        icon: 'fas fa-cut',
        title: 'Stump Removal',
        text: 'We can remove stumps from your property, and handle both extraction and backfilling to leave your yard clean & stump-free.',
    },
    {
        icon: 'fas fa-shovel',
        title: 'Excavation',
        text: 'Our excavation services include site preparation, grading, and digging for landscaping or construction projects.',
    },
    {
        icon: 'fas fa-broom',
        title: 'Spring/Fall Cleanup',
        text: 'Seasonal cleanup services to remove leaves, branches, and other debris, along with trimming.',
    },
    {
        icon: 'fas fa-trailer',
        title: 'Dump Trailer Removal',
        text: 'We will haul away yard waste, renovation debris, and/or general clutter.',
    },
    {
        icon: 'fas fa-truck-loading',
        title: 'Mulch/Stone Delivery',
        text: 'Mulch or stone will be delivered directly to your property. Installation available upon request.',
    },
];

const Services = () => {
    return (
        <section id="three" className="wrapper style3 special">
            <div className="inner">
                <header className="major">
                    <h2>Our Services</h2>
                    <p>
                        Here is the list of services we offer. If you have any questions or comments, feel free to reach out to us through our  
                        <a href="/contact"> contact page</a>, phone number or email.
                    </p>
                </header>
                <ul className="features">
                    {servicesData.map((service, index) => (
                        <li key={index} className={`icon ${service.icon}`}>
                            <h3>{service.title}</h3>
                            <p>{service.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Services;